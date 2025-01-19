<script>
    import ProjectItem from "./ProjectItem.svelte";
    import {projects} from "$lib/data";
</script>
<div class="flex flex-wrap gap-10">
    {#each projects as project}
        <ProjectItem href={project.href} title={project.title} desc={project.desc} iconUrl={project.iconUrl}/>
    {/each}
</div>