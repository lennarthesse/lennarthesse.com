<script>
    import { page } from '$app/stores';
    
    $: paths = $page.url.pathname.split("/");

    console.log($page);

    let crumbs = [];
    let prevUrl = "/";

    $: {
        crumbs = [];
        prevUrl = "/";

        for (let i = 0; i < paths.length; i++) {
            if (paths[i] != "") {
                crumbs = [...crumbs, {
                        name: paths[i].charAt(0).toUpperCase() + paths[i].slice(1),
                        url: prevUrl += paths[i] + "/"
                    }
                ];
            }
        }
    }

    console.log(crumbs);
</script>

<div class="breadcrumbs">
    <section>
        <div class="bg-light">    
            <p>
                {#each crumbs as crumb}
                    <a href={crumb.url}>{crumb.name}</a> &gt;
                {/each}
            </p>
        </div>
    </section>
</div>
<section class="blog main-aside"><!--bg-light shadow-->
    <main>
        <slot />
    </main>
    <aside>
        <div class="post-preview bg-light">
            <div class="body">
                <h1>Aside</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus praesentium unde animi iure. Nobis consectetur recusandae consequuntur tempore alias ipsam atque quas officiis esse. Quas non fugit assumenda necessitatibus dolores?</p>
                
                <h2>Weitere Artikel</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, alias vero. Magnam tenetur voluptatum eius nesciunt asperiores numquam, sint neque similique corporis vero? Voluptatum quam sapiente facere error exercitationem tenetur.</p>
            </div>
        </div>
    </aside>
</section>