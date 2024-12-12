<script>
    import {fly} from "svelte/transition";


    const {data} = $props()

    let curIndex = $state(0)
    let curProject = $derived(data.projects[curIndex])

    const imageWidth = 300;
    const imageGap = 50;
    const sep = imageWidth + 2 * imageGap;
    const hsep = sep / 2;

</script>

<style>
    .active {
        transform: scale(1.5);
    }
</style>

<div class="min-h-[calc(100vh-2.5rem)] flex flex-col justify-center items-center">
    <div class="w-full relative"
         in:fly|local={{ y: -100, duration: 400 }}>
        <div
                class="flex transform duration-500 ease-in-out"
                style="transform: translateX(calc(50% - {(curIndex * sep)+hsep}px));"
        >
            {#each data.projects as project,index (project.name)}
                <button onclick={()=>{curIndex=index}}
                        class="flex transition duration-500 ease-in-out w-[{imageWidth}px] mx-[{imageGap}px] flex-shrink-0 drop-shadow-2xl"
                >
                    <img src={curProject.bghref} alt=""
                         class="border-4 border-white rounded-2xl transition duration-500 ease-in-out"
                         class:active={curIndex===index}
                    />
                </button>
            {/each}
        </div>
    </div>


        <div class="z-10 flex flex-col justify-center items-center mt-12"
             in:fly={{ y: 100, duration: 400 }}>
            <div class="text-8xl font-bold">{curProject.name}</div>
            <div class="text-2xl text-gray-500">{curProject.desc}</div>
        </div>

</div>

{#each data.projects as project, index}
    <img
            src={project.bghref}
            alt="project background"
            class="
      pointer-events-none select-none blur-3xl opacity-20 z-0 fixed inset-0 w-full h-full object-cover
      transition-transform duration-500 ease-in-out"
            class:translate-x-full={index > curIndex}
            class:translate-x-0={index === curIndex}
            class:-translate-x-full={index < curIndex}
    />
{/each}