<script lang="ts">
    let {href,iconUrl,desc,title}=$props()
</script>

<a href={href}
   class="flex justify-center flex-col items-center border-4 border-neutral-800 px-5 py-5 rounded-2xl w-[450px] hover:-translate-y-3 duration-300 hover:shadow-2xl">
    <img src={iconUrl} alt="icon" class="lg:w-16 lg:h-16 lg:my-5 w-12 h-12 md:my-4 my-3"/>
    <div class="lg:text-4xl md:text-3xl text-2xl font-extrabold">
        {title}
    </div>
    <div class="lg:text-2xl md:text-2xl text-xl font-bold text-center">
        {desc}
    </div>
</a>