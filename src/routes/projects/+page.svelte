<script lang="ts">
    import { fly } from "svelte/transition";
    import Icon from "@iconify/svelte";
    import IconButton from "../../compoents/IconButton.svelte";
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
    const largeThreshold = 1000;

    const midWidth = 200;
    const midGap = 35;
    const midThreshold = 700;

    const smallWidth = 150;
    const smallGap = 25;

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

    $effect(() => {
        setImageSize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("touchstart", handleTouchDown);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("touchstart", handleTouchDown);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    });

    function handleTouchMove(e: TouchEvent) {
        if (!isDown) return;
        if (e.touches[0].clientX > prevX + 100) {
            setPrevProject();
            isDown = false;
        }
        if (e.touches[0].clientX < prevX - 100) {
            setNextProject();
            isDown = false;
        }
    }

    function handleTouchDown(e: TouchEvent) {
        isDown = true;
        prevX = e.touches[0].clientX;
    }

    function handleWheel(e: WheelEvent) {
        e.preventDefault();
        if (e.deltaY < 0) {
            setPrevProject();
        }
        if (e.deltaY > 0) {
            setNextProject();
        }
    }

    function handleDown(e: MouseEvent) {
        isDown = true;
        prevX = e.clientX;
    }

    function handleUp() {
        isDown = false;
    }

    function handleMove(e: MouseEvent) {
        if (!isDown) return;
        if (e.clientX > prevX + 100) {
            setPrevProject();
            isDown = false;
        }
        if (e.clientX < prevX - 100) {
            setNextProject();
            isDown = false;
        }
    }
</script>

<div
    class="min-h-[calc(100vh-2.5rem)] flex flex-col justify-center items-center z-10"
>
    <div
        in:fly|local={{ y: -100, duration: 400 }}
        class="w-full flex transform duration-500 ease-in-out snap-x snap-proximity"
        style="transform: translateX(calc(50% - {curIndex * sep + hsep}px));"
    >
        {#each data.projects as project, index (project.name)}
            <button
                onclick={() => {
                    curIndex = index;
                }}
                style="width: calc({imageWidth}px);margin-left: calc({imageGap}px);margin-right: calc({imageGap}px);"
                class="flex transition duration-500 ease-in-out flex-shrink-0 drop-shadow-2xl snap-center"
            >
                <img
                    src={curProject.bghref}
                    alt=""
                    class="border-4 border-white rounded-2xl transition duration-500 ease-in-out"
                    class:active={curIndex === index}
                />
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
    <div class="flex justify-around w-full">
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
