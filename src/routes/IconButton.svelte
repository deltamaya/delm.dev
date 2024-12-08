<script lang="ts">
    import {spring} from "svelte/motion";
    let scale=spring(1,{stiffness:0.2,damping:0.5})

    let {href,label,iconClass} =$props()
</script>

<a
        href={href}
        target="_blank"
        class="icon-button text-4xl hover:text-red-500 transition-colors duration-300 inline-block"
        aria-label={label}
        style="transform: scale({$scale});"
        onmouseenter={() => scale.set(1.25)}
        onmouseleave={() => scale.set(1)}
>
    <i
            class="{iconClass}"
    ></i>
</a>
