<script>
    import {fly} from "svelte/transition";

</script>
<div class="min-h-[calc(100vh-2.5rem)] flex justify-center items-center">
    <h1 class="text-6xl  font-ibmPlexSansSC">
        Hello, IBM.
        <br>
        你好， 世界。
    </h1>
</div>

<img
        src="/about_bg.jpg"
        alt="logo"
        class="absolute inset-0 blurred_background w-full"
        in:fly={{ y: 100, duration: 400 }}
/>