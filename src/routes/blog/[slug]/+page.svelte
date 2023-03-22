<script>
    export let data;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.title} | Lennart Hesse</title>
</svelte:head>

<svelte:component this={post.content.default}></svelte:component>
