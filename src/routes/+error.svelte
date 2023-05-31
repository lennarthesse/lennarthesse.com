<script>
    import { page } from '$app/stores';
</script>

<section id="error">
    <div class="error-msg">
        <h1>{$page.status}</h1>
        {#if $page.status == "404"}
            <p>Die angeforderte URL {$page.url.pathname} konnte nicht auf diesem Server gefunden werden.</p>
        {:else if $page.status == "500"}
            <p>Es ist ein serverinterner Fehler aufgetreten. Wir bitten um Verständnis.</p>
        {:else}
            <p>{$page.error.message}</p>
        {/if}
        <p><a href="/">Zurück zur Homepage</a>.</p>
    </div>
</section>