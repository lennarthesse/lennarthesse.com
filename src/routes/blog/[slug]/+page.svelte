<script>
    export let data;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.metadata.title} | Lennart Hesse</title>
</svelte:head>

<div class="article-nav card">
    <p><a href="/blog/">&lt; Zurück</a></p>
    <p>{new Date(post.metadata.date).toLocaleDateString("de-DE", {day: "numeric", month: "long", year: "numeric"})}</p>
</div>

<article>
    <img src="/thumbnails/{post.metadata.slug}.jpg" alt="{post.metadata.slug}">
    <svelte:component this={post.default}></svelte:component>
</article>
