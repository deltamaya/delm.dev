<script lang="ts">
    let {name,avatar,desc,link,site}=$props()
</script>

<a href={link}
   class="flex flex-col border-[1px] max-w-[500px] border-neutral-700 px-4 py-2 hover:-translate-y-1 duration-300 relative">
    <img src={avatar} alt="icon" class="w-16 h-16 m-2"/>
    <div class="lg:text-2xl md:text-xl text-lg font-bold">
        {name}
    </div>
    <div class="lg:text-xl md:text-lg text-sm font-normal text-neutral-400">
        {desc}
    </div>
    <div class="absolute top-2 right-2 text-xl">
        {site===''?'visit site':site}
    </div>
</a>