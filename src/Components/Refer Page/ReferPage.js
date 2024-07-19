export default function ReferPage() {
    return (
        <div className="flex flex-col bg-main w-full h-[785px] justify-center">
            <div className="flex items-center justify-center z-20">
                <h1 className="font-semibold text-[27.66px] leading-[43px]">How Do I <span className="text-button">Refer ?</span></h1>
            </div>
            <div className="flex w-[1387px] h-[491px] self-center px-[200px] justify-between items-center bg-plate" >
                <div className="flex flex-col justify-center items-center z-10 w-[193px] h-[88px] text-center">
                    <img src="/assets/images/icon1.png" alt="icon1" className="w-[88px] h-[66.96px] z-10 mb-5" />
                    <p>Submit referrals easily via our website{`'`}s referral section.</p>
                </div>
                <div className="flex flex-col justify-center items-center z-10 w-[193px] h-[88px] text-center">
                    <img src="/assets/images/icon2.png" alt="icon2" className="w-[65.11px] h-[67.38px] z-10 mb-5" />
                    <p>Earn rewards once your referral joins an Accredian program.</p>
                </div>
                <div className="flex flex-col justify-center items-center z-10 w-[193px] h-[88px] text-center">
                    <img src="/assets/images/icon3.png" alt="icon3" className="w-[65px] h-[67.25px] z-10 mb-5" />
                    <p>Earn rewards once your referral joins an Accredian program.</p>
                </div>
            </div>
            <div className="z-0 flex justify-center pt-[78px]">
                <button className="w-[236px] h-[64px] rounded-[8px] bg-button items-center text-white font-sans">Refer Now</button>
            </div>
        </div>
    );
};
