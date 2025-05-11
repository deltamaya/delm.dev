<script lang="ts">
    import "../app.css";

    let {children} = $props();

</script>

<div class="w-full h-[2px] bg-red-600"></div>

<main class="bg-neutral-900 font-IBMPlexMono">
    {#if children}
        {@render children()}
    {/if}
</main>

<footer class="bg-black text-white flex justify-center items-center h-10 !z-10 relative font-IBMPlexMono">
    <div class="text-sm text-center flex flex-wrap justify-center items-center z-40">
        <span class="inline-block mr-2">©</span>
        <span>{new Date().getFullYear()} deltamaya. All works licensed under&nbsp;</span>
        <a
                href="https://creativecommons.org/licenses/by/4.0/"
                class="text-red-600 underline"
        >
          CC BY 4.0
        </a>
    </div>
</footer>
