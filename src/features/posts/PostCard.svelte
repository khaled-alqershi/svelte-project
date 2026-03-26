<script lang="ts">
  import type { Post } from '$lib/types';
  let { post }: { post: Post } = $props();
</script>

<div class="card" >
    <h4 class="font-bold" >{post.title}</h4>
    <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
    <p>User ID: {post.userId}</p>
</div>

<style>
  .card {
    border: 1px solid black;
    padding: 1rem;
    border-radius: 10px;
  }
</style>