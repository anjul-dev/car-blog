'use client';
import React from 'react';

const QuickTips: React.FC = () => {
  const tips = [
    "Looking for a specific car review? Let us know!",
    "Have a car story to share? We'd love to feature it.",
    "Partnership inquiries are always welcome.",
    "We typically respond within 24 hours."
  ];

  return (
    <div className="space-y-4">
      {tips.map((tip, index) => (
        <div 
          key={index}
          className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2 border border-gray-200"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-gray-700">{tip}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickTips;
