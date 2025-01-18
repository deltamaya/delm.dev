<script lang="ts">

    import {fly} from 'svelte/transition'

    import ProjectsDisplay from "./ProjectsDisplay.svelte";
    import FriendsDisplay from "./FriendsDisplay.svelte";
    import AboutMeDisplay from "./AboutMeDisplay.svelte";
    import {frontendFrameworks, languages, miscs, operatingSystems, socialLinks} from "$lib/data";
    import IconLink from "./IconLink.svelte";
    import SocialLink from "./SocialLink.svelte";

    let showHeader = $state(false);
    let showHeaderThreshold = 500;

    $effect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    function handleScroll() {
        showHeader = window.scrollY > showHeaderThreshold;
    }

</script>
{#if showHeader}
    <div class="flex w-full fixed px-48 py-5 bg-neutral-800 opacity-95 text-white"
         transition:fly={{y:-50,duration:200}}>
        <div class="flex font-extrabold text-3xl space-x-10">
            <img src="logo-white.png" class="w-[70px] h-[35px]" alt="logo"/>
            <div>
                Projects
            </div>
            <div>
                About
            </div>
            <div>
                Friends
            </div>
        </div>
    </div>
{/if}
<div class="flex flex-col w-full">
    <div class="w-full h-6 bg-red-600"></div>
    <div class="my-5 px-48 w-full flex">
        <div class="flex flex-grow">
            <div class="flex font-extrabold text-3xl space-x-10">
                <img src="logo.png" class="w-[70px] h-[40px]" alt="logo"/>
                <div>
                    Projects
                </div>
                <div>
                    About
                </div>
                <div>
                    Friends
                </div>
            </div>
        </div>
    </div>
    <div class="px-48 flex justify-center items-center flex-col my-24">
        <div class="h-96 w-96 border-8 hover:border-red-600 border-neutral-900 transition-colors duration-300 rounded-full">
            <img src="avatar.jpg" alt="avatar" class="rounded-full"/>
        </div>
        <div class="font-extrabold text-4xl px-48 pt-32 text-center">
            Hey, I'm <span class="text-red-600">deltamaya</span>.
            A Computer Science student originally
            from Shandong, China. I hope this page could help you understand me better.
        </div>
        <div class="flex mt-10 space-x-2">
            {#each socialLinks as link}
                <SocialLink iconClass={link.iconClass} label={link.label} href={link.href}/>
            {/each}
        </div>
    </div>
    <div class="bg-neutral-800 w-full flex flex-col font-bold text-4xl py-16 px-48 text-white">
        <div class="text-6xl font-extrabold">
            .skillset
        </div>
        <div class="flex flex-col space-y-5 mt-5">
            <div class="flex items-center">
                languages:
                <div class="ml-3 flex space-x-3 justify-center items-center">
                    {#each languages as lang}
                        <IconLink iconUrl={lang.iconUrl} label={lang.label} href={lang.href}/>
                    {/each}
                </div>

            </div>
            <div class="flex items-center space-x-3">
                OS:
                <div class="ml-3 flex space-x-3 justify-center items-center">
                    {#each operatingSystems as os}
                        <IconLink iconUrl={os.iconUrl} label={os.label} href={os.href}/>
                    {/each}
                </div>
            </div>
            <div class="flex items-center space-x-3">
                frontend:
                <div class="ml-3 flex space-x-3 justify-center items-center">
                    {#each frontendFrameworks as framework}
                        <IconLink iconUrl={framework.iconUrl} label={framework.label} href={framework.href}/>
                    {/each}
                </div>
            </div>
            <div class="flex items-center">
                misc:
                <div class="ml-3 flex space-x-3 justify-center items-center">
                    {#each miscs as item}
                        <IconLink iconUrl={item.iconUrl} label={item.label} href={item.href}/>
                    {/each}
                </div>
            </div>
        </div>

    </div>
    <div class="flex flex-col  font-bold text-4xl py-16 px-48">
        <div class="text-6xl font-extrabold">
            .projects
        </div>
        Here are
        <ProjectsDisplay/>
    </div>
    <div class="flex flex-col  font-bold text-4xl py-16 px-48 bg-neutral-800 text-white">
        <div class="text-6xl font-extrabold">
            .info
        </div>
        <AboutMeDisplay/>
    </div>
    <div class="flex flex-col  font-bold text-4xl py-16 px-48">
        <div class="text-6xl font-extrabold">
            .links
        </div>
        Here are some links of my friends or some websites I appreciate.
        <FriendsDisplay/>
    </div>
</div>
