import { useState } from 'react';
import Form from '../forms/Form';

export default function MainPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-[797px] h-[63px] bg-primary items-center pl-[100px] pr-[100px] text-xl justify-between rounded-full">
                <a href="/" className="rounded-md px-3 py-2 text-lg font-medium text-menu">Refer</a>
                <a href="/" className="rounded-md px-3 py-2 text-lg font-medium text-menu">Benefit</a>
                <a href="/" className="rounded-md px-3 py-2 text-lg font-medium text-menu">FAQs</a>
                <a href="/" className="rounded-md px-3 py-2 text-lg font-medium text-menu">Support</a>
            </div>
            <div className="relative flex w-[1360px] h-[692px] bg-main shadow-custom rounded-[29px] m-[27px]">
                <img className="w-[157px] h-[157px] z-50 absolute left-[560px] top-[485px]" src="/assets/images/1.png" alt="" />
                <img className="w-[817px] h-[725px] z-40 absolute left-[520px]" src="/assets/images/2.png" alt="" />
                <img className="w-[157px] h-[87px] z-30 absolute left-[1180px]" src="/assets/images/3.png" alt="" />
                <img className="w-[157px] h-[87px] z-20 absolute left-" src="/assets/images/4.png" alt="" />
                <img className="w-[157px] h-[157px] z-10 absolute left-[1200px] top-[270px]" src="/assets/images/5.png" alt="" />
                <img className="w-[157px] h-[157px] z-0 absolute left-[725px]" src="/assets/images/6.png" alt="" />
                <div className="w-[502px] h-[367px] absolute left-[40px] top-[100px]">
                    <h1 className="text-[88px] text-textcolor leading-none font-bold font-sans pb-[37px]">Let{`'`}s Learn & Earn</h1>
                    <div className="w-[415px] h-[140px]">
                        <h1 className="font-sans font-normal text-[40px] leading-[65px]">Get a chance to win up-to <span className="text-button font-bold text-[54px]">Rs. 15,000</span></h1>
                    </div>
                </div>
                <button
                    className="w-[192px] h-[54px] rounded-[8px] bg-button text-white font-sans absolute left-[40px] top-[524px]"
                    onClick={handleButtonClick}
                >
                    Refer Now
                </button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        <div className='flex w-[full] justify-between'>
                            <h2 className="text-2xl mb-4">Referral Form</h2>
                            <button
                                onClick={handleClosePopup}
                                className="text-black hover:text-gray-800"
                            >
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <Form />
                    </div>
                </div>
            )}
        </div>
    );
}
