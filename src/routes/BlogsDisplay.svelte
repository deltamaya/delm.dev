<script>
    import {blogs} from "$lib/data";
</script>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 z-[20]">
    {#each blogs as {link,title,description,pubDate},index}
            <a href={link}
               class="flex flex-col border-[1px]  bg-black border-neutral-800 px-4 py-2 min-w-[250px] hover:border-red-600 transition-all
               backdrop-blur hover:-translate-y-1 duration-300 "  style="z-index: : {index+1}">
                <div class="lg:text-2xl md:text-xl text-lg font-bold flex flex-col justify-between h-full">
                    <div>
                        {title}
                        <div class="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
                            {description}
                        </div>
                    </div>
                    <div class="lg:text-xl md:text-lg text-sm font-normal text-neutral-400 flex justify-end">
                        {new Date(pubDate).toLocaleDateString()}
                    </div>
                </div>

            </a>
        {/each}
</div>