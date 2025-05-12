<script lang="ts">
  import {Spring} from "svelte/motion";
  import Icon from "@iconify/svelte";

  let scale=new Spring(1,{stiffness:0.1,damping:0.4});
  let {href,label,iconClass} =$props()
</script>


<a
      href={href}
      class="lg:text-3xl md:text-2xl text-xl hover:text-red-600 transition-color inline-block"
      aria-label={label}
      style="transform: scale({scale.current});"
      onmouseenter={() => scale.set(1.25)}
      onmouseleave={() => scale.set(1)}
>
  <Icon icon={iconClass}/>
</a>