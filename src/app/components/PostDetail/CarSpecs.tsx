import React from 'react';

interface CarSpec {
  label: string;
  value: string;
}

interface CarSpecsProps {
  specs?: CarSpec[];
}

const CarSpecs = ({ specs }: CarSpecsProps) => {
  const defaultSpecs: CarSpec[] = [
    { label: 'Model Year', value: '2024' },
    { label: 'Fuel Type', value: 'Electric' },
    { label: 'Top Speed', value: '250 km/h' },
    { label: 'Price Range', value: '$45,000 - $65,000' },
    { label: 'Engine', value: 'Dual Motor AWD' },
    { label: '0-100 km/h', value: '3.8 seconds' }
  ];

  const displaySpecs = specs || defaultSpecs;

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Car Specifications</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {displaySpecs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-b-0">
            <span className="text-gray-400 font-medium">{spec.label}</span>
            <span className="text-white font-semibold">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSpecs;
// 