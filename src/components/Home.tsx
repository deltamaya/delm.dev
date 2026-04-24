import { socialLinks } from '../data'
import SocialLink from './SocialLink'
import Separator from './Separator'
import BlogsDisplay from './BlogsDisplay'
import ProjectsDisplay from './ProjectsDisplay'
import VideoDisplay from './VideoDisplay'
import FriendsDisplay from './FriendsDisplay'

export default function Home() {
    return (
        <div className="flex flex-grow flex-col w-full scroll-smooth text-neutral-100 items-center bg-transparent z-10">
            {/* Hero */}
            <div className="flex flex-wrap justify-around items-center w-full max-w-[1440px] my-12">
                <div className="flex flex-col justify-center items-center mx-5 z-[20]">
                    <img
                        src="https://delm.dev/avatar.webp"
                        alt="avatar"
                        className="my-5 lg:h-72 md:h-64 sm:h-56 h-48 rounded-full lg:border-4 md:border-3 border-2 hover:border-red-600 border-neutral-950 transition-colors duration-500"
                    />
                </div>
                <div>
                    <div className="lg:text-2xl md:text-xl text-lg font-bold justify-center items-center flex flex-col mb-3">
                        <div>
                            <span className="text-red-600">del</span>ta<span className="text-red-600">m</span>aya
                        </div>
                    </div>
                    <div>zh-CN / en-US / ja-JP</div>
                    <div>
                        <span className="text-red-600 font-bold">S</span>oftware Developer &amp;{' '}
                        <span className="text-red-600 font-bold">C</span>ontent Creator
                    </div>
                    <div>
                        - average <span className="text-red-600 font-bold">ACG</span> enthusiast
                    </div>
                    <div>
                        - always keeping <span className="text-red-600 font-bold">C</span>uriosity
                    </div>
                    <div>
                        - trying to be <span className="text-red-600 font-bold">I</span>nnovative
                    </div>
                    <div className="my-12">"Work hard, Play hard."</div>
                    <div className="flex space-x-2">
                        {socialLinks.map((link) => (
                            <SocialLink
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                iconClass={link.iconClass}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Blogs */}
            <Separator />
            <div className="flex flex-col font-bold lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center">
                <div className="lg:text-4xl md:text-3xl text-2xl font-extrabold px-5 w-full max-w-[1440px]">
                    .blogs
                </div>
                <div className="font-normal text-xl">
                    Picked posts from{' '}
                    <a href="https://blog.delm.dev" className="underline transition-colors hover:text-red-600">
                        blog.delm.dev
                    </a>
                </div>
                <div className="flex justify-center items-center w-full max-w-[1440px]">
                    <BlogsDisplay />
                </div>
            </div>

            {/* Projects */}
            <Separator />
            <div className="flex flex-col font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center">
                <div className="font-extrabold px-5 w-full max-w-[1440px]">.projects</div>
                <div className="font-normal text-xl">Built / contributed projects</div>
                <div className="flex justify-center items-center w-full max-w-[1440px]">
                    <ProjectsDisplay />
                </div>
            </div>

            {/* Videos */}
            <Separator />
            <div className="flex flex-col font-bold lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center">
                <div className="lg:text-4xl md:text-3xl text-2xl font-extrabold px-5 w-full max-w-[1440px]">
                    .videos
                </div>
                <div className="font-normal text-xl">
                    Picked videos from{' '}
                    <a
                        href="https://www.youtube.com/@0xdelm"
                        className="underline transition-colors hover:text-red-600"
                    >
                        0xdelm channel
                    </a>
                </div>
                <div className="flex justify-center items-center w-full max-w-[1440px]">
                    <VideoDisplay />
                </div>
            </div>

            {/* Links */}
            <Separator />
            <div className="flex flex-col font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center">
                <div className="font-extrabold px-5 w-full max-w-[1440px]">.links</div>
                <div className="font-normal text-xl">External links</div>
                <FriendsDisplay />
            </div>
        </div>
    )
}
