<script lang="ts">
    import { fly } from "svelte/transition";
    import IconButton from "../IconButton.svelte";
    const { data } = $props();

    let curIndex = $state(0);
    let curProject = $derived(data.projects[curIndex]);

    let imageWidth = $state(300);
    let imageGap = $state(50);
    let sep = $derived(imageWidth + 2 * imageGap);
    let hsep = $derived(sep / 2);

    let isDown = false;
    let prevX = 0;

    const largeWidth = 300;
    const largeGap = 50;
    const largeThreshold = 1024;

    const midWidth = 200;
    const midGap = 35;
    const midThreshold = 768;

    const smallWidth = 100;
    const smallGap = 20;

    function setPrevProject() {
        curIndex = Math.max(curIndex - 1, 0);
    }

    function setNextProject() {
        curIndex = Math.min(curIndex + 1, data.projects.length - 1);
    }


    function setImageSize() {
        if (window.innerWidth > largeThreshold) {
            imageWidth = largeWidth;
            imageGap = largeGap;
        } else if (window.innerWidth > midThreshold) {
            imageWidth = midWidth;
            imageGap = midGap;
        } else {
            imageWidth = smallWidth;
            imageGap = smallGap;
        }
    }

    function handleResize() {
        setImageSize();
    }

    function getDefaultBackground(name: string) {
        let ret = "";
        name.split(" ").forEach((s) => (ret += s.charAt(0)));
        return ret.toUpperCase();
    }

    $effect(() => {
        setImageSize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("wheel", handleWheel);

        window.addEventListener("touchstart", handleTouchDown);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("wheel", handleWheel);

            window.removeEventListener("touchstart", handleTouchDown);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    });

    function handleTouchMove(e: TouchEvent) {
        if (!isDown) return;
        if (e.touches[0].clientX > prevX + 50) {
            setPrevProject();
            isDown = false;
        }
        if (e.touches[0].clientX < prevX - 50) {
            setNextProject();
            isDown = false;
        }
    }

    function handleTouchDown(e: TouchEvent) {
        isDown = true;
        prevX = e.touches[0].clientX;
    }

    let accumulatedDeltaY = 0;
    const scrollThreshold = 100;

    function handleWheel(e: WheelEvent) {
        e.preventDefault();
        accumulatedDeltaY += e.deltaY;
        if (accumulatedDeltaY >= scrollThreshold) {
            setNextProject();
            accumulatedDeltaY = 0;
        } else if (accumulatedDeltaY <= -scrollThreshold) {
            setPrevProject();
            accumulatedDeltaY = 0;
        }
    }
    function randomFadeColor() {
        let colors = [
            "from-red-500 to-purple-700",
            "from-green-400 to-blue-700",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
</script>

<div
    class="min-h-[calc(100vh-2.5rem)] flex flex-col justify-center items-center -z-10"
>
    <div
        class="w-full flex transform duration-500 ease-in-out snap-x snap-proximity z-10"
        style="transform: translateX(calc(50% - {curIndex * sep + hsep}px));"
    >
        {#each data.projects as project, index (project.name)}
            <button
        in:fly|global={{ y: -100, duration: 400,delay:50*index }}

                onclick={() => {
                    curIndex = index;
                }}
                style="width: calc({imageWidth}px);margin-left: calc({imageGap}px);margin-right: calc({imageGap}px);"
                class="flex transition duration-500 ease-in-out flex-shrink-0 drop-shadow-2xl snap-center z-10"
            >
                {#if project.bghref !== ""}
                    <img
                        src={project.bghref}
                        alt="project background"
                        class="lg:border-4 border-2 border-white rounded-2xl transition duration-500 ease-in-out pointer-events-none select-none"
                        class:active={curIndex === index}
                    />
                {:else}
                    <div
                        class="
                    justify-center items-center lg:text-6xl md:text-4xl text-2xl text-white
                   bg-gradient-to-br {randomFadeColor()} font-bold flex w-full h-full lg:border-4 border-2 border-white rounded-2xl transition duration-500 ease-in-out pointer-events-none select-none"
                        class:active={curIndex === index}
                    >
                        {getDefaultBackground(project.name)}
                    </div>
                {/if}
            </button>
        {/each}
    </div>

    <div
        class="z-10 flex flex-col justify-center items-center m-12 text-center"
    >
        <div
            class="lg:text-6xl md:text-4xl text-3xl font-bold z-10"
            in:fly={{ y: 100, duration: 400, delay: 100 }}
        >
            {curProject.name}
        </div>
        <div
            class="lg:text-2xl md:text-xl text-lg text-gray-500 z-10"
            in:fly={{ y: 100, duration: 400, delay: 200 }}
        >
            {curProject.desc}
        </div>
        <a
            href={curProject.link}
            class="z-10 lg:text-2xl md:text-xl text-lg text-indigo-500 italic hover:underline"
            in:fly={{ y: 100, duration: 400, delay: 300 }}
        >
            Learn More
        </a>
    </div>
    <div class="flex justify-around w-full z-10">
        <IconButton
            callback={() => setPrevProject()}
            iconClass="mingcute:arrow-left-fill"
        />
        <IconButton
            callback={() => setNextProject()}
            iconClass="mingcute:arrow-right-fill"
        />
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

<style>
    .active {
        transform: scale(1.5);
    }
</style>
