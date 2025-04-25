<script lang="ts">
    import ProjectsDisplay from "./ProjectsDisplay.svelte";
    import FriendsDisplay from "./FriendsDisplay.svelte";
    import AboutMeDisplay from "./AboutMeDisplay.svelte";
    import {frontendFrameworks, languages, miscs, operatingSystems, socialLinks} from "$lib/data";
    import IconLink from "./IconLink.svelte";
    import SocialLink from "./SocialLink.svelte";
    import Header from "./Header.svelte";
    import ProfileCommandRunner from "./ProfileCommandRunner.svelte";
</script>

<div class=" flex flex-col w-full scroll-smooth text-neutral-100">
    <Header/>
    <div class="flex flex-col justify-center items-center">
        <img src="https://img.delm.dev/avatar.webp" alt="avatar"
             class="my-5 lg:h-72 md:h-64 sm:h-56 h-48 rounded-full lg:border-8 md:border-6 border-4 hover:border-red-600 border-neutral-900 transition-colors duration-500"/>
        <div class="lg:text-3xl md:text-2xl text-xl font-bold justify-center items-center flex flex-col">
            <div>
                <span class="text-red-600">del</span>ta<span class="text-red-600">m</span>aya
            </div>
            <div>
                <span class="text-red-600">S</span>tudent / <span class="text-red-600">D</span>eveloper
            </div>
            <div class="my-16">
                "夢はいつでも膨らむばかりで"
            </div>
        </div>
    </div>

    <div class="h-[1px] bg-neutral-600 w-4/5 self-center"></div>
    <div class="flex flex-col  font-bold text-2xl lg:py-16 md:py-8 py-4 px-5 bg-neutral-900 space-y-5 justify-center items-center"
         id="info">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold w-full max-w-[1440px]">
            .info
        </div>

        <AboutMeDisplay/>
        <ProfileCommandRunner/>
    </div>


<!--    <div class="h-[1px] bg-neutral-600 w-4/5 self-center"></div>-->
<!--    <div class="bg-neutral-900 w-full flex flex-col font-bold text-4xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 space-y-5 items-center">-->
<!--        <div class="px-5 w-full max-w-[1440px] lg:text-6xl md:text-4xl text-3xl font-extrabold">-->
<!--            .tech-->
<!--        </div>-->
<!--        <div class="font-normal text-xl">-->
<!--            Favorite / supported technology-->
<!--        </div>-->
<!--        <div class="flex flex-col space-y-5 mt-5 lg:text-4xl md:text-3xl text-2xl p-5">-->
<!--            <div class="flex items-center">-->
<!--                languages:-->
<!--                <div class="ml-3 flex space-x-3 justify-center items-center">-->
<!--                    {#each languages as lang}-->
<!--                        <IconLink iconUrl={lang.iconUrl} label={lang.label} href={lang.href}/>-->
<!--                    {/each}-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex items-center">-->
<!--                OS:-->
<!--                <div class="ml-3 flex space-x-3 justify-center items-center">-->
<!--                    {#each operatingSystems as os}-->
<!--                        <IconLink iconUrl={os.iconUrl} label={os.label} href={os.href}/>-->
<!--                    {/each}-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex items-center">-->
<!--                frontend:-->
<!--                <div class="ml-3 flex space-x-3 justify-center items-center">-->
<!--                    {#each frontendFrameworks as framework}-->
<!--                        <IconLink iconUrl={framework.iconUrl} label={framework.label} href={framework.href}/>-->
<!--                    {/each}-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex items-center">-->
<!--                misc:-->
<!--                <div class="ml-3 flex space-x-3 justify-center items-center">-->
<!--                    {#each miscs as item}-->
<!--                        <IconLink iconUrl={item.iconUrl} label={item.label} href={item.href}/>-->
<!--                    {/each}-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->
    <div class="h-[1px] bg-neutral-600 w-4/5 self-center"></div>
    <div class="flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 space-y-5 items-center"
         id="projects">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold px-5 w-full max-w-[1440px]">
            .projects
        </div>
        <div class="font-normal text-xl">
            Built / contributed projects
        </div>
        <div class="flex justify-center items-center w-full max-w-[1440px]">
            <ProjectsDisplay/>
        </div>
    </div>
    <div class="h-[1px] bg-neutral-600 w-4/5 self-center"></div>
    <div class="flex flex-col  font-bold lg:text-4xl md:text-3xl text-2xl lg:py-16 md:py-8 py-4 lg:px-48 md:px-32 px-8 space-y-5 items-center"
         id="links">
        <div class="lg:text-6xl md:text-4xl text-3xl font-extrabold px-5 w-full max-w-[1440px]" >
            .links
        </div>
        <div class="font-normal text-xl">
            External links
        </div>
        <FriendsDisplay/>
    </div>

</div>
