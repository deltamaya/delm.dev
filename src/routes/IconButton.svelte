<script lang="ts">
    import {spring} from "svelte/motion";
    let scale=spring(1,{stiffness:0.2,damping:0.5})

    let {href,label,iconClass} =$props()
</script>

<a
        href={href}
        target="_blank"
        class="icon-button text-3xl hover:text-red-600 transition-colors duration-300"
        aria-label={label}
        onmouseenter={() => scale.set(1.2)}
        onmouseleave={() => scale.set(1)}
>
    <i
            class={iconClass}
            style="transform: scale({$scale});"
    ></i>
</a>