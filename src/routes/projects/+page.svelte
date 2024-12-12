<script lang="ts">
    import {fly} from "svelte/transition";


    const {data} = $props()

    let curIndex = $state(0)
    let curProject = $derived(data.projects[curIndex])

    const imageWidth = 300;
    const imageGap = 50;
    const sep = imageWidth + 2 * imageGap;
    const hsep = sep / 2;

    let isDown = false;
    let prevX = 0;
    $effect(
        () => {
            window.addEventListener('wheel', handleWheel)
            window.addEventListener('mousedown', handleDown)
            window.addEventListener('mousemove', handleMove)
            window.addEventListener('mouseup', handleUp)
            window.addEventListener('touchstart', handleTouchDown)
            window.addEventListener('touchmove', handleTouchMove)
            return () => {
                window.removeEventListener('wheel', handleWheel)
                window.removeEventListener('mousedown', handleDown)
                window.removeEventListener('mousemove', handleMove)
                window.removeEventListener('mouseup', handleUp)
                window.removeEventListener('touchstart', handleTouchDown)
                window.removeEventListener('touchmove', handleTouchMove)
            }
        }
    )

    function handleTouchMove(e: TouchEvent) {
        if (!isDown) return
        if (e.touches[0].clientX > prevX + 100) {
            curIndex = Math.max(curIndex - 1, 0);
            isDown = false
        }
        if (e.touches[0].clientX < prevX - 100) {
            curIndex = Math.min(curIndex + 1, data.projects.length - 1);
            isDown = false
        }
    }

    function handleTouchDown(e: TouchEvent) {
        isDown = true
        prevX = e.touches[0].clientX
    }

    function handleWheel(e: WheelEvent) {
        e.preventDefault();
        if (e.deltaY < 0) {
            curIndex = Math.max(curIndex - 1, 0);
        }
        if (e.deltaY > 0) {
            curIndex = Math.min(curIndex + 1, data.projects.length - 1);
        }
    }

    function handleDown(e: MouseEvent) {
        isDown = true
        prevX = e.clientX
    }

    function handleUp(e: MouseEvent) {
        isDown = false
    }

    function handleMove(e: MouseEvent) {
        if (!isDown) return
        if (e.clientX > prevX + 100) {
            curIndex = Math.max(curIndex - 1, 0);
            isDown = false
        }
        if (e.clientX < prevX - 100) {
            curIndex = Math.min(curIndex + 1, data.projects.length - 1);
            isDown = false
        }
    }

</script>

<style>
    .active {
        transform: scale(1.5);
    }
</style>

<div class="min-h-[calc(100vh-2.5rem)] flex flex-col justify-center items-center">


    <div
            in:fly|local={{ y: -100, duration: 400 }}
            class="w-full flex transform duration-500 ease-in-out snap-x snap-proximity"
            style="transform: translateX(calc(50% - {(curIndex * sep)+hsep}px));"
    >
        {#each data.projects as project,index (project.name)}
            <button onclick={()=>{curIndex=index}}
                    style="width: calc({imageWidth}px);margin-left: calc({imageGap}px);margin-right: calc({imageGap}px);"
                    class="flex transition duration-500 ease-in-out flex-shrink-0 drop-shadow-2xl snap-center"
            >
                <img src={curProject.bghref} alt=""
                     class="border-4 border-white rounded-2xl transition duration-500 ease-in-out"
                     class:active={curIndex===index}
                />
            </button>
        {/each}
    </div>


    <div class="z-10 flex flex-col justify-center items-center mt-12"
         in:fly={{ y: 100, duration: 400 }}>
        <div class="lg:text-8xl md:text-6xl text-4xl font-bold">{curProject.name}</div>
        <div class="lg:text-2xl md:text-xl text-lg text-gray-500">{curProject.desc}</div>
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