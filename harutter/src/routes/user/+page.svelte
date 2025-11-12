<script lang="ts">
    let { data } = $props();
</script>

<ul>
    {#each data.summaries as { slug, name, id}}
        <li><a href="/user/{slug}">{name}</a></li>
        <br>
    {/each}
</ul>