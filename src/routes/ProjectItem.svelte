<script lang="ts">
    let {href,iconUrl,desc,title}=$props()
</script>

<a href={href}
   class="flex justify-center flex-col items-center border-4 border-neutral-800 px-5 py-5 rounded-2xl w-[500px] hover:-translate-y-3 duration-300 hover:shadow-2xl">
    <img src={iconUrl} alt="icon" class="w-16 h-16 my-5"/>
    <div class="text-4xl font-extrabold">
        {title}
    </div>
    <div class="text-2xl font-bold text-center">
        {desc}
    </div>
</a>