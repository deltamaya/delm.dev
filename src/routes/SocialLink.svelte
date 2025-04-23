<script lang="ts">
  import {spring} from "svelte/motion";
  import Icon from "@iconify/svelte";
  let scale=spring(1,{stiffness:0.1,damping:0.4})

  let {href,label,iconClass} =$props()
</script>


<a
      href={href}
      class="icon-button lg:text-5xl md:text-4xl text-3xl hover:text-red-700 transition-colors duration-300 inline-block"
      aria-label={label}
      style="transform: scale({$scale});"
      onmouseenter={() => scale.set(1.25)}
      onmouseleave={() => scale.set(1)}
>
  <Icon icon={iconClass}/>
</a>