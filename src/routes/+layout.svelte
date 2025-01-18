<script lang="ts">
    import "../app.css";
    let {children} = $props();
</script>

<main class="bg-neutral-100 font-Inter">
    {#if children}
        {@render children()}
    {/if}
</main>

<footer class="bg-neutral-900 text-white flex justify-center items-center font-Inter h-10 !z-40 relative">
    <div class="text-sm text-center flex flex-wrap justify-center items-center z-40">
        <span class="inline-block mr-2">©</span>
        <span>{new Date().getFullYear()} Maya. All works&nbsp;</span>
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
