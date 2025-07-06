'use client';
import React from 'react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border border-gray-200">
      <div className="text-orange-500 text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-gray-900 font-semibold">{title}</p>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <ContactInfoItem
        icon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        }
        title="Address"
        content="Firststreet 118 2561 abctown"
      />
      <ContactInfoItem
        icon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        }
        title="Email"
        content="example@femail.com"
      />
      <ContactInfoItem
        icon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        }
        title="Phone"
        content="001 2345 442"
      />
    </div>
  );
};

export default ContactInfo;
