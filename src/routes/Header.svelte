<script>
    import HeaderItem from "./HeaderItem.svelte";
</script>


<div class="py-5 lg:px-10 md:px-5 px-3 self-center w-full flex lg:text-4xl md:text-3xl sm:text-2xl text-xl">
    <div class="flex lg:w-[1024px] md:w-[720px] sm:w-[500px] ">
        <div class="flex flex-wrap lg:gap-10 md:gap-7 gap-3">
            <a href="https://delm.dev">
 <img src="logo.png"
                 class="lg:w-[70px] lg:h-[40px] md:w-[60px] md:h-[35px] w-[50px] h-[28px] mr-4" alt="logo"/>
            </a>

            <HeaderItem title="Blogs" url="https://blog.delm.dev"/>
            <HeaderItem title="Utils" url="https://utils.delm.dev"/>
        </div>
    </div>
</div>

