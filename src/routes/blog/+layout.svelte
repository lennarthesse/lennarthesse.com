<script>
    export let data;
    let { recentPosts } = data;
</script>

<section class="blog main-aside">
    <main>
        <slot />
    </main>
    <aside>
        <div class="card bg-light">
            <div class="body">
                <h2>Beliebte Artikel</h2>
                <div id="recent-articles">
                    {#each recentPosts as post}
                        <hr>
                        <a href="/blog/{post.slug}">
                            <div class="recent-article">
                                <div>
                                    <img src="/thumbnails/{post.slug}.jpg" alt="{post.slug}">
                                </div>
                                {post.title}
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        <div class="card bg-light">
            <div class="body">
                <h2>Suche</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus praesentium unde animi iure. Nobis consectetur recusandae consequuntur tempore alias ipsam atque quas officiis esse. Quas non fugit assumenda necessitatibus dolores?</p>
            </div>
        </div>
        <div class="card bg-light">
            <div class="body">
                <h2>Kategorien</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, alias vero. Magnam tenetur voluptatum eius nesciunt asperiores numquam, sint neque similique corporis vero? Voluptatum quam sapiente facere error exercitationem tenetur.</p>
            </div>
        </div>
    </aside>
</section>