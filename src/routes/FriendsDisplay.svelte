<script>
import {friends} from "$lib/data";
import FriendItem from "./FriendItem.svelte";
</script>

<div class="flex flex-wrap gap-10">
    {#each friends as {name,avatar,desc,link,site}}
        <FriendItem {name} {desc}{avatar} {site}{link}/>
    {/each}
    <a class="font-normal text-lg hover:underline" href="/exchange">
        Exchange Friend Link Entry
    </a>
</div>