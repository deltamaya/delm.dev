<script lang="ts">

    import ProjectsDisplay from "./ProjectsDisplay.svelte";
    import FriendsDisplay from "./FriendsDisplay.svelte";
    import AboutMeDisplay from "./AboutMeDisplay.svelte";

</script>
<div class="flex flex-col w-full">
    <div class="w-full h-7 bg-red-600"></div>
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
    <div class="px-48 flex justify-center items-center flex-col my-32">
        <div class="h-96 w-96 border-8 hover:border-red-600 border-neutral-900 transition-colors duration-300 rounded-full">
            <img src="avatar.jpg" alt="avatar" class="rounded-full"/>
        </div>
        <div class="font-extrabold text-4xl px-48 pt-32">
            Hey, I'm <span class="text-red-600">deltamaya</span>.
            A Computer Science student originally
            from Shandong, China. I hope this page could help you understand me better.
        </div>
    </div>
    <div class="bg-neutral-800 w-full flex flex-col font-bold text-4xl py-16 px-48 text-white">
        <div class="text-6xl font-extrabold">
            .skillset
        </div>
        <div class="flex flex-col space-y-5 mt-5">
            <div class="flex items-center">
                shell:
                <img src="ohmyzsh-logo-ansi.png" alt="zsh" class="w-20 h-13"/>
            </div>
            <div class="flex space-x-3 items-center">
                languages:
                <img src="python.svg" alt="python"
                     class="w-16 h-16 hover:-translate-y-2 transition-transform duration-300"/>
                <img src="cpp.svg" alt="c plus plus"
                     class="w-16 h-16 hover:-translate-y-2 transition-transform duration-300"/>
                <img src="go.svg" alt="golang"
                     class="w-20 h-20 hover:-translate-y-2 transition-transform duration-300"/>
                <img src="ts.svg" alt="typescript"
                     class="w-16 h-16 hover:-translate-y-2 transition-transform duration-300"/>
            </div>
            <div class="flex items-center space-x-3">
                OS:
                <img src="apple.svg" alt="macOS" class="w-14 h-14"/>
                <img src="archlinux.svg" alt="archlinux" class="w-14 h-14"/>
                <img src="microsoft.svg" alt="windows" class="w-12 h-12"/>
            </div>
            <div class="flex items-center space-x-3">
                technology:
                <img src="svelte.svg" alt="svelte" class="w-16 h-16"/>
                <img src="tailwind.svg" alt="tailwind" class="w-16 h-16"/>
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
