'use client';
import ContactInfo from '@/components/Contact/ContactInfo';
import FormSection from '@/components/Contact/FormSection';
import QuickTips from '@/components/Contact/QuickTips';
import FormButton from '@/components/Shared/FormButton';
import FormInput from '@/components/Shared/FormInput';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationRules = {
    name: { min: 2, max: 20 },
    email: { min: 5, max: 50 },
    subject: { min: 3, max: 100 },
    message: { min: 10, max: 500 }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < validationRules.name.min) {
      newErrors.name = `Name must be at least ${validationRules.name.min} characters`;
    } else if (formData.name.length > validationRules.name.max) {
      newErrors.name = `Name cannot exceed ${validationRules.name.max} characters`;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (formData.email.length < validationRules.email.min) {
      newErrors.email = `Email must be at least ${validationRules.email.min} characters`;
    } else if (formData.email.length > validationRules.email.max) {
      newErrors.email = `Email cannot exceed ${validationRules.email.max} characters`;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < validationRules.subject.min) {
      newErrors.subject = `Subject must be at least ${validationRules.subject.min} characters`;
    } else if (formData.subject.length > validationRules.subject.max) {
      newErrors.subject = `Subject cannot exceed ${validationRules.subject.max} characters`;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < validationRules.message.min) {
      newErrors.message = `Message must be at least ${validationRules.message.min} characters`;
    } else if (formData.message.length > validationRules.message.max) {
      newErrors.message = `Message cannot exceed ${validationRules.message.max} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(`Thank you, ${formData.name}! Your message has been received.`); // ✅ Toast instead of alert

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 2000);
  };


  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-gray-50"></div>
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have a question about cars, want to suggest a review, or just want to say hello? We&#39;d love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <FormSection
                title="Send us a Message" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormInput
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    label="Name"
                    error={errors.name}
                    maxLength={validationRules.name.max}
                    minLength={validationRules.name.min}
                    required
                  />

                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    label="Email"
                    error={errors.email}
                    maxLength={validationRules.email.max}
                    minLength={validationRules.email.min}
                    required
                  />

                  <FormInput
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    label="Subject"
                    error={errors.subject}
                    maxLength={validationRules.subject.max}
                    minLength={validationRules.subject.min}
                    required
                  />

                  <FormInput
                    id="message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what's on your mind..."
                    label="Message"
                    error={errors.message}
                    maxLength={validationRules.message.max}
                    minLength={validationRules.message.min}
                    rows={6}
                    required
                  />

                  <FormButton
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </FormButton>
                </form>
              </FormSection>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
              <FormSection title="Contact Information">
                <ContactInfo />
              </FormSection>

              <FormSection title="Quick Tips">
                <QuickTips />
              </FormSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;