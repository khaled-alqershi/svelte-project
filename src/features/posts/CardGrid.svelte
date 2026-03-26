<script lang="ts" > 
    import type { Post } from "$lib/types";
	import PostCard from "./PostCard.svelte";
    let posts: Post[] = []
</script>

<div class="card-grid" >
    {#each posts as post}
        <PostCard post={post} />
    {/each}
</div>

<style>
    .card-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>