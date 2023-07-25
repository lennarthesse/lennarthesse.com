<script>
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.data.post.metadata.title} | Lennart Hesse</title>
</svelte:head>

<div class="article-nav card">
    <p><a href="/blog/">&lt; Zurück</a></p>
    <p>{new Date($page.data.post.metadata.date).toLocaleDateString("de-DE", {day: "numeric", month: "long", year: "numeric"})}</p>
</div>

<article>
    <img src="/thumbnails/{$page.data.post.metadata.slug}.jpg" alt="{$page.data.post.metadata.slug}">
    <svelte:component this={$page.data.post.default}></svelte:component>
</article>
