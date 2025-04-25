<script lang="ts">
    let {href, techs, desc, title} = $props()
</script>

<a href={href}
   class="flex justify-center flex-col items-center border-[1px] border-neutral-700 px-4 py-2 max-w-[450px] min-h-[120px]  hover:-translate-y-1 duration-300">
    <div class="flex justify-between w-full">
        <div class="lg:text-2xl md:text-xl text-lg font-bold">
            {title}
        </div>
        <div class="lg:text-2xl md:text-xl text-lg font-bold flex space-x-2 items-center">
            {#each techs as tech}
                <img src="{tech}" alt="{tech}" class="h-8 w-auto"/>
            {/each}
        </div>
    </div>

    <div class="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
        {desc}
    </div>
</a>