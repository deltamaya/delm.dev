<script lang="ts">
    import {fly} from "svelte/transition";
    import IconButton from "../IconButton.svelte";
    import Icon from "@iconify/svelte";
    import {frontendFrameworks, languages, operatingSystems, shells} from "$lib/data.ts";
     import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  let cardIsInView=$state(false);
  let showIsInView=$state(false);
  let showArrow=$state(true);
  const options: Options = {
    rootMargin: '-300px',
    unobserveOnEnter: true,
  };
  const handleShowObserve= ({ detail }: CustomEvent<ObserverEventDetails>) => {
    showIsInView = detail.inView;
  };
  const handleCardObserve = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    cardIsInView = detail.inView;
    if(cardIsInView){
        showArrow=false;
    }
  };

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
            <div class="text-gray-400 text-xl font-bold mt-5"
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
        <div class="flex flex-col font-bold text-gray-900 text-4xl font-jetbrains">
   <div  class="font-bold text-gray-900 text-4xl font-jetbrains flex flex-col mt-24">
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
                                delay: 100 + 25 * index,
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
                                delay: 100 + 25 * index,
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


            <div  class="flex font-bold text-gray-900 text-4xl font-jetbrains items-center mt-4"
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
                                delay: 150 + 25 * index,
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

            </div >
                       <div in:fly={{ y: 50, duration: 400 ,delay:100}}>&rbrace;</div>
           </div>
            <div class="flex font-bold text-gray-900 text-4xl font-jetbrains items-center mt-4"
            in:fly={{ y: 50, duration: 400 ,delay:200}}>
                <div >
                    maya.frontend.setFav([]Tech&lbrace;
                </div>
                <div class="flex">
                    {#each frontendFrameworks as item, index (index)}
                        <div
                                class="flex"
                                in:fly|global={{
                                y: 50,
                                duration: 400,
                                delay: 200 + 25 * index,
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
                maya.show()
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
                                delay: 50,
                            }}>
                &darr;</div>
        {/if}
    </div>
</div>
<div class="h-[calc(100vh-2.5rem)] w-full flex justify-center items-center bg-gradient-to-br from-red-500 to-purple-700">
    <div
            use:inview={options}
            oninview_change={handleCardObserve}
            class="transition duration-500 ease-in-out
            h-3/4 w-3/4 flex flex-col justify-center items-center bg-gray-200 rounded-3xl drop-shadow-2xl hover:scale-110"
            class:translate-y-0={cardIsInView}
           class:opacity-90={cardIsInView}
           class:translate-y-16={!cardIsInView}
           class:opacity-0={!cardIsInView}
            role="main"
            aria-label='Intro Card'>
        <p class="text-gray-800 text-lg font-semibold">Floating Card</p>
    </div>
</div>


<img
        src="/rust-1-512.png"
        alt="logo"
        class="blurred_background"
        in:fly={{ y: 50, duration: 400 }}
/>
