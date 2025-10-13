<script>
    import {projects} from "$lib/data";
</script>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
    {#each projects as {href,title,techs,desc},index}
        <a href={href}
           class="flex flex-col border-[1px] border-neutral-800 px-4 py-2 min-w-[300px] bg-black
           backdrop-blur hover:-translate-y-1 duration-300 transition-all hover:border-red-600 z-[20]"  style="z-index: : {index+1}">
            <div class="flex justify-between w-full">
                <div class="lg:text-2xl md:text-xl text-lg font-bold">
                    {title}
                </div>
                <div class="flex space-x-2 items-center">
                    {#each techs as tech}
                        <img src="{tech}" alt="{tech}" class="h-6 w-auto"/>
                    {/each}
                </div>
            </div>

            <div class="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
                {desc}
            </div>
        </a>
    {/each}
</div>