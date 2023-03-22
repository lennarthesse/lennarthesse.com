<script>
    export let data;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.title} | Lennart Hesse</title>
</svelte:head>

<div class="blog">
    <section class="main-aside bg-light">
        <main>
            <svelte:component this={post.post.default}></svelte:component>
        </main>
        <aside>
            <h1>Aside</h1>
        </aside>
    </section>
</div>
