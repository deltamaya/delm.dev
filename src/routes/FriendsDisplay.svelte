<script>
import {friends} from "$lib/data";
import FriendItem from "./FriendItem.svelte";
</script>

<div class="flex flex-wrap gap-10">
    {#each friends as {name,avatar,desc,link,site}}
        <FriendItem {name} {desc}{avatar} {site}{link}/>
    {/each}
        <div>
          Feel like we'd vibe? Let's exchange
        <a href="/exchange" class="hover:underline bg-red-600 px-3 py-1 italic underline text-white">
    Friend Links
    </a>
        !
         You're always welcome. 😊
    </div>
</div>