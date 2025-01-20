<script lang="ts">
    let {name,avatar,desc,link,site}=$props()
</script>

<a href={link}
   class="flex justify-center flex-col items-center border-4 border-neutral-800 px-5 py-5 rounded-2xl w-[500px] hover:-translate-y-3 duration-300 hover:shadow-2xl relative">
    <img src={avatar} alt="icon" class="w-16 h-16 my-5"/>
    <div class="text-4xl font-extrabold">
        {name}
    </div>
    <div class="text-2xl font-bold text-center">
        {desc}
    </div>
    <div class="absolute top-2 right-2 text-xl">
        {site===''?'visit site':site}
    </div>
</a>