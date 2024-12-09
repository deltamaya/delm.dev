<script lang="ts">
    import {fly} from "svelte/transition";
    import IconButton from "../IconButton.svelte";
    import {frontendFrameworks, languages, operatingSystems, shells} from "$lib/data.ts";
</script>

<div class="min-h-screen flex justify-center items-center -z-10">
    <div class="flex flex-col items-center z-10">
        <img
                src="/avatar.jpg"
                alt="avatar"
                class="w-48 rounded-full border-4 drop-shadow-2xl"
                in:fly={{ y: -50, duration: 400 }}
        />
        <div class="flex flex-col ml-5 items-center">
            <p
                    class="text-8xl font-bold text-gray-800 mt-2"
                    in:fly={{ y: -50, duration: 400, delay: 50 }}
            >
                delta<span class="text-red-500">maya</span>
            </p>
            <div class="text-gray-400 text-xl font-bold mt-5">
                Wuhan University of Technology
            </div>

            <div
                    class="text-gray-800 text-xl font-bold justify-center items-center"
            >
                Student
            </div>
</div>
        <div class="flex flex-col font-bold text-gray-900 text-4xl font-jetbrains">
   <div  class="font-bold text-gray-900 text-4xl font-jetbrains flex flex-col ">
                <div class="flex items-center">
                    const maya = &lbrace;
                </div>
       <div class="flex mt-4 items-center ">
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


            <div  class="flex font-bold text-gray-900 text-4xl font-jetbrains items-center mt-4">
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
                                delay: 100 + 25 * index,
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
                       <div>&rbrace;</div>
           </div>
            <div class="flex font-bold text-gray-900 text-4xl font-jetbrains mt-4 items-center">
                <div>
                    maya.frontend.setFav([]interface&lbrace;&rbrace;&lbrace;
                </div>
                <div class="flex">
                    {#each frontendFrameworks as item, index (index)}
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
                            {#if index !== frontendFrameworks.length - 1}
                                <span class="mt-2 font-bold text-4xl mr-3">,</span>
                            {/if}
                        </div>
                    {/each}
                </div>
                <div class="ml-1">&rbrace;)</div>
            </div>
                    <div class="items-center flex">
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
        </div>


    </div>
</div>
<div class="min-h-screen flex justify-center items-center bg-gray-200 -z-10">
    <div>

    </div>
</div>

<!--<img-->
<!--        src="/about_bg.jpg"-->
<!--        alt="logo"-->
<!--        class="blurred_background"-->
<!--        in:fly={{ y: 50, duration: 400 }}-->
<!--/>-->

<img
        src="/rust-1-512.png"
        alt="logo"
        class="blurred_background"
        in:fly={{ y: 50, duration: 400 }}
/>
