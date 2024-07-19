import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter, FaSquareInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {

    const Programs = [
        "Data Science & AI",
        "Product Management",
        "Business Analytics",
        "Digital Transformation",
        "Business Management",
        "Project Management",
        "Strategy & Leadership",
        "Senior Management",
        "Fintech",
    ];

    const pages = [
        "About",
        "Career",
        "Blog",
        "Admission Policy",
        "Referral Policy",
        "Privacy Policy",
        "Terms of Service",
        "Master FAQs",
    ]

    return (
        <div className="flex w-full h-[795.88px] items-center justify-center bg-footer">
            <div className="flex flex-col w-[1200px] h-[731.88px] content-start bg-footer">
                <div className="flex justify-center h-[59px] mb-[32px]">
                    <div className="w-[768px]">
                        <div className=" flex-shrink-0">
                            <img className="h-8 w-auto" src="/assets/images/logoDark.png" alt="Your Company" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[384px] items-center justify-center">
                        <div className="flex items-center justify-center">
                            <button className="flex w-[250px] h-[39px] items-center justify-center gap-x-1.5 rounded-lg bg-button px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">Schedule 1-on-1 Call Now</button>
                        </div>
                        <div className="flex text-white items-center justify-center">
                            <span className="text-sm">Speak with our Learning Advisor</span>
                        </div>
                    </div>
                </div>
                <div className="flex h-[539.38px] items-center justify-center">
                    <div className="w-[432px] h-[539.38px] content-end border-t">
                        <div className="flex flex-col h-[507.38px] justify-end">
                            <div className="w-[416px] h-[30px] grid self-end"><span className="text-white items-left">Programs</span></div>
                            {Programs.map((item) => {
                                return (
                                    <div key={item} className="flex w-[380px] h-[52.44px] items-center p-4 text-white ">
                                        <div className="w-[324px] ">
                                            {item}
                                        </div>
                                        <div className="grid self-end">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-[528px] h-[539.38px] content-end border-t">
                        <div className="flex flex-col h-[507.38px] self-end">
                            <div className="flex flex-col h-[306.11px] text-white">
                                <h1 className="text-xl pb-1">Contact Us</h1>
                                <a href="/" className="text-sm/[14px] pb-0.5">Email us (For Data Science Queries): admissions@accredian.com</a>
                                <a href="/" className="text-sm/[14px] pb-0.5">Email us (For Product Management Queries):pm@accredian.com</a>
                                <p className="text-sm/[14px] pb-0.5">Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
                                <p className="text-sm/[14px] pb-0.5">Product Management Admission Helpline:+91 9625811095</p>
                                <p className="text-sm/[14px] pb-0.5">Enrolled Student Helpline: +91 7969322507</p>
                                <p className="text-sm/[14px] pb-0.5">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,Haryana 122015</p>
                                <h1 className="text-xl pb-0.5">Why Accredian</h1>
                                <p className="text-sm/[20px] pb-2">Follow Us</p>
                                <div className="flex gap-5">
                                    <FaSquareFacebook className="w-[24px] h-[24px]" />
                                    <FaLinkedin className="w-[24px] h-[24px]" />
                                    <FaSquareXTwitter className="w-[24px] h-[24px]" />
                                    <FaSquareInstagram className="w-[24px] h-[24px]" />
                                    <FaYoutube className="w-[24px] h-[24px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[192px] h-[539.38px] content-end border-t">
                        <div className="flex flex-col h-[507.38px] self-end">
                            <div className="flex flex-col h-[306.11px] text-white">
                                <h1 className="text-xl pb-1">Accredian</h1>
                                {
                                    pages.map((item) => {
                                        return (
                                            <a href="/" key={item} className="text-sm/[14px] pb-2">{item}</a>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-[101px] items-center justify-center text-white">
                    <p>&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
