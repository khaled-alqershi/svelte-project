<script lang="ts" >
	import PostCard from '../../features/posts/PostCard.svelte';
	import type { PageData } from './$types';
    let { data }: { data: PageData } = $props()

</script>

<h1 class="font-bold text-xl p-2" >Posts</h1>

<ul class="grid grid-cols-2 gap-4 p-2" > 
    {#if data.posts.length === 0}
        <p>No posts found.</p>
    {/if}
    {#each data.posts as post}
        <PostCard post={post} />
    {/each}
</ul>