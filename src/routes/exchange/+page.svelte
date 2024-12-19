<script>
    import {fly} from "svelte/transition";

</script>

<div class="min-h-[calc(100vh-2.5rem)] flex justify-evenly items-center self-center text-center gap-10
bg-gray-200 font-bold
    -z-10
">
    <div class="flex flex-col text-2xl z-10">
        <div class="text-4xl font-bold"
                     in:fly={{ y: -50, duration: 400 }}>
            There are two ways to send friend link request:
        </div>
        <div class="mt-10">
                    <div
                                 in:fly={{ y: 50, duration: 400 }}>
            Send via <a href="mailto:me@delm.dev" class="font-bold text-red-500 underline">Email</a>
        </div>
        <div
                     in:fly={{ y: 50, duration: 400 ,delay:100}}>
            or
        </div>
        <div
                     in:fly={{ y: 50, duration: 400  ,delay:200}}>
            Send via <a href="https://t.me/deltamayabot"  class="font-bold text-red-500 underline">Telegram Bot</a>
        </div>
        </div>

    </div>

</div>



<div style="font-size: 1000px"
             in:fly={{ y: 100, duration: 400 }}
        class="text-9xl pointer-events-none select-none z-0 fixed object-cover font-bold text-gray-300 top-0 left-0"
>
     &lt;&gt;
</div>