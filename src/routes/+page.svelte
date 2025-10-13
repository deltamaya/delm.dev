<script lang="ts">
    import ProjectsDisplay from "./ProjectsDisplay.svelte";
    import FriendsDisplay from "./FriendsDisplay.svelte";

    import BlogsDisplay from "./BlogsDisplay.svelte";
    import {socialLinks,blogs} from "$lib/data";
    import SocialLink from "./SocialLink.svelte";
    import Separator from "./Separator.svelte";

</script>

<div class="flex flex-grow flex-col w-full scroll-smooth text-neutral-100 items-center bg-black">
    <div class="flex flex-wrap justify-around items-center w-full max-w-[1440px] my-10">
        <div class="flex flex-col justify-center items-center mx-5 z-[20]">
            <img src="https://img.delm.dev/avatar.webp" alt="avatar"
                 class="my-5 lg:h-72 md:h-64 sm:h-56 h-48 rounded-full lg:border-4 md:border-3 border-2 hover:border-red-600 border-neutral-900 transition-colors duration-500"/>
        </div>
        <div>
            <div class="lg:text-2xl md:text-xl text-lg font-bold justify-center items-center flex flex-col mb-3">
                <div>
                    <span class="text-red-600">del</span>ta<span class="text-red-600">m</span>aya
                </div>
            </div>

            <div>
                zh-CN / en-US
            </div>
            <div>
                <span class="text-red-600 font-bold">S</span>oftware Developer & <span class="text-red-600 font-bold">C</span>ontent Creator
            </div>

            <div>
                - average <span class="text-red-600 font-bold">ACG</span> enthusiast
            </div>

            <div class="my-16">
                Work hard, Play hard.
            </div>

            <div class="flex space-x-2">
                {#each socialLinks as link}
                    <SocialLink  href={link.href} label={link.label} iconClass={link.iconClass}/>
                {/each}
            </div>
        </div>
    </div>


    <Separator/>
    <div class=" flex flex-col  font-bold lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center"
    >
        <div class="lg:text-4xl md:text-3xl text-2xl font-extrabold px-5 w-full max-w-[1440px]">
            .blogs
        </div>
        <div class="font-normal text-xl">
            Picked posts from <a href="https://blog.delm.dev" class="underline transition-colors hover:text-red-600">blog.delm.dev</a>
        </div>
        <div class="flex justify-center items-center w-full max-w-[1440px]">
            <BlogsDisplay blogs={blogs}/>
        </div>
    </div>

    <Separator/>
    <div class="flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center">
        <div class="font-extrabold px-5 w-full max-w-[1440px]">
            .projects
        </div>
        <div class="font-normal text-xl">
            Built / contributed projects
        </div>
        <div class="flex justify-center items-center w-full max-w-[1440px]">
            <ProjectsDisplay/>
        </div>
    </div>
    <Separator/>

    <div class=" flex flex-col  font-bold lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center"
    >
        <div class="lg:text-4xl md:text-3xl text-2xl font-extrabold px-5 w-full max-w-[1440px]">
            .videos
        </div>
        <div class="font-normal text-xl">
            Picked videos from <a href="https://www.youtube.com/@0xdelm" class="underline transition-colors hover:text-red-600">0xdelm channel</a>
        </div>
        <div class="flex justify-center items-center w-full max-w-[1440px]">
            <BlogsDisplay blogs={blogs}/>
        </div>
    </div>
    <Separator/>
    <div class=" flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4  w-full max-w-[1440px] px-2 space-y-5 items-center">
        <div class="font-extrabold px-5 w-full max-w-[1440px]">
            .links
        </div>
        <div class="font-normal text-xl">
            External links
        </div>
        <FriendsDisplay/>
    </div>

</div>

<div class="fixed inset-0 pointer-events-none z-[10] w-[1440px] h-[712px] opacity-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <img
            src="/logo-white.svg"
            alt="Background Logo"
            class="absolute"
            style="filter: blur(30px);"
    />
</div>