<script lang="ts">
    import "../app.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

    let {children} = $props();

</script>



<main class="bg-black font-IBMPlexMono h-full min-h-screen flex flex-col z-[-40]">
    <div class="w-full h-[2px] bg-red-600"></div>
    <Header/>
    {#if children}
        {@render children()}
    {/if}
    <Footer/>
</main>
