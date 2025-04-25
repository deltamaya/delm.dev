<script>
import {friends} from "$lib/data";
import FriendItem from "./FriendItem.svelte";
</script>

<div class="flex flex-wrap gap-10">
    {#each friends as {name,avatar,desc,link,site}}
        <FriendItem {name} {desc}{avatar} {site}{link}/>
    {/each}
</div>