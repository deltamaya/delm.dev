<script lang="ts">
    import "../app.css";
    let {children} = $props();
</script>

<main class="bg-gray-200 font-inter relative overflow-hidden z-0">
    {#if children}
        {@render children()}
    {/if}
</main>

<footer class=" bg-gray-900 text-gray-200 py-4 flex justify-center items-center font-inter h-10 !z-40 relative">
    <div class="text-sm text-center flex flex-wrap justify-center items-center z-40">
        <span class="inline-block mr-2">©</span>
        <span>2024 Maya. All works Copyleft.</span>
        <a
                href="https://www.gnu.org/copyleft/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-red-500 hover:underline ml-2"
        >
            Learn more about Copyleft
        </a>
    </div>
</footer>
