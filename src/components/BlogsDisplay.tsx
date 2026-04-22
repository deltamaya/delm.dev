import { blogs } from '../data'

export default function BlogsDisplay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 z-[20]">
            {blogs.map(({ link, title, description, pubDate }, index) => (
                <a
                    key={index}
                    href={link}
                    className="flex flex-col border-[1px] bg-black border-neutral-800 px-4 py-2 min-w-[250px] hover:border-red-600 transition-all hover:-translate-y-1 duration-300 will-change-transform"
                >
                    <div className="lg:text-2xl md:text-xl text-lg font-bold flex flex-col justify-between h-full">
                        <div>
                            {title}
                            <div className="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
                                {description}
                            </div>
                        </div>
                        <div className="lg:text-xl md:text-lg text-sm font-normal text-neutral-400 flex justify-end">
                            {new Date(pubDate).toLocaleDateString()}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
