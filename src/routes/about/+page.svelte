<script lang="ts">
    import { fly } from "svelte/transition";
    import Icon from "@iconify/svelte";
    import type { Action } from "svelte/action";
    import InviewPopup from "../InviewPopup.svelte";
    import IntroCard from "./IntroCard.svelte";
    import SkillCard from "./SkillCard.svelte";
    import MindsetCard from "./MindsetCard.svelte";

    let card1InView = $state(false);
    let card2InView = $state(false);
    let card3InView = $state(false);
    let showArrow = $state(true);


    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.4],
    };
    let data=$props()
    let observer: IntersectionObserver;
    let mobileLayout = $state(false);
    const mobileLayoutThreshold = 920;
    let scrollPosition = $state(0);
    $effect(() => {
        observer = new IntersectionObserver(handleObserve, options);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        mobileLayout = window.innerWidth <= mobileLayoutThreshold;
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    });

    const observeme: Action = (node) => {
        $effect(() => {
            observer.observe(node);
            return () => {
                observer.unobserve(node);
            };
        });
    };

    function handleObserve(entries: IntersectionObserverEntry[]) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.dispatchEvent(new CustomEvent("inview"));
            }
        });
    }

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        scrollPosition = scrollTop / scrollHeight;
    };
    const handleResize = () => {
        mobileLayout = window.innerWidth <= mobileLayoutThreshold;
    };
</script>

<div class="min-h-screen flex justify-center items-center -z-10">
    <div class="flex flex-col items-center z-10">
        <div class="flex justify-center items-center">
            <img
                src="https://gravatar.com/avatar/1a7b31cac6c2bbac137446c8a5da03a0?size=256"
                alt="avatar"
                class="lg:w-36 md:w-28 w-20 rounded-full lg:border-4 border-2 drop-shadow-2xl inline-block origin-center
                  shadow-2xl hover:scale-110 transition-transform duration-200 ease-in-out"
                in:fly={{ y: -50, duration: 400 }}
            />
            <Icon icon="charm:cross" class="text-4xl mx-5" />
            <img
                src="/logo.png"
                alt="avatar"
                class="lg:w-48 md:w-32 w-24 drop-shadow-2xl
                  transition-transform hover:scale-110 duration-200 ease-in-out"
                in:fly={{ y: -50, duration: 400 }}
            />
        </div>

        <div class="flex flex-col items-center">
            <p
                class="lg:text-8xl md:text-6xl text-4xl font-bold text-gray-800 mt-2"
                in:fly={{ y: -50, duration: 400, delay: 50 }}
            >
                delta<span class="text-red-500">maya</span>
            </p>
            <div
                class="lg:text-xl text-sm text-gray-500 font-bold mt-5"
                in:fly={{ y: -50, duration: 400, delay: 100 }}
            >
                Wuhan University of Technology
            </div>

            <div
                class="lg:text-2xl text-xl text-gray-800 font-bold justify-center items-center"
                in:fly={{ y: -50, duration: 400, delay: 100 }}
            >
                Student
            </div>
        </div>
        {#if showArrow}
            <div
                class="font-bold font-inter text-4xl fixed bottom-5"
                in:fly|global={{
                    y: 50,
                    duration: 400,
                    delay: 50,
                }}
                out:fly|local={{
                    y: 50,
                    duration: 400,
                    delay: 100,
                }}
            >
                &darr;
            </div>
        {/if}
    </div>
</div>
<div
    class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-red-500 to-purple-700"
>
    <div
        use:observeme
        oninview={() => {
            card1InView = true;
            showArrow = false;
        }}
        class="transition duration-500 ease-in-out
            m-8 flex flex-col bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110 p-4 w-3/4"
        class:translate-y-0={card1InView}
        class:opacity-90={card1InView}
        class:translate-y-16={!card1InView}
        class:opacity-0={!card1InView}
        role="main"
        aria-label="Intro Card"
    >
       <IntroCard/>
    </div>
</div>
<div
    class="min-h-screen w-full flex justify-center items-center bg-gradient-to-bl from-purple-700 to-red-500"
>
    <div
        use:observeme
        oninview={() => {
            card2InView = true;
        }}
        class="transition duration-500 ease-in-out
            m-8 flex justify-center items-center bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110"
        class:translate-y-0={card2InView}
        class:opacity-90={card2InView}
        class:translate-y-16={!card2InView}
        class:opacity-0={!card2InView}
        role="main"
        aria-label="Intro Card"
    >
       <SkillCard {observeme} {mobileLayout} skills={data} {scrollPosition}/>
    </div>
</div>
<div
    class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-red-500 to-purple-700 lg:text-4xl md:text-2xl p-4"
>
    <div
        use:observeme
        oninview={() => {
            card3InView = true;
        }}
        class="transition duration-500 ease-in-out flex flex-col
            w-3/4 h-3/4 bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110 p-4"
        class:translate-y-0={card3InView}
        class:opacity-90={card3InView}
        class:translate-y-16={!card3InView}
        class:opacity-0={!card3InView}
        role="main"
        aria-label="Intro Card"
    >
        <MindsetCard {observeme}/>
    </div>
</div>

<img
    src="/rust-1-512.png"
    alt="logo"
    class="blurred_background"
    in:fly={{ y: 50, duration: 400 }}
/>
