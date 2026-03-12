<script lang="ts">
  let { value = $bindable(), placeholder = "Search..." } = $props();
</script>

<div class="p-2 flex flex-col gap-2" >
    <input bind:value={value} class="w-fit border border-black rounded-md p-2" type="text" placeholder={placeholder} />
</div>