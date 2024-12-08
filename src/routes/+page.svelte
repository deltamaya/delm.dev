<script>
    import {fly} from "svelte/transition";
    import IconButton from "./IconButton.svelte";
    import MenuItem from "./MenuItem.svelte";
    import {iconButtons, menuItems} from "$lib/data";

</script>

<div
        class="min-h-[calc(100vh-2.5rem)] flex justify-between items-center px-32 text-center overflow-hidden
    -z-10
"
>
    <div
            class="w-1/2 flex flex-col justify-between items-center z-10
    "
    >
        <div class="flex items-center title-float">
            <img
                    src="/avatar.jpg"
                    alt="avatar"
                    class="w-32 rounded-full border-4 drop-shadow-2xl"
                    in:fly={{ y: -50, duration: 400 }}
            />
            <div class="flex flex-col ml-5">
                <p
                        class="text-8xl font-bold text-gray-800 mt-2"
                        in:fly={{ y: -50, duration: 400, delay: 50 }}
                >
                    delm.<span class="text-red-600">dev</span>
                </p>
                <div
                        class="flex justify-center space-x-4 mt-1 items-center"
                ></div>
            </div>
        </div>
        <div class="flex flex-col items-center mt-16">
            <h1
                    class="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
                    in:fly={{ y: 50, duration: 400, delay: 50 }}
            >
                Hi, I'm <span class="text-red-600">Maya☆</span>.
            </h1>
            <p
                    class="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
                    in:fly={{ y: 50, duration: 400, delay: 100 }}
            >
                Problem Solver. Life Enthusiast. Work Hard, Play Hard.
            </p>


        </div>
        <div class="flex space-x-4 justify-center">
            {#each iconButtons as item, index (index)}
                <div
                        in:fly|global={{ y: 50, duration: 400, delay: 150 +25* index }}
                >
                    <IconButton href={item.href} label={item.label} iconClass={item.iconClass}/>
                </div>
            {/each}
        </div>
    </div>
    <div class="w-1/2 items-center flex flex-col z-10 space-y-5 justify-center">
        {#each menuItems as item, index (index)}
            <div
                    class="w-full ml-48"
                    in:fly|global={{ x: 100, duration: 400, delay: 50*index }}
            >
                <MenuItem href={item.href} label={item.label} title={item.title} iconClass={item.iconClass}/>
            </div>
        {/each}
    </div>

    <img
            src="/logo.png"
            alt="logo"
            class="absolute inset-0  blurred_background"
            in:fly={{ y: 100, duration: 400 }}
    />
</div>
