<script lang="ts">
	export let title: string = "";
	export let value: string = "";
	export let description: string = "";
</script>

<div class="rounded-xl border border-neutral-200 bg-white text-black p-6 shadow-sm transition-all duration-200 hover:border-black">
	  <div class="flex flex-row items-center justify-between space-y-0 pb-1.5">
		<h3 class="text-xs font-bold tracking-widest uppercase text-neutral-400 font-mono">{title}</h3>
	  </div>
	  <div class="text-3xl font-black tracking-tight text-black font-mono">{value}</div>
	  <p class="text-xs text-neutral-500 mt-2 font-normal border-t border-neutral-100 pt-2">{description}</p>
</div>