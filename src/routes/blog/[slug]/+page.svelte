<script>
    export let data;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.title} | Lennart Hesse</title>
</svelte:head>

<article>
    <svelte:component this={post.content.default}></svelte:component>
</article>
