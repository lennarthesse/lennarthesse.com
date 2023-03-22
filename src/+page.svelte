<script>
    export let data;
    let { posts } = data;
</script>

<svelte:head>
    <title>Blog | Lennart Hesse</title>
</svelte:head>

<div id="blog">
    <section class="main-aside bg-light">
        <main>
            <h1>Neue Artikel</h1>
            {#each posts as post}
                <hr>
                <h1>{post.title}</h1>
                <p><small>{post.date} | {post.keywords}</small></p>
                <p>{post.description}</p>
            {/each}
        </main>
        <aside>
            <h1>Aside</h1>
            <hr>
        </aside>
    </section>
</div>
