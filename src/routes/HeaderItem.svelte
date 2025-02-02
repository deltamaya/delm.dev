<script>
  let hover = $state(false);
  let {title,id}=$props()
</script>

<style>
  .expand {
    transition: height 0.3s ease;
  }
</style>

<a
  href={`#${id}`}
  class="relative inline-block transition-colors duration-300"
  onmouseenter={() => hover = true}
  onmouseleave={() => hover = false}
>
  <span class={`absolute inset-0 bg-red-600 expand duration-300 ${hover ? 'h-full' : 'h-0'}`}></span>
  <div class='relative transition-colors duration-200' class:text-white={hover}>{title}</div>
</a>