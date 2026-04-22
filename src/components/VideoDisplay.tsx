import { videos } from '../data'

export default function VideoDisplay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 z-[20]">
            {videos.map(({ link, title, description, thumbnail }, index) => (
                <a
                    key={index}
                    href={link}
                    className="flex flex-col border-[1px] bg-black border-neutral-800 hover:border-red-600 transition-all hover:-translate-y-1 duration-300 will-change-transform overflow-hidden"
                >
                    <img src={thumbnail} alt={title} className="w-full object-cover" />
                    <div className="px-4 py-2">
                        <div className="lg:text-2xl md:text-xl text-lg font-bold">{title}</div>
                        <div className="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
                            {description}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
