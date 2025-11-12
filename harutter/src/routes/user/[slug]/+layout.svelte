<script>
    let { data, children } = $props();
</script>

<div class="user-layout">
    <main>
        {@render children()}
    </main>
    <aside>
        <br>
        <h1>User Menu</h1>
        <br>
        <nav>
            <ul>
                {#if data.summaries}
                    {#each data.summaries as { slug, name, id}}
                        <li><a href="/user/{slug}">{name}</a></li>
                        <br>
                    {/each} 
                {/if}
            </ul>
        </nav>
    </aside>
</div>