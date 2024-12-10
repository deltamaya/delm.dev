<script lang="ts">
    import {fly} from "svelte/transition";
    import IconButton from "../IconButton.svelte";
    import Icon from "@iconify/svelte";
    import {frontendFrameworks, languages, operatingSystems, shells} from "$lib/data";
    import {inview} from 'svelte-inview';
    import {marked} from "marked";
    import type {ObserverEventDetails, Options} from 'svelte-inview';

    let card1InView = $state(false);
    let card2InView = $state(false);
    let card3InView = $state(false);
    let showIsInView = $state(false);
    let showArrow = $state(true);
    const options: Options = {
        rootMargin: '-300px',
        unobserveOnEnter: true,
    };
    const handleShowObserve = ({detail}: CustomEvent<ObserverEventDetails>) => {
        showIsInView = detail.inView;
    };
    const handleCard1Observe = ({detail}: CustomEvent<ObserverEventDetails>) => {
        card1InView = detail.inView;
        if (card1InView) {
            showArrow = false;
        }
    };
        const handleCard2Observe = ({detail}: CustomEvent<ObserverEventDetails>) => {
        card2InView = detail.inView;
        if (card2InView) {
            showArrow = false;
        }
    };
            const handleCard3Observe = ({detail}: CustomEvent<ObserverEventDetails>) => {
        card3InView = detail.inView;
        if (card3InView) {
            showArrow = false;
        }
    };

    let scrollPosition = $state(0)
    $effect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollPosition = scrollTop / scrollHeight;
    };

    let {data} = $props()
</script>

<div class="min-h-screen flex justify-center items-center -z-10">
    <div class="flex flex-col items-center z-10">
        <div class='flex justify-center items-center'>
            <img
                    src="/avatar.jpg"
                    alt="avatar"
                    class="w-48 rounded-full border-4 drop-shadow-2xl inline-block origin-center
                  shadow-2xl hover:scale-110 transition duration-200 ease-in-out"
                    in:fly={{ y: -50, duration: 400 }}
            />
            <Icon icon="charm:cross" class="text-4xl mx-5"/>
            <img
                    src="/logo.png"
                    alt="avatar"
                    class="w-48 drop-shadow-2xl
                  transition hover:scale-110 duration-200 ease-in-out"
                    in:fly={{ y: -50, duration: 400 }}
            />
        </div>

        <div class="flex flex-col ml-5 items-center">
            <p
                    class="text-8xl font-bold text-gray-800 mt-2"
                    in:fly={{ y: -50, duration: 400, delay: 50 }}
            >
                delta<span class="text-red-500">maya</span>
            </p>
            <div class="text-gray-500 text-xl font-bold mt-5"
                 in:fly={{ y: -50, duration: 400 ,delay:100}}>
                Wuhan University of Technology
            </div>

            <div
                    class="text-gray-800 text-xl font-bold justify-center items-center"
                    in:fly={{ y: -50, duration: 400 ,delay:100}}
            >
                Student
            </div>
        </div>
        <div class="flex flex-col font-bold text-gray-900 text-4xl font-jetbrains border-8 p-4 rounded-2xl
        border-gray-900 mt-24">
            <div class="font-bold text-gray-900 font-jetbrains flex flex-col">
                <div class="items-center flex"
                     in:fly={{ y: 50, duration: 400 }}>
                    <span class="text-red-500 mr-5">sudo</span>
                    chsh -s $(which
                    <div class="flex">
                        {#each shells as item, index (index)}
                            <div
                                    class="flex"
                                    in:fly|global={{
                                y: 50,
                                duration: 400,
                                delay: 100 + 50 * index,
                            }}
                            >
                                <IconButton
                                        href={item.href}
                                        label={item.label}
                                        iconClass={item.iconClass}
                                />
                                {#if index !== shells.length - 1}
                                    <span class="mt-2 font-bold text-4xl mr-3">,</span>
                                {/if}
                            </div>
                        {/each}
                    </div>
                    )
                </div>
                <div class="flex items-center " in:fly={{ y: 50, duration: 400 ,delay:50}}>
                    const maya = &lbrace;
                </div>
                <div class="flex mt-4 items-center" in:fly={{ y: 50, duration: 400 ,delay:100}}>
                    <div class="mr-1 ml-12">
                        lang: std::vector&lbrace;
                    </div>
                    <div class="flex justify-center">
                        {#each languages as item, index (index)}
                            <div
                                    class="flex"
                                    in:fly|global={{
                                y: 50,
                                duration: 400,
                                delay: 100 + 50 * index,
                            }}
                            >
                                <IconButton
                                        href={item.href}
                                        label={item.label}
                                        iconClass={item.iconClass}
                                />
                                {#if index !== languages.length - 1}
                                    <span class="font-bold text-4xl mr-3">,</span>
                                {/if}
                            </div>

                        {/each}
                    </div>
                    <div class="ml-1">&rbrace;,</div>
                </div>


                <div class="flex font-bold text-gray-900 font-jetbrains items-center mt-4"
                     in:fly={{ y: 50, duration: 400 ,delay:150}}>
                    <div class="ml-12 mr-1">
                        os: [os for os in [
                    </div>
                    <div class="flex">
                        {#each operatingSystems as item, index (index)}
                            <div
                                    class="flex"
                                    in:fly|global={{
                                y: 50,
                                duration: 400,
                                delay: 150 + 50 * index,
                            }}
                            >
                                <IconButton
                                        href={item.href}
                                        label={item.label}
                                        iconClass={item.iconClass}
                                />
                                {#if index !== operatingSystems.length - 1}
                                    <span class="mt-2 font-bold text-4xl mr-3">,</span>
                                {/if}
                            </div>
                        {/each}
                    </div>
                    <div class="ml-1">]],</div>

                </div>
                <div in:fly={{ y: 50, duration: 400 ,delay:100}}>&rbrace;</div>
            </div>
            <div class="flex font-bold text-gray-900 text-4xl font-jetbrains items-center mt-4"
                 in:fly={{ y: 50, duration: 400 ,delay:200}}>
                <div>
                    maya.frontend.setFav([]Tech&lbrace;
                </div>
                <div class="flex">
                    {#each frontendFrameworks as item, index (index)}
                        <div
                                class="flex"
                                in:fly|global={{
                                y: 50,
                                duration: 400,
                                delay: 200 + 50 * index,
                            }}
                        >
                            <IconButton
                                    href={item.href}
                                    label={item.label}
                                    iconClass={item.iconClass}
                            />
                            {#if index !== frontendFrameworks.length - 1}
                                <span class="mt-2 font-bold text-4xl mr-3">,</span>
                            {/if}
                        </div>
                    {/each}
                </div>
                <div class="ml-1">&rbrace;)</div>
            </div>

            <div
                    use:inview={options}
                    oninview_change={handleShowObserve}
                    class:translate-y-0={showIsInView}
                    class:opacity-100={showIsInView}
                    class:translate-y-16={!showIsInView}
                    class:opacity-0={!showIsInView}
                    class="transition duration-500 ease-in-out"
            >
                <span style="color: hsl({scrollPosition*720}, 80%, 50%)">maya.show()</span>
            </div>
        </div>
        {#if showArrow}
            <div class="font-bold font-inter text-4xl fixed bottom-5"
                 in:fly|global={{
                                y: 50,
                                duration: 400,
                                delay: 50,
                            }}
                 out:fly|local={{
                                y: 50,
                                duration: 400,
                                delay: 100,
                            }}>
                &darr;
            </div>
        {/if}
    </div>
</div>
<div class="h-screen w-full flex justify-center items-center bg-gradient-to-br from-red-500 to-purple-700">
    <div
            use:inview={options}
            oninview_change={handleCard1Observe}
            class="transition duration-500 ease-in-out
            h-3/4 w-3/4 flex justify-center items-center bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110"
            class:translate-y-0={card1InView}
            class:opacity-90={card1InView}
            class:translate-y-16={!card1InView}
            class:opacity-0={!card1InView}
            role="main"
            aria-label='Intro Card'>

        <div class="w-full p-4 h-full flex flex-col">
            <h1 class="text-4xl font-bold h-2">
                .intro
            </h1>
            <div class="justify-center items-center flex flex-col flex-grow">

            </div>

        </div>
    </div>
</div>
<div class="h-screen w-full flex justify-center items-center bg-gradient-to-bl from-purple-700 to-red-500">
    <div
            use:inview={options}
            oninview_change={handleCard2Observe}
            class="transition duration-500 ease-in-out
            h-3/4 w-3/4 flex justify-center items-center bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110"
            class:translate-y-0={card2InView}
            class:opacity-90={card2InView}
            class:translate-y-16={!card2InView}
            class:opacity-0={!card2InView}
            role="main"
            aria-label='Intro Card'>
       <div class="w-full p-4 h-full flex flex-col">
            <h1 class="text-4xl font-bold h-2">
                .skills
            </h1>
            <div class="justify-center items-center flex flex-col flex-grow">

            </div>

        </div>
    </div>
</div>
<div class="h-[calc(100vh-2.5rem)] w-full flex justify-center items-center bg-gradient-to-br from-red-500 to-purple-700">
    <div
            use:inview={options}
            oninview_change={handleCard3Observe}
            class="transition duration-500 ease-in-out
            h-3/4 w-3/4 flex justify-center items-center bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110"
            class:translate-y-0={card3InView}
            class:opacity-90={card3InView}
            class:translate-y-16={!card3InView}
            class:opacity-0={!card3InView}
            role="main"
            aria-label='Intro Card'>
        <div class="w-full p-4 h-full flex flex-col">
            <h1 class="text-4xl font-bold h-2">
                .mindset
            </h1>
            <div class="justify-center items-center flex flex-col flex-grow">
                <div class="flex space-x-4 text-3xl font-bold items-center">
                    <p>I Support</p>
                    <img alt="pride flag" src="/pride_flag.png" class="h-12"/>
                    <p>!</p>
                </div>
                <div class="flex space-x-4 text-3xl font-bold items-center">
                    <img alt="yellow flag" src="/yellow_flag.png" class="h-12"/>
                    <p>自由意志</p>
                </div>
            </div>

        </div>

    </div>
</div>

<img
        src="/rust-1-512.png"
        alt="logo"
        class="blurred_background"
        in:fly={{ y: 50, duration: 400 }}
/>
