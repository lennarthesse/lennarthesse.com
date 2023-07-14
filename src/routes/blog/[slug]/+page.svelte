<script>
    export let data;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.metadata.title} | Lennart Hesse</title>
</svelte:head>

<article>
    <img src="/thumbnails/{post.metadata.slug}.jpg" alt="{post.metadata.slug}">
    <svelte:component this={post.default}></svelte:component>
</article>
