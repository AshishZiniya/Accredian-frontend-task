import { useState } from 'react';

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center pt-[90px] mb-10">
                <h1 className="font-semibold text-[27.66px] leading-[43px]">
                    Frequently Asked <span className="text-button">Questions</span>
                </h1>
            </div>
            <div className="flex justify-between w-[1100px]">
                <div className="flex flex-col w-[260px] h-[244px] justify-between items-center">
                    <button className="w-[260px] h-[68px] rounded-[8px] bg-transparent items-center text-button shadow-btn font-sans">Eligibility</button>
                    <button className="w-[260px] h-[68px] rounded-[8px] bg-transparent border-2 border-bdr2 items-center text-bdr2 font-sans">How to Use?</button>
                    <button className="w-[260px] h-[68px] rounded-[8px] bg-transparent border-2  border-bdr2 items-center text-bdr2 font-sans">Terms & Conditions</button>
                </div>
                <div className="w-full ml-5">
                    <div id="accordion-flush">
                        <h2 id="accordion-flush-heading-1">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => handleAccordionClick(1)}
                                aria-expanded={activeIndex === 1}
                                aria-controls="accordion-flush-body-1"
                            >
                                <span className="text-button">Do I need to have prior Product Management and Project Management experience to enroll in the program?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transition-transform ${activeIndex === 1 ? '' : 'rotate-180'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${activeIndex === 1 ? 'block' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                                    suitable for individuals from any field of work.
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-2">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                onClick={() => handleAccordionClick(2)}
                                aria-expanded={activeIndex === 2}
                                aria-controls="accordion-flush-body-2"
                            >
                                <span>What is the minimum system configuration required?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transition-transform ${activeIndex === 2 ? '' : 'rotate-180'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-2" className={`${activeIndex === 2 ? 'block' : 'hidden'}`} aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400">Minimum system requirements include a modern web browser and a stable internet connection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1360px] h-[210px] rounded-[12px] bg-hero mt-[100px] mb-[100px]" />
        </div>
    );
}
