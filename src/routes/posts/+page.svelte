<script lang="ts" >
	import Error500 from '../../features/common/Error500.svelte';
    import Loader from '../../features/common/Loader.svelte';
    import PostCard from '../../features/posts/PostCard.svelte';
	import type { PageData } from './$types';

    let { data }: { data: PageData } = $props()

</script>


<h1 class="font-bold text-xl p-2" >Posts</h1>
{#await data.responsePromise }
    <Loader />

{:then posts}
    <ul class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 gap-2" > 
        {#if posts.length === 0}
            <p>No posts found.</p>
        {/if}
        {#each posts as post}
            <PostCard post={post} />
        {/each}
    </ul>
{:catch error}
    <Error500 error={error} />
{/await}

<!-- 
<style>
    .posts-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        padding: 20px;
    }

    @media screen and (max-width: 1400px) {
        .posts-grid {
            grid-template-columns: repeat(4, 1fr);
        }   
    }

    @media screen and (max-width: 1200px) {
        .posts-grid {
            grid-template-columns: repeat(3, 1fr);
        }   
    }

    @media screen and (max-width: 768px) {
        .posts-grid {
            grid-template-columns: repeat(2, 1fr);
        }    
    }
    
    @media screen and (max-width: 640px) {
        .posts-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }

</style> -->