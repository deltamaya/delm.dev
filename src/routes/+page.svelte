<script lang="ts">


    import ProjectsDisplay from "./ProjectsDisplay.svelte";
    import FriendsDisplay from "./FriendsDisplay.svelte";
    import AboutMeDisplay from "./AboutMeDisplay.svelte";
    import {frontendFrameworks, languages, miscs, operatingSystems, socialLinks} from "$lib/data";
    import IconLink from "./IconLink.svelte";
    import SocialLink from "./SocialLink.svelte";
    import Header from "./Header.svelte";


</script>

<div class="flex flex-col w-full">
    <Header dark={false}/>
    <div class="flex flex-col justify-center items-center">
        <img src="avatar.png" alt="avatar"
             class="lg:h-96 md:h-64 sm:h-48 h-36 rounded-full lg:border-8 md:border-6 border-4 hover:border-red-600 border-neutral-900 transition-colors duration-300"/>
        <div class="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:px-48 px-16 lg:pt-32 md:pt-24 pt-12 text-center">
            Hey, I'm <span class="text-red-600">deltamaya</span>.
            A Computer Science student originally
            from Shandong, China. I hope this page could help you understand me better.
        </div>
        <div class="flex my-10 space-x-2">
            {#each socialLinks as link}
                <SocialLink iconClass={link.iconClass} label={link.label} href={link.href}/>
            {/each}
        </div>
    </div>
    <div class="bg-neutral-800 w-full flex flex-col font-bold text-4xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 text-white">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold">
            .tech
        </div>
        <div class="flex flex-col space-y-5 mt-5 lg:text-5xl md:text-3xl text-2xl p-5">
            <div class="flex items-center">
                languages:
                <div class="ml-3 flex space-x-3 justify-center items-center">
                    {#each languages as lang}
                        <IconLink iconUrl={lang.iconUrl} label={lang.label} href={lang.href}/>
                    {/each}
                </div>
            </div>
            <div class="flex items-center">
                OS:
                <div class="ml-3 flex space-x-3 justify-center items-center">
                    {#each operatingSystems as os}
                        <IconLink iconUrl={os.iconUrl} label={os.label} href={os.href}/>
                    {/each}
                </div>
            </div>
            <div class="flex items-center">
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
    <div class="flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 space-y-5">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold">
            .projects
        </div>
        <div>
            Here are some projects I built or contributed.
        </div>
        <ProjectsDisplay/>
    </div>
    <div class="flex flex-col  font-bold text-2xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 bg-neutral-800 text-white space-y-5">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold">
            .info
        </div>
        <AboutMeDisplay/>
    </div>
    <div class="flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 space-y-5">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold">
            .links
        </div>
        <div>
            Here are some links of my friends or some websites I appreciate.
        </div>
        <FriendsDisplay/>
    </div>
</div>
