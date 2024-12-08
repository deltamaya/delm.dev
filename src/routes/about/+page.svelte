<script lang="ts">
    import { fly } from "svelte/transition";
    import IconButton from "../IconButton.svelte";
    import { languages, operatingSystems } from "$lib/data.ts";
</script>

<div class="min-h-[calc(100vh-2.5rem)] flex justify-center items-center">
    <div class="flex flex-col items-center">
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
            <div
                class="flex font-bold text-gray-800 text-2xl justify-center items-center"
            >
                <div class="items-center mt-4 mr-1">
                    maya.lang = std::vector&lbrace;
                </div>
                <div class="flex space-x-4 justify-center mt-5">
                    {#each languages as item, index (index)}
                        <div
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
                        </div>
                    {/each}
                </div>
                <div class="mt-4 ml-1">&rbrace;</div>
            </div>
            <div
                class="flex font-bold text-gray-800 text-2xl justify-center items-center"
            >
                <div class="items-center mt-4 mr-1">
                    maya.os = std::set&lbrace;
                </div>
                <div class="flex space-x-4 justify-center mt-4">
                    {#each operatingSystems as item, index (index)}
                        <div
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
                        </div>
                    {/each}
                </div>
                <div class="mt-4 ml-1">&rbrace;</div>
            </div>
        </div>
    </div>
</div>

<img
    src="/about_bg.jpg"
    alt="logo"
    class="blurred_background"
    in:fly={{ y: 50, duration: 400 }}
/>
