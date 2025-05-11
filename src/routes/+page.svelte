<script lang="ts">
    import ProjectsDisplay from "./ProjectsDisplay.svelte";
    import FriendsDisplay from "./FriendsDisplay.svelte";

    import Header from "./Header.svelte";
    import BlogsDisplay from "./BlogsDisplay.svelte";
    import {socialLinks} from "$lib/data";
    import SocialLink from "./SocialLink.svelte";
    import Seperator from "./Seperator.svelte";

    let {data} = $props()
</script>

<Header/>
<div class="flex flex-col w-full scroll-smooth text-neutral-100 items-center z-[-20] bg-black">
    <div class="flex flex-wrap justify-around items-center w-full max-w-[1440px] my-10 z-[10]">
        <div class="flex flex-col justify-center items-center mx-5">
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
                Computer Science
            </div>
            <div>
                C / C++ / Rust
            </div>
            <div>
                #! /bin/zsh
            </div>
            <div>
                macOS & Windows & Debian
            </div>
            <div>
                <span class="text-red-600">M</span>edia-Processing & Game-<span class="text-red-600">E</span>ngine
            </div>


            <div>
                - love playing <span class="text-red-600">G</span>ames
            </div>
            <div>
                - average <span class="text-red-600">A</span>nime watcher
            </div>
            <div>
                - not quite an <span class="text-red-600">E</span>ngineer
            </div>
            <div class="my-16">
                "夢はいつでも膨らむばかりで"
            </div>

            <div class="flex space-x-2">
                {#each socialLinks as link}
                    <SocialLink  href={link.href} label={link.label} iconClass={link.iconClass}/>
                {/each}
            </div>
        </div>
    </div>


    <Seperator/>
    <div class="z-[10] flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center"
    >
        <div class="lg:text-5xl md:text-4xl text-3xl font-extrabold px-5 w-full max-w-[1440px]">
            .blogs
        </div>
        <div class="font-normal text-xl">
            Recent blogs
        </div>
        <div class="flex justify-center items-center w-full max-w-[1440px]">
            <BlogsDisplay blogs={data.blogs}/>
        </div>
    </div>
    <Seperator/>
    <div class=" z-[10] flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 w-full max-w-[1440px] px-2 space-y-5 items-center">
        <div class="lg:text-5xl md:text-4xl text-3xl font-extrabold px-5 w-full max-w-[1440px]">
            .projects
        </div>
        <div class="font-normal text-xl">
            Built / contributed projects
        </div>
        <div class="flex justify-center items-center w-full max-w-[1440px]">
            <ProjectsDisplay/>
        </div>
    </div>

    <Seperator/>
    <div class=" z-[10] flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4  w-full max-w-[1440px] px-2 space-y-5 items-center">
        <div class="lg:text-5xl md:text-4xl text-3xl font-extrabold px-5 w-full max-w-[1440px]">
            .links
        </div>
        <div class="font-normal text-xl">
            External links
        </div>
        <FriendsDisplay/>
    </div>

</div>

<div class="fixed inset-0 pointer-events-none z-[0] w-[1440px] h-[712px] opacity-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <img
            src="/logo-white.svg"
            alt="Background Logo"
            class="absolute"
            style="filter: blur(10px);"
    />
</div>