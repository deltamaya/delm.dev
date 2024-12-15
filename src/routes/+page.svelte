<script lang="ts">
    import { fly } from "svelte/transition";
    import IconLink from "../compoents/IconLink.svelte";
    import MenuItem from "../compoents/MenuItem.svelte";

    const { data } = $props();
    let mobileLayout = $state(false);

    let bioIndex = $state(0);
    let bioSentence = $derived(data.bios[bioIndex]);
    let typing = $state(false);

    const mobileLayoutThreshold = 900;

    $effect(() => {
        mobileLayout = window.innerWidth <= mobileLayoutThreshold;

        const id = setInterval(() => {
            if (bioIndex === data.bios.length - 1) {
                bioIndex = 0;
            } else {
                bioIndex++;
            }
        }, 5000);
        window.addEventListener("resize", handleResize);
        return () => {
            clearInterval(id);
            window.removeEventListener("resize", handleResize);
        };
    });
    // $inspect(bioIndex)

    const handleResize = () => {
        mobileLayout = window.innerWidth <= mobileLayoutThreshold;
    };

    function typewriter(node, { speed = 1 }) {
        const valid =
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            throw new Error(
                `This transition only works on elements with a single text node child`,
            );
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: (t: number) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            },
        };
    }
</script>

<div
    class:flex-col={mobileLayout}
    class="min-h-[calc(100vh-2.5rem)] flex justify-evenly items-center self-center text-center gap-10
    -z-10
"
>
    <div
        class="flex flex-col justify-between items-center z-10
    "
    >
        <div class="flex items-baseline title-float">
            <img
                src="/logo.png"
                alt="logo"
                class="w-16 md:w-28 lg:w-32 drop-shadow-2xl"
                in:fly={{ y: -50, duration: 400 }}
            />
            <div class="flex flex-col ml-5">
                <p
                    class="lg:text-8xl md:text-6xl text-4xl font-bold text-gray-800 mt-2"
                    in:fly={{ y: -50, duration: 400, delay: 50 }}
                >
                    delm.<span class="text-red-500">dev</span>
                </p>
                <div
                    class="flex justify-center space-x-4 mt-1 items-center"
                ></div>
            </div>
        </div>
        <div
            class="flex flex-col items-center mt-16"
            in:fly={{ y: -50, duration: 400, delay: 100 }}
        >
            <h1
                class="lg:text-6xl md:text-4l text-2xl font-bold text-gray-800 mb-4"
                in:fly={{ y: 50, duration: 400, delay: 50 }}
            >
                Hi, I'm <span class="text-red-500">Maya☆</span>.
            </h1>
            <div
                class="flex lg:text-xl text-sm text-gray-500 max-w-2xl mb-8 font-bold"
            >
                {#key bioIndex}
                    <p
                        in:typewriter={{ speed: 2 }}
                        onintrostart={() => {
                            typing = true;
                        }}
                        onintroend={() => {
                            typing = false;
                        }}
                    >
                        {bioSentence}
                    </p>
                    <p class:animate-blink={!typing}>_</p>
                {/key}
            </div>
        </div>

        <div class="flex space-x-4 justify-center text-gray-900">
            {#each data.socials as item, index (index)}
                <div
                    in:fly|global={!mobileLayout
                        ? {
                              y: 50,
                              duration: 400,
                              delay: 150 + 25 * index,
                          }
                        : {
                              y: -50,
                              duration: 400,
                              delay: 150 + 25 * index,
                          }}
                >
                    <IconLink
                        href={item.href}
                        label={item.label}
                        iconClass={item.iconClass}
                    />
                </div>
            {/each}
        </div>
    </div>
    {#key mobileLayout}
        <div class="items-center flex flex-col z-10 space-y-5 justify-center">
            {#each data.menu as item, index (index)}
                <div
                    class="w-full"
                    in:fly|global={!mobileLayout
                        ? { x: 100, duration: 400, delay: 50 * index }
                        : { y: 100, duration: 400, delay: 50 * index }}
                >
                    <MenuItem
                        href={item.href}
                        label={item.label}
                        title={item.title}
                        iconClass={item.iconClass}
                    />
                </div>
            {/each}
        </div>
    {/key}
    <img
        src="/logo.png"
        alt="logo"
        class="blurred_background"
        in:fly={{ y: 100, duration: 400 }}
    />
</div>
