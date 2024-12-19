<script>
import {frontendFrameworks, languages, operatingSystems, shells} from "$lib/data";
    
    import IconLink from "../IconLink.svelte";
        import InviewPopup from "../InviewPopup.svelte";
            import { fly } from "svelte/transition";
        let showIsInView = $state(false);
    let chshInView = $state(false);
    let mayaInView = $state(false);
    let langInView = $state(false);
    let osInView = $state(false);
    let rbraceInView = $state(false);
    let frontendInView = $state(false);
    let languageInView = $state(false);
    let todoInView = $state(false);
    let {observeme,mobileLayout,scrollPosition}=$props()
</script>
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
                                {#each shells as item, index (index)}
                                    <div
                                        class="flex"
                                        in:fly|global={{
                                            y: 50,
                                            duration: 400,
                                            delay: 100 + 50 * index,
                                        }}
                                    >
                                        <IconLink
                                            href={item.href}
                                            label={item.label}
                                            iconClass={item.iconClass}
                                        />
                                        {#if index !== shells.length - 1}
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
                                {#each languages as item, index (index)}
                                    <div
                                        class="flex"
                                        in:fly|global={{
                                            y: 50,
                                            duration: 400,
                                            delay: 100 + 50 * index,
                                        }}
                                    >
                                        <IconLink
                                            href={item.href}
                                            label={item.label}
                                            iconClass={item.iconClass}
                                        />
                                        {#if index !== languages.length - 1}
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
                                {#each operatingSystems as item, index (index)}
                                    <div
                                        class="flex"
                                        in:fly|global={{
                                            y: 50,
                                            duration: 400,
                                            delay: 150 + 50 * index,
                                        }}
                                    >
                                        <IconLink
                                            href={item.href}
                                            label={item.label}
                                            iconClass={item.iconClass}
                                        />
                                        {#if index !== operatingSystems.length - 1}
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
                                {#each frontendFrameworks as item, index (index)}
                                    <div
                                        class="flex"
                                        in:fly|global={{
                                            y: 50,
                                            duration: 400,
                                            delay: 200 + 50 * index,
                                        }}
                                    >
                                        <IconLink
                                            href={item.href}
                                            label={item.label}
                                            iconClass={item.iconClass}
                                        />
                                        {#if index !== frontendFrameworks.length - 1}
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