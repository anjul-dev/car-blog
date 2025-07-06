'use client';
import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  label: string;
  error?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  rows?: number;
  disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  error,
  maxLength,
  minLength,
  required = false,
  rows = 4,
  disabled = false
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    
    // Prevent exceeding max length
    if (maxLength && inputValue.length > maxLength) {
      return;
    }
    
    // For name field, prevent numbers and symbols
    if (name === 'name' && inputValue) {
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(inputValue)) {
        return;
      }
    }
    
    onChange(e);
  };

  const remainingChars = maxLength ? maxLength - value.length : null;

  return (
    <div className="group">
      <label 
        htmlFor={id} 
        className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-orange-500"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            rows={rows}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg text-gray-900 placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 
              transition-all duration-300 ease-in-out resize-none
              hover:border-gray-400 hover:shadow-sm
              ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300'}
              ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
              shadow-sm hover:shadow-md focus:shadow-lg`}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            className={`w-full px-4 py-3 bg-white border-2 rounded-lg text-gray-900 placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 
              transition-all duration-300 ease-in-out
              hover:border-gray-400 hover:shadow-sm
              ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300'}
              ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
              shadow-sm hover:shadow-md focus:shadow-lg`}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
          />
        )}
        
        {/* Character counter */}
        {maxLength && (
          <div className="absolute -bottom-6 right-0 text-xs text-gray-500">
            <span className={remainingChars && remainingChars < 10 ? 'text-orange-500' : remainingChars === 0 ? 'text-red-500' : ''}>
              {value.length}/{maxLength}
            </span>
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;