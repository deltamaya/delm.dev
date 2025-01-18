<script lang="ts">
    import { fly } from "svelte/transition";
    import IconLink from "./IconLink.svelte";
    import MenuItem from "./MenuItem.svelte";

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

<div>
    <div class="w-full h-7 bg-red-600"></div>
    <div class="my-5 mx-32 w-full flex">
        <div class="flex justify-between">
                    <div class="flex font-bold text-3xl gap-10">
            <img src="logo.png" class="w-[70px] h-[40px]" alt="logo"/>
                    <div>
                        Projects
                    </div>
                    <div>
                        Friends
                    </div>
                    <div>
                        About
                    </div>
                </div>
            <div>
                 Blogs
            </div>
        </div>

    </div>
</div>
