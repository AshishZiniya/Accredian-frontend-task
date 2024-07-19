export default function Benefit() {

    const programs = [
        "Product Management",
        "Strategy & Leadership",
        "Business Management",
        "Fintech",
        "Senior Management",
        "Data Science",
        "Digital Transformation",
        "Business Analytics",
    ];

    const extras = [
        { program: "Professional Certificate Program in Product Management", cost1: "7,000", cost2: "9,000" },
        { program: "PG Certificate Program in Strategic Product Management", cost1: "9,000", cost2: "11,000" },
        { program: "Executive Program in Data Driven Product Management", cost1: "10,000", cost2: "10,000" },
        { program: "Executive Program in Product Management and Digital Transformation", cost1: "10,000", cost2: "10,000" },
        { program: "Executive Program in Product Management", cost1: "10,000", cost2: "10,000" },
        { program: "Advanced Certification in Product Management", cost1: "10,000", cost2: "10,000" },
        { program: "Executive Program in Product Management and Project Management", cost1: "10,000", cost2: "10,000" },
    ];


    return (
        <div className="justify-center">
            <div className="flex items-center justify-center pt-[90px]">
                <h1 className="font-semibold text-[27.66px] leading-[43px]">What Are The <span className="text-button">Referral Benefits?</span></h1>
            </div>
            <div className="flex justify-center">
                <div className="flex w-[1231px] h-[50px] justify-end items-end" >
                    <label class="flex mb-5 cursor-pointer">
                        <span class="ms-3 text-sm font-medium mr-4 text-gray-900 dark:text-gray-300">Enrolled</span>
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="relative w-[34.18px] h-[17px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-[270px] h-[572px] shadow-box rounded-bottom">
                    <div className="flex h-[50px] bg-button justify-between rounded-t-lg text-white p-4">
                        <div className="flex items-center ">ALL PROGRAMS</div>
                        <div className="flex items-center">
                            <svg class="h-[16px] w-[16px]" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col h-[522px] justify-start space-y-2 items-center mt-4">
                        {programs.map((item) => {
                            return (
                                <>
                                    <div key={item} className="flex w-[238.25px] h-[43px] justify-between">
                                        <div className="flex items-center">{item}</div>
                                        <div className="flex items-center">
                                            <svg class="h-[16px] w-[16px]" viewBox="0 0 20 20" fill="arrow" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="border-b-2 border-alpha w-[227px]" />
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="relative w-[921px] h-[561px] ml-[40px]">
                    <div className="w-[921px] h-[58px] bg-table rounded-t-[14px] z-0">
                        <span className="absolute left-[27px] top-[14px] w-[227.44px] h-[24px] text-[20px] font-bold text-txt leadig-[24px]">Programs</span>
                        <span className="absolute left-[551px] top-[14px] w-[227.44px] h-[24px] text-[20px] font-bold text-txt leadig-[24px]">Referrer Bonus</span>
                        <span className="absolute left-[741px] top-[14px] w-[227.44px] h-[24px] text-[20px] font-bold text-txt leadig-[24px]">Referee Bonus</span>
                    </div>
                    <div className="w-[921px] h-[503px] bg-tbl shadow-tblshadow rounded-b-[14px] pt-[20px] z-0">
                        {extras.map((item) => {
                            return (
                                <div key={item} className="flex w-[] h-[48px] ml-[27px] mb-[20px]">
                                    <div className="w-[24.05px] h-[18px] mt-2 mr-[13px]">
                                        <img className="w-[24.05px] h-[18px]" alt="school" src="/assets/images/school.png" />
                                    </div>
                                    <div className="w-[390px] h-[84px] text-wrap font-normal">
                                        <span className="text-[20px]">{item.program}</span>
                                    </div>
                                    <div className="w-[59.07px] h-[24px] ml-[155px]">
                                        <span>{item.cost1}</span>
                                    </div>
                                    <div className="w-[59.07px] h-[24px] ml-[120px]">
                                        <span>{item.cost2}</span>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className="absolute left-[530px] top-[0px] h-[561px] border-r-2 border-r-bdr z-10"></div>
                    <div className="absolute left-[730px] top-[0px] h-[561px] border-r-2 border-r-bdr z-10"></div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex mt-[35px] w-[1231px] justify-end border">
                    <button type="button" className="flex w-[174.66px] h-[41px] justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-arrow border border-btn" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Show More
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="arrow" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-center pt-[25px]">
                <button className="w-[236px] h-[64px] rounded-[8px] bg-button items-center text-white font-sans">Refer Now</button>
            </div>
        </div>
    );
};
