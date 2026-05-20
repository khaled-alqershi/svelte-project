<script lang="ts">
	import Error500 from '../../features/common/Error500.svelte';
	import Loader from '../../features/common/Loader.svelte';
	import * as Card from "$lib/components/ui/card/index.js";
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="p-2 mb-6">
	<h1 class="font-black text-3xl tracking-tight uppercase text-foreground">Published Posts</h1>
	<p class="text-xs text-neutral-400 font-mono mt-1">STREAM_DATA // DATASET_NODES</p>
</div>

{#await data.responsePromise}
	<div class="flex justify-center items-center py-20 bg-white border border-neutral-200 rounded-xl m-2">
		<Loader />
	</div>
{:then posts}
	<div class="p-2">
		{#if posts.length === 0}
			<div class="p-12 text-center border border-dashed border-neutral-200 rounded-xl bg-neutral-50/50">
				<p class="text-neutral-400 font-mono text-sm">No data packets found inside this dataset.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> 
				{#each posts as post (post.id)}
					<Card.Root class="flex flex-col justify-between bg-white border border-neutral-200 text-black hover:border-black transition-all duration-300 shadow-sm rounded-xl overflow-hidden group dark:bg-card dark:text-card-foreground dark:border-border dark:hover:border-foreground">
						
						<Card.Header class="pb-3 border-b border-neutral-100 bg-neutral-50/30 dark:border-border dark:bg-muted/20">
							<div class="flex items-start justify-between gap-2">
								<Card.Title class="text-sm font-bold tracking-tight line-clamp-2 text-foreground min-h-[40px]">
									{post.title}
								</Card.Title>
							</div>
							<Card.Description class="text-[10px] font-mono text-muted-foreground pt-1">
								POST_ID: #{post.id}
							</Card.Description>
						</Card.Header>
						
						<Card.Content class="pt-4 text-xs text-neutral-600 dark:text-muted-foreground leading-relaxed flex-1">
							<p class="line-clamp-4 font-normal">{post.body}</p>
						</Card.Content>
						
						<Card.Footer class="pt-2.5 pb-3 px-6 border-t border-neutral-100 bg-neutral-50/30 dark:border-border dark:bg-muted/20 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
							<span>AUTHOR_UID: {post.userId}</span>
						</Card.Footer>

					</Card.Root>
				{/each}
			</div>
		{/if}
	</div>
{:catch error}
	<div class="p-2">
		<Error500 error={error} />
	</div>
{/await}