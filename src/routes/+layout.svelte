<script lang="ts">
    import "../app.css";

    let {children} = $props();

</script>

<div class="w-full h-1 bg-red-600"></div>

<main class="bg-neutral-900 font-IBMPlexMono">
    {#if children}
        {@render children()}
    {/if}
</main>

<footer class="bg-neutral-900 text-white flex justify-center items-center h-10 !z-40 relative font-IBMPlexMono">
    <div class="text-sm text-center flex flex-wrap justify-center items-center z-40">
        <span class="inline-block mr-2">©</span>
        <span>{new Date().getFullYear()} deltamaya. All works&nbsp;</span>
        <a
                href="https://www.gnu.org/copyleft/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-red-600 underline font-extrabold"
        >
          Copyleft
        </a>
    </div>
</footer>
