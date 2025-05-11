<script lang="ts">
  import {Spring} from "svelte/motion";
  import Icon from "@iconify/svelte";
  import {fly} from "svelte/transition";

  let scale=new Spring(1,{stiffness:0.1,damping:0.3});
  let {href,label,iconClass,index} =$props()
</script>


<a
      href={href}
      class="lg:text-3xl md:text-2xl text-xl hover:text-red-700 transition-color duration-200 inline-block"
      aria-label={label}
      style="transform: scale({scale.current});"
      onmouseenter={() => scale.set(1.25)}
      onmouseleave={() => scale.set(1)}
        transition:fly={{delay:index*100,duration:200}}
>
  <Icon icon={iconClass}/>
</a>