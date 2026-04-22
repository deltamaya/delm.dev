export default function Header() {
    return (
        <div className="bg-black z-50 py-2 self-center px-5 w-full flex lg:text-3xl md:text-2xl text-xl sticky top-0 border-b border-neutral-800 bg-opacity-70 backdrop-blur-xl items-center justify-center">
            <div className="max-w-[1440px] w-full self-center flex items-center">
                <a href="https://delm.dev">
                    <img
                        src="/logo-white.svg"
                        alt="logo"
                        className="lg:w-[50px] md:w-[45px] w-[40px] lg:h-[50px] md:h-[45px] h-[40px]"
                    />
                </a>
                <div className="mx-4 text-white font-bold">Main</div>
            </div>
        </div>
    )
}
