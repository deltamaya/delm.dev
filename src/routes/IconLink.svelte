<script lang="ts">
  let {href,label,iconUrl} =$props()
</script>


<a href={href} class="hover:-translate-y-1 duration-200">
  <img src={iconUrl} alt={label}  class="h-16 w-16"/>
</a>