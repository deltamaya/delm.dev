<script>
    import {friends} from "$lib/data";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {#each friends as {link, avatar, name, desc, site},index}
        <a href={link}
           class="flex flex-col border-[1px] border-neutral-700 px-4 py-2 hover:-translate-y-1 duration-300 min-w-[400px]
           backdrop-blur relative bg-neutral-900 bg-opacity-20" style="z-index: : {index+1}">
            <img src={avatar} alt="icon" class="w-16 h-16 m-2"/>
            <div class="lg:text-2xl md:text-xl text-lg font-bold">
                {name}
            </div>
            <div class="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
                {desc}
            </div>
            <div class="absolute top-2 right-2 lg:text-lg text-sm flex max-w-[200px]">
                {site === '' ? 'visit site' : site}
            </div>
        </a>
    {/each}
</div>