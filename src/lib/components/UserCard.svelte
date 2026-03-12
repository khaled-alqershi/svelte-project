<script lang="ts">
  import type { User } from '$lib/types';
  let { user }: { user: User } = $props();
</script>

<a href={`/users/${user.id}`} >
    <div class="p-4 border border-black rounded-md" >
        <p><span class="font-bold" >Name:</span> {user.name}</p>
        <p><span class="font-bold" >Email:</span> {user.email}</p>
        <p><span class="font-bold" >Website:</span> {user.website}</p>
    </div>
</a>