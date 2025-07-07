'use client';
import React from 'react';

interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  subtitle,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 text-sm">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default FormSection;