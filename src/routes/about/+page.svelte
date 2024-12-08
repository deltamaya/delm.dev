<script>
    import {fly} from "svelte/transition";

</script>
<div class="min-h-[calc(100vh-2.5rem)] flex justify-center items-center">
    <h1 class="text-6xl ">
        Hello, IBM.
        <br>
        你好， 世界。
    </h1>
</div>

<img
        src="/about_bg.jpg"
        alt="logo"
        class="blurred_background"
        in:fly={{ y: 50, duration: 400 }}
/>