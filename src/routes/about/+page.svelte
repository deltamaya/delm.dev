<script lang="ts">
    import {fly} from "svelte/transition";
    import IconButton from "../../compoents/IconButton.svelte";
    import Icon from "@iconify/svelte";
    import type {Action} from "svelte/action";
    import InviewPopup from "../../compoents/InviewPopup.svelte";
    import WavingText from "../../compoents/WavingText.svelte";


    const {data} = $props()
    let card1InView = $state(false);
    let card2InView = $state(false);
    let card3InView = $state(false);
    let showIsInView = $state(false);
    let showArrow = $state(true);
    let lgbtSupportInView = $state(false);
    let chshInView = $state(false);
    let mayaInView = $state(false);
    let langInView = $state(false);
    let osInView = $state(false);
    let rbraceInView = $state(false);
    let frontendInView = $state(false);
    let politicValueInView = $state(false);
    let languageInView = $state(false);
    let todoInView = $state(false);

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.4],
    };
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
                    src="/avatar.jpg"
                    alt="avatar"
                    class="lg:w-48 md:w-32 w-24 rounded-full border-4 drop-shadow-2xl inline-block origin-center
                  shadow-2xl hover:scale-110 transition-transform duration-200 ease-in-out"
                    in:fly={{ y: -50, duration: 400 }}
            />
            <Icon icon="charm:cross" class="text-4xl mx-5"/>
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
            m-8 flex flex-col bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110 p-4"
            class:translate-y-0={card1InView}
            class:opacity-90={card1InView}
            class:translate-y-16={!card1InView}
            class:opacity-0={!card1InView}
            role="main"
            aria-label="Intro Card"
    >
        <h1 class="text-4xl font-bold">.intro</h1>
        <div class="font-bold items-center justify-center flex lg:text-3xl md:text-2xl text-xl text-gray-700">
            <WavingText text="Ciallo ～(∠・ω&lt; )⌒★!"/>
        </div>
        <div
                class="text-center text-gray-700 lg:text-2xl md:text-xl text-lg leading-relaxed"
        >
            <div
                    class="font-bold"
            >
                Hi there, I'm Maya☆!
            </div>
            <div>
                A&nbsp;<strong>Computer Science</strong>&nbsp;student originally from Shandong, China.
            </div>
            <div>
                I'm a&nbsp;<strong>STEM</strong>&nbsp;enthusiast with a love for all things "Nerdy"🤓,
                especially the digital multimedia world.
            </div>
            <div class="flex items-center justify-center flex-wrap">
                <div>My dream is to become a Full-Stack&nbsp;</div>
                <div
                        class="font-bold flex"
                >
                    <WavingText text="Magic Girl"/>
                </div>
                <div>
                    &nbsp;!
                </div>
            </div>
            <div>
                In my downtime, you'll probably find me watching animations.
            </div>
            <div>
                While I enjoy anime, I also have a soft spot for 🇺🇸 and
                🗾 animated series.
            </div>
            <a href="/exchange" class="hover:underline">
                <div class="text-indigo-500">
                    Feel like we'd vibe? Let's exchange <span
                        class="font-bold italic underline">Friend Links</span
                >! You're always welcome. 😊
                </div>
            </a>
        </div>
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
        <div class="w-full p-4 h-full flex flex-col">
            <h1 class="text-4xl font-bold">.skills</h1>
            <div
                    class="flex flex-col font-black text-gray-900 lg:text-2xl sm:text-sm font-jetbrains"
            >
                <div
                        class="font-bold text-gray-900 font-jetbrains flex flex-col"
                >
                    <InviewPopup
                            {observeme}
                            isDisplay={todoInView}
                            inviewCallback={() => (todoInView = true)}
                    >
                        <div
                                class="items-center flex flex-wrap text-gray-500 italic"
                        >
                            //&nbsp;<span class="text-orange-600"
                        >todo:&nbsp;</span
                        >make it cooler
                        </div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={chshInView}
                            inviewCallback={() => (chshInView = true)}
                    >
                        <div class="items-center flex flex-wrap">
                            <span class="text-red-500">sudo&nbsp;</span>
                            <span class="text-orange-500">chsh&nbsp;</span>
                            -s $(<span class="text-orange-500">which&nbsp;</span
                        >
                            <div class="flex">
                                {#each data.shells as item, index (index)}
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
                                        {#if index !== data.shells.length - 1}
                                            <span
                                                    class="mt-2 font-bold lg:text-4xl sm:text-sm"
                                            >,&nbsp;</span
                                            >
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                            )
                        </div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={mayaInView}
                            inviewCallback={() => (mayaInView = true)}
                    >
                        <div class="flex items-center">
                            <span class="text-red-500">const&nbsp;</span>maya =
                            &lbrace;
                        </div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={langInView}
                            inviewCallback={() => (langInView = true)}
                    >
                        <div
                                class:flex-col={mobileLayout}
                                class:items-baseline={mobileLayout}
                                class="flex items-center"
                        >
                            <div class="mr-1 ml-12">
                                lang: <span class="text-green-500">std</span
                            >::<span class="text-green-500">vector</span
                            >&lbrace;
                            </div>
                            <div class="flex justify-center flex-wrap">
                                {#each data.lang as item, index (index)}
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
                                        {#if index !== data.lang.length - 1}
                                            <span
                                                    class="font-bold lg:text-4xl md:text-md"
                                            >,&nbsp;</span
                                            >
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                            <div class="ml-1">&rbrace;,</div>
                        </div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={osInView}
                            inviewCallback={() => (osInView = true)}
                    >
                        <div
                                class:flex-col={mobileLayout}
                                class:items-baseline={mobileLayout}
                                class="flex font-bold text-gray-900 font-jetbrains items-center"
                        >
                            <div class="ml-12 mr-1">
                                os: [os <span class="text-red-500">for</span> os
                                <span class="text-red-500">in</span> [
                            </div>
                            <div class="flex">
                                {#each data.os as item, index (index)}
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
                                        {#if index !== data.os.length - 1}
                                            <span
                                                    class="mt-2 font-bold lg:text-4xl md:text-md"
                                            >,&nbsp;</span
                                            >
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                            <div class="ml-1">]],</div>
                        </div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={rbraceInView}
                            inviewCallback={() => (rbraceInView = true)}
                    >
                        <div>&rbrace;</div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={frontendInView}
                            inviewCallback={() => (frontendInView = true)}
                    >
                        <div
                                class:flex-col={mobileLayout}
                                class:items-baseline={mobileLayout}
                                class="flex font-bold text-gray-900 font-jetbrains items-center"
                        >
                            <div>maya.frontend</div>
                            <div>
                                .<span class="text-blue-500">setFav</span
                            >([]<span class="text-green-500">Tech</span
                            >&lbrace;
                            </div>
                            <div class="flex">
                                {#each data.frontend as item, index (index)}
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
                                        {#if index !== data.frontend.length - 1}
                                            <span
                                                    class="mt-2 font-bold lg:text-4xl md:text-md"
                                            >,&nbsp;</span
                                            >
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                            <div class="ml-1">&rbrace;)</div>
                        </div>
                    </InviewPopup>
                    <InviewPopup
                            {observeme}
                            isDisplay={languageInView}
                            inviewCallback={() => (languageInView = true)}
                    >
                        <div
                                class:flex-col={mobileLayout}
                                class:items-baseline={mobileLayout}
                                class="flex"
                        >
                            <span
                            >maya.<span class="text-blue-500">speak</span
                            >(</span
                            >
                            <span
                            ><span class="text-purple-500"
                            >O_EN_INTERMEDIATE</span
                            >
                                |
                                <span class="text-purple-500">O_ZH_NATIVE</span
                                ></span
                            >
                            <span>)</span>
                        </div>
                    </InviewPopup>
                    <div
                            use:observeme
                            oninview={() => {
                            showIsInView = true;
                        }}
                            class:translate-y-0={showIsInView}
                            class:opacity-100={showIsInView}
                            class:translate-y-16={!showIsInView}
                            class:opacity-0={!showIsInView}
                            class="transition duration-500 ease-in-out"
                    >
                        maya.<span
                            style="color: hsl({scrollPosition * 720}, 80%, 50%)"
                    >show()</span
                    >
                    </div>
                </div>
            </div>
        </div>
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
        <h1 class="text-4xl font-bold">.mindset</h1>

        <div class="h-full w-full p-4 flex flex-col">
            <div
                    class="justify-center items-center flex flex-col flex-grow space-y-5"
            >
                <div class="flex space-x-4 font-bold items-center">
                    <InviewPopup
                            {observeme}
                            isDisplay={lgbtSupportInView}
                            inviewCallback={() => (lgbtSupportInView = true)}
                    >
                        <div
                                class="flex space-x-4 justify-center items-center flex-wrap"
                        >
                            <p>I Support</p>
                            <img
                                    alt="pride flag"
                                    src="/pride_flag.png"
                                    class="h-12"
                            />
                            <p>!</p>
                        </div>
                    </InviewPopup>
                </div>
                <div class="flex space-x-4 font-bold items-center">
                    <InviewPopup
                            {observeme}
                            isDisplay={politicValueInView}
                            inviewCallback={() => (politicValueInView = true)}
                    >
                        <div
                                class="flex space-x-4 justify-center items-center flex-wrap"
                        >
                            <img
                                    alt="yellow flag"
                                    src="/yellow_flag.png"
                                    class="h-12"
                            />
                            <p>Libertarianism</p>
                        </div>
                    </InviewPopup>
                </div>
                <div class="flex space-x-4 font-bold items-center">
                    <InviewPopup
                            {observeme}
                            isDisplay={politicValueInView}
                            inviewCallback={() => (politicValueInView = true)}
                    >
                        <div
                                class="flex space-x-4 justify-center items-center flex-wrap"
                        >
                            <img
                                    alt="anarchism symbol"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Anarchy-symbol.svg/600px-Anarchy-symbol.svg.png"
                                    class="w-16"
                            />
                            <p>Anarchism</p>
                        </div>
                    </InviewPopup>
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
