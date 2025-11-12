<script lang="ts">
    let { data } = $props();
</script>
{#if data.user}
    <title>{data.user.name}</title>
    <h1>{data.user.name}</h1>
    <p>{data.user.description}</p>
{/if}
{#if !data.user}
    <h1>User not found</h1>
{/if}
