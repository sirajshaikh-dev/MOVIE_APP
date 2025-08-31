import React, { useState } from 'react';

const Dropdown = ({ title, options, setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option, event) => {
        setSelectedOption(option);
        setCategory(event);
        setIsOpen(false);
    };

    return (
        <div className="relative font-bold m-2 select-none">
            <div 
                className="flex items-center justify-between bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-600 rounded-xl px-5 py-3 cursor-pointer hover:from-slate-800 hover:to-slate-700 transition-all duration-300 min-w-40 shadow-lg hover:shadow-xl group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-medium text-slate-200">
                    {selectedOption ? selectedOption.toUpperCase() : title}
                </span>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg 
                        className="w-4 h-4 text-slate-300 group-hover:text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-600 rounded-xl shadow-2xl overflow-hidden z-10 animate-slideDown">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="px-5 py-3 text-sm text-slate-300 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-blue-900/30 hover:text-white border-b border-slate-700/50 last:border-b-0 transition-all duration-200 flex items-center justify-between group"
                            onClick={(e) => handleSelect(option, { target: { value: option } })}
                        >
                            <span>{option.toUpperCase()}</span>
                            <div className="w-1 h-1 bg-transparent group-hover:bg-slate-300 rounded-full transition-all duration-200"></div>
                        </div>
                    ))}
                </div>
            )}

            {/* Subtle glow effect */}
            <div className={`absolute inset-0 rounded-xl pointer-events-none ${isOpen ? 'shadow-2xl shadow-purple-500/20' : 'shadow-lg shadow-transparent'} transition-all duration-300`}></div>
        </div>
    );
};

// Add CSS for animation
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes slideDown {
//         from {
//             opacity: 0;
//             transform: translateY(-10px) scale(0.95);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//         }
//     }
//     .animate-slideDown {
//         animation: slideDown 0.2s ease-out;
//     }
// `;
// document.head.appendChild(style);

export default Dropdown;