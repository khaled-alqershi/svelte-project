<script>
    const { error } = $props()
</script>

<div class="m-4 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
    <p class="text-red-600 font-bold">{ error.message }</p>
    <button 
        onclick={() => window.location.reload()} 
        class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
        Try again.
    </button>
</div>