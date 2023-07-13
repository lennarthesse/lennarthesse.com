<script>
    export let data;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.metadata.title} | Lennart Hesse</title>
</svelte:head>

<article>
    <svelte:component this={post.default}></svelte:component>
</article>
