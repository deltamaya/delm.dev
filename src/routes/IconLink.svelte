<script lang="ts">
  let {href,label,iconUrl} =$props()
</script>


<a href={href} class="hover:-translate-y-1 duration-200">
  <img src={iconUrl} alt={label}  class="lg:h-16 lg:w-16 md:h-12 md:w-12 h-8 w-8"/>
</a>