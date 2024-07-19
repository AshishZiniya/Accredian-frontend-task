export default function Navbar() {
    return (
        <>
            <div className="w-full h-[60px] bg-primary item-center justify-center text-center py-4">
                <h3 className="">
                    Navigate your ideal career path with tailored expert advice{' '}
                    <a href="/" className="text-[#1A73E8] px-2">Contact Expert</a>
                </h3>
            </div>
            <div className="w-[1360px] h-[79.2px] flex">
                <div className="w-[560px] h-[60px] ml-[180px] flex flex-1 items-center justify-left">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="h-8 w-auto pr-[32px]" src="/assets/images/logo.png" alt="Your Company" />
                    </div>
                    <div>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-button px-3 py-2 text-sm font-semibold text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Courses
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-1 items-center pt-2 justify-end sm:items-stretch sm:justify-end w-[800px] h-[60px]">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4 ">
                            <a href="/" class="rounded-md px-3 py-2 text-lg font-medium text-textcolor hover:bg-gray-300 ">Refer & Earn</a>
                            <a href="/" class="rounded-md px-3 py-2 text-lg font-medium text-textcolor hover:bg-gray-300 ">Resources</a>
                            <a href="/" class="rounded-md px-3 py-2 text-lg font-medium text-textcolor hover:bg-gray-300 ">About us</a>
                            <button className="justify-center gap-x-1.5 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-textcolor">Login</button>
                            <button className="justify-center gap-x-1.5 rounded-md bg-button px-3 py-2 text-sm font-semibold text-white">Try for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
