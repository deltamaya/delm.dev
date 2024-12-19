<script>
  const {text}=$props()
</script>

  <div class="flex">
    {#each text.split('') as char, i}
      <span
        class="animate-wave"
        style="animation-delay: {i * 0.15}s"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    {/each}
  </div>