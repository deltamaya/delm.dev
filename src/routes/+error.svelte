<script>

</script>
<div
        class="min-h-[calc(100vh-2.5rem)] pb-56 flex justify-center items-center text-8xl font-bold -z-10 overflow-hidden">
    <div
            class="z-10">
        <img src="/not_found_display.png" alt="not found"
             class="h-80 rounded-2xl border-4 border-white mb-5 drop-shadow-2xl select-none pointer-events-none"/>
        <div class="flex">
            <div>
                <div class="text-9xl">
                    Oops!
                </div>
                <div class="h-2 w-full bg-red-500"></div>
            </div>

            <div class="flex flex-col ml-10  pl-10">
                <div>
                    404
                </div>
                <div>
                    Not Found
                </div>
        <button class="text-2xl bg-red-500 border-red-500 border-2 text-gray-200 p-1
hover:bg-transparent hover:text-gray-800 transition-colors duration-300"
                onclick={()=>history.back()}
        >Let's Get the Hell Out of Here!
        </button>
            </div>
        </div>


    </div>
    <img src="/not_found_display.png" alt="not found"
         class="absolute inset-0  blurred_background w-full"/>
</div>
