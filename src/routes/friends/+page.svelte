<script lang="ts">
    import {fly} from "svelte/transition";

    let {data} = $props();
    let curIndex = $state(0);
    let imageHeight = $state(200);
    let imageGap = $state(50);
    let sep = $derived(imageHeight + 2 * imageGap);
    let hsep = $derived(sep / 2);
    let isDown = false;
    let prevY = 0;

    const largeHeight = 250;
    const largeGap = 50;
    const largeThreshold = 1024;

    const midHeight = 200;
    const midGap = 35;
    const midThreshold = 768;

    const smallHeight = 150;
    const smallGap = 25;

    function handleResize() {
        setImageSize();
    }

    function setImageSize() {
        if (window.innerWidth > largeThreshold) {
            imageHeight = largeHeight;
            imageGap = largeGap;
        } else if (window.innerWidth > midThreshold) {
            imageHeight = midHeight;
            imageGap = midGap;
        } else {
            imageHeight = smallHeight;
            imageGap = smallGap;
        }
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
        if (e.touches[0].clientY > prevY + 50) {
            setPrevFriend();
            isDown = false;
        }
        if (e.touches[0].clientY < prevY - 50) {
            setNextFriend();
            isDown = false;
        }
    }

    function handleTouchDown(e: TouchEvent) {
        isDown = true;
        prevY = e.touches[0].clientY;
    }

    function handleWheel(e: WheelEvent) {
        e.preventDefault();
        if (e.deltaY < 0) {
            setPrevFriend();
        }
        if (e.deltaY > 0) {
            setNextFriend();
        }
    }

    function setPrevFriend() {
        curIndex = Math.max(curIndex - 1, 0);
    }

    function setNextFriend() {
        curIndex = Math.min(curIndex + 1, data.friends.length - 1);
    }
</script>

<div
        class="h-[calc(100vh-2.5rem)] flex justify-center items-center -z-10 overflow-hidden"
>
    <div
            class="flex flex-col transform duration-500 ease-in-out w-full justify-center items-center z-10"
            style="transform: translateY(calc(50% - {curIndex * sep + hsep}px));"
    >
        {#each data.friends as friend, index (index)}
            <div
                    class="rounded-2xl flex drop-shadow-2xl
        transition duration-300 ease-in-out bg-gray-100 p-4"
                    in:fly|global={{ x: 100, duration: 400, delay: index * 100 }}
                    style="width: calc({imageHeight /
                    0.6}px);height: calc({imageHeight}px);margin-top: calc({imageGap}px);margin-bottom: calc({imageGap}px);"
                    class:scale-150={curIndex === index}
            >
                <div class="h-full w-full flex flex-col">
                    <img
                            src={friend.avatar}
                            alt="avatar"
                            class="lg:w-24 md:w-20 w-14 rounded-full lg:border-4 border-2 border-white"
                    />

                    <div class="flex flex-col flex-grow justify-between lg:mt-4 md:mt-2 mt-0">
                                            <div
                            class="text-gray-800 font-bold lg:text-2xl md:text-xl text-lg"
                    >
                        {friend.name}
                    </div>
                        <div class="flex justify-between">
                            <div
                                    class="text-gray-400 lg:text-lg text-xs flex-shrink"
                            >
                                {friend.desc}
                            </div>
                            <a
                                    class="font-bold lg:text-lg text-xs text-indigo-500 italic hover:underline"
                                    href={friend.link}
                            >
                                {friend.site || 'visit site'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
<div
        class="text-9xl pointer-events-none select-none z-0 fixed object-cover font-bold text-gray-300 top-0 left-0"
>
    TOGETHER
</div>
<div
        class="text-9xl pointer-events-none select-none z-0 fixed object-cover font-bold text-gray-300 bottom-10 right-0"
>
    WE ADVANCE
</div>
