<script lang="ts" >
	import type { User } from "$lib/types";

    let { user }: { user: User } = $props()
</script>

<tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.website}</td>
    <td>{user.phone}</td>
</tr>

<style>
    td {
        border: 1px solid black;
        padding: 5px;
    }
</style>