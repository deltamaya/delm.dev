<script>
    import {fly} from "svelte/transition";
    import IconButton from "../IconButton.svelte";
    import {techStacks} from "$lib/data.ts";

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
                <div><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>.NET</title><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"/></svg></div>

            <div class="text-gray-800 text-xl font-bold">
                Student
            </div>
            <div class="flex font-bold text-gray-800 text-2xl">
  <div class="flex space-x-4 justify-center mt-5 ">
            {#each techStacks as item, index (index)}
                <div
                        in:fly|global={{ y: 50, duration: 400, delay: 150 +25* index }}
                >
                    <IconButton href={item.href} label={item.label} iconClass={item.iconClass}/>
                </div>
            {/each}
        </div>
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