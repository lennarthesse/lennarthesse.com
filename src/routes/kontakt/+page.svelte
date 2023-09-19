<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import NavBurger from "$lib/assets/icons/nav-burger.svelte";
    
    let more = false;
    let success = false;
    let failure = false;
    
    onMount(() => {
        success = $page.url.searchParams.has('success');
        failure = $page.url.searchParams.has('failure');
    });

    function closeBanner() {
        success = false;
        failure = false;
    }
</script>

<svelte:head>
    <title>Kontakt | Lennart Hesse Design & Development</title>
</svelte:head>


<div class="bg-light-gray">
    <section id="kontakt" class="bg-light shadow">
        {#if success}
            <div class="banner success">
                <section>
                    <p>Anfrage wurde gesendet!</p>
                    <button class="crossed" on:click={closeBanner}>
                        <NavBurger />
                    </button>
                </section>
            </div>
        {:else if failure}
            <div class="banner failure">
                <section>
                    <p>Ein Fehler ist aufgetreten. Die Anfrage wurde nicht gesendet.</p>
                    <button class="crossed" on:click={closeBanner}>
                        <NavBurger />
                    </button>
                </section>
            </div>
        {/if}
        <h1>Kontakt</h1>
        <div class="panels">
            <form action="/php/contact.php" method="post" autocomplete="on">
                <fieldset>
                    <legend><h2>Welche Leistungen suchen Sie?</h2></legend>
                    <div class="input-checkbox">
                        <input type="checkbox" name="logo" id="logo">
                        <label for="logo">Logo Design</label>
                    </div>
                    <div class="input-checkbox">
                        <input type="checkbox" name="farbpalette" id="farbpalette">
                        <label for="farbpalette">Konzeption Farbpalette</label>
                    </div>
                    <div class="input-checkbox">
                        <input type="checkbox" name="schriftart" id="schriftart">
                        <label for="schriftart">Auswahl Schriftart</label>
                    </div>
                    <div class="input-checkbox">
                        <input type="checkbox" name="unterlagen" id="unterlagen" bind:checked={more}>
                        <label for="unterlagen">Geschäftsunterlagen</label>
                    </div>
                    {#if more}
                        <div id="js-more" class="more">
                            <div class="input-checkbox">
                                <input type="checkbox" name="visitenkarte" id="visitenkarte">
                                <label for="visitenkarte">Visitenkarte</label>
                            </div>
                            <div class="input-checkbox">
                                <input type="checkbox" name="briefpapier" id="briefpapier">
                                <label for="briefpapier">Briefpapier</label>
                            </div>
                            <div class="input-checkbox">
                                <input type="checkbox" name="flyer" id="flyer">
                                <label for="flyer">Flyer</label>
                            </div>
                            <div class="input-checkbox">
                                <input type="checkbox" name="anderes" id="anderes">
                                <label for="anderes">Anderes</label>
                            </div>
                        </div>
                    {/if}
                    <div class="input-checkbox">
                        <input type="checkbox" name="website" id="website">
                        <label for="website">Website</label>
                    </div>
                    <div class="input-labeled-text">
                        <textarea name="bemerkungen" id="bemerkungen" placeholder=" " rows="16"></textarea>
                        <label for="bemerkungen">Bemerkungen</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend><h2>Ihre Daten</h2></legend>
                    <div class="input-labeled-text">
                        <input type="text" name="vorname" id="vorname" placeholder=" " required>
                        <label for="vorname">Vorname *</label>
                    </div>
                    <div class="input-labeled-text">
                        <input type="text" name="nachname" id="nachname" placeholder=" " required>
                        <label for="nachname">Nachname *</label>
                    </div>
                    <div class="input-labeled-text">
                        <input type="email" name="email" id="email" placeholder=" " required>
                        <label for="email">E-Mail *</label>
                    </div>
                    <div class="input-labeled-text">
                        <input type="tel" name="telefon" id="telefon" placeholder=" " pattern="[+]?[0-9\s-]+">
                        <label for="telefon" title="Zahlen 0-9, +, -">Telefon</label>
                    </div>
                </fieldset>

                <div class="input-labeled-text" style="height:0px; overflow:hidden">
                    <input type="text" name="firma" id="firma" placeholder=" " tabindex="-1">
                    <label for="firma">Firma</label>
                </div>
                
                <div class="input-checkbox">
                    <input type="checkbox" name="privacy" id="privacy" required>
                    <label for="privacy">Ich habe die Hinweise in der <a href="/datenschutz">Datenschutzerklärung</a> zur Kenntnis genommen und akzeptiere diese. *</label>
                </div>

                <p class="hint"><small>Mit * gekennzeichnete Felder sind Pflichtfelder.</small></p>

                <input class="button" type="submit" value="Absenden">
            </form>

            <div class="address">
                <img src="/media/lennarthesse-black-text.svg" alt="Lennart Hesse">
                <p><strong>Lennart Hesse Design & Development</strong><br>
                    Potsdamer Straße 13<br>
                    28211 Bremen<br>
                    Deutschland</p>

                <p>Telefon: <a href="tel:+4917639886008">+49 176 39886008</a><br>
                    E-Mail: <a href="mailto:info@lennarthesse.com">info@lennarthesse.com</a><br>
                    Web: <a href="https://lennarthesse.com">www.lennarthesse.com</a></p>
            </div>
        </div>
    </section>
</div>