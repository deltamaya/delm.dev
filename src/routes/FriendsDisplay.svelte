<script>
import {friends} from "$lib/data";
import FriendItem from "./FriendItem.svelte";
</script>

<div class="flex flex-wrap gap-5 w-full max-w-[1440px]">
    {#each friends as {name,avatar,desc,link,site}}
        <FriendItem {name} {desc}{avatar} {site}{link}/>
    {/each}
</div>