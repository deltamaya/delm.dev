<script>
    import {spring} from "svelte/motion";
    let scale=spring(1,{stiffness:0.1,damping:0.5})
    let {href,label,title,iconClass}=$props()
</script>

<a
        href={href}
        aria-label={label}
        class="w-4/5 h-16 rounded-xl flex items-center"
        onmouseenter={() => scale.set(1.1)}
        onmouseleave={() => scale.set(1)}

>
    <div
            class="text-6xl flex font-bold ml-28 hover:text-red-500 transition-colors duration-300"
            style="transform: scale({$scale});"
    >
        <i class="{iconClass} mr-16"></i>
        <p>{title}</p>
    </div>
</a>