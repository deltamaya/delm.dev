import { projects } from '../data'

export default function ProjectsDisplay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 z-[20]">
            {projects.map(({ href, title, icon, techs, desc }, index) => (
                <a
                    key={index}
                    href={href}
                    className="flex flex-col border border-neutral-800 px-4 py-2 bg-black hover:-translate-y-1 duration-300 transition-all hover:border-red-600 justify-between will-change-transform"
                >
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center">
                            {icon && (
                                <img src={icon} alt={title} className="lg:h-[20px] h-[15px] w-auto mr-2" />
                            )}
                            <div className="lg:text-3xl md:text-2xl text-xl font-bold">{title}</div>
                        </div>
                        <div className="lg:text-xl md:text-lg text-sm font-normal text-neutral-400 flex">
                            {desc}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
