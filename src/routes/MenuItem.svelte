<script>
    import {spring} from "svelte/motion";
    import Icon from "@iconify/svelte";
    let scale=spring(1,{stiffness:0.1,damping:0.5})
    let {href,label,title,iconClass}=$props()
</script>

<a
        href={href}
        aria-label={label}
        class="w-4/5 max-h-16 rounded-xl flex items-center"
        onmouseenter={() => scale.set(1.1)}
        onmouseleave={() => scale.set(1)}

>
    <div
            class="lg:text-6xl md:text-4xl text-3xl flex font-bold hover:text-red-500 transition-colors duration-300"
            style="transform: scale({$scale});"
    >
            <Icon icon={iconClass} class="mr-16"/>
        <p>{title}</p>
    </div>
</a>