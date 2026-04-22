import { friends } from '../data'

export default function FriendsDisplay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {friends.map(({ link, avatar, name, desc, site }, index) => (
                <a
                    key={index}
                    href={link}
                    className="flex flex-col border-[1px] border-neutral-800 px-4 py-2 hover:-translate-y-1 duration-300 z-30 backdrop-blur relative bg-black transition-all hover:border-red-600 justify-between will-change-transform"
                >
                    <div>
                        {avatar && <img src={avatar} alt="icon" className="w-16 h-16 my-2" />}
                        <div className="lg:text-2xl md:text-xl text-lg font-bold">{name}</div>
                    </div>
                    <div className="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">{desc}</div>
                    <div className="absolute top-2 right-2 lg:text-lg text-sm flex max-w-[200px]">
                        {site === '' ? 'visit site' : site}
                    </div>
                </a>
            ))}
        </div>
    )
}
