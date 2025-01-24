<script>
    let mobileLayout=$state(true);
    let {dark}=$props();

    import {fly}from'svelte/transition'

    const mobileLayoutThreshold=600;

    function handleResize(){
        mobileLayout=window.innerWidth<mobileLayoutThreshold;
    }

    $effect(()=>{
        handleResize()
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    })

</script>


<div class="py-5 lg:px-20 md:px-15 px-10 self-center w-full flex lg:text-4xl md:text-3xl text-2xl z-10 opacity-95"
    class:text-white={dark}
class:bg-neutral-800={dark}
         class:fixed={dark}
     transition:fly={{y:-50,duration:200}}
>
    <div class="flex flex-grow lg:w-[1024px] md:w-[720px] sm:w-[500px] ">
        <div class="flex font-extrabold lg:space-x-10 md:space-x-7 space-x-5">
            <img src={dark?"logo-white.png":"logo.png"} class="lg:w-[70px] lg:h-[40px] md:w-[60px] md:h-[35px] w-[50px] h-[28px]" alt="logo"/>
            <div>
                Projects
            </div>
            <div>
                About
            </div>
            <div>
                Friends
            </div>
        </div>
    </div>
</div>