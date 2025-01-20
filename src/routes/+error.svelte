<script>


    let mobileLayout = $state(false);
    const mobileLayoutThreshold = 900;
    $effect(() => {
        mobileLayout = window.innerWidth <= mobileLayoutThreshold;


        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    const handleResize = () => {
        mobileLayout = window.innerWidth <= mobileLayoutThreshold;
    };

</script>

<div
        class="min-h-[calc(100vh-4rem)] pb-56 flex justify-center items-center lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-bold -z-10 overflow-hidden"
>
    <div class="z-10">
        <img
                src="/not_found_display.png"
                alt="not found"
                class="lg:h-80 md:h-60 sm:h-50 h-40 rounded-2xl border-4 border-white mb-5 drop-shadow-2xl select-none pointer-events-none"
        />
        <div
                class:flex-col={mobileLayout}
                class="flex">
            <div>
                <div class="lg:text-9xl md:text-8xl text-6xl">Oops!</div>
                <div class="h-2 w-full bg-red-600"></div>
            </div>

            <div
                    class:mt-6={mobileLayout}
                    class="flex flex-col ml-10 pl-10">
                <div>404</div>
                <div>Not Found</div>
                <button
                        class="lg:text-2xl md:text-xl sm:text-lg text-sm bg-red-600 border-red-600 border-2 text-gray-200 p-1
hover:bg-transparent hover:text-gray-800 transition-colors duration-300"
                        onclick={() => history.back()}
                >Let's Get the Hell Out of Here!
                </button>
            </div>
        </div>
    </div>
    <img
            src="/not_found_display.png"
            alt="not found"
            class="absolute inset-0 blurred_background w-full"
    />
</div>
