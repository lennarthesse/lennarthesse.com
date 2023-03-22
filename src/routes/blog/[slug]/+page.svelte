<script>
    export let data;
</script>

<svelte:head>
    <title>{data.post.title} | Lennart Hesse</title>
</svelte:head>

<div class="blog">
    <section class="main-aside bg-light">
        <main>
            <svelte:component this={data.post.post.default}></svelte:component>
        </main>
        <aside>
            <h1>Aside</h1>
        </aside>
    </section>
</div>
