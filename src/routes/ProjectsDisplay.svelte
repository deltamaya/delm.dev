<script>
    import ProjectItem from "./ProjectItem.svelte";
    import {projects} from "$lib/data";
</script>
<div class="gap-5 flex flex-wrap">
    {#each projects as project}
      <ProjectItem href={project.href} title={project.title} desc={project.desc} techs={project.techs} />
    {/each}
</div>