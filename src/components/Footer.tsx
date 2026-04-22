export default function Footer() {
    return (
        <footer className="bg-black text-white flex justify-center items-center h-10 z-10 relative font-IBMPlexMono">
            <div className="sm:text-sm text-xs text-center flex flex-wrap justify-center items-center z-40">
                <span className="inline-block mr-2">©</span>
                <span>{new Date().getFullYear()} deltamaya. All works licensed under&nbsp;</span>
                <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/"
                    className="text-red-600 underline"
                >
                    CC BY-NC 4.0
                </a>
            </div>
        </footer>
    )
}
