<svelte:head>
    <title>Kontakt | Lennart Hesse Design & Development</title>
</svelte:head>

<div class="bg-light-gray">
    <section id="kontakt" class="bg-light shadow">
        <h1>Kontakt</h1>
        <div class="panels">
            <form action="contact.php" method="post" autocomplete="on">
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
                        <input type="checkbox" name="geschäftsunterlagen" id="geschäftsunterlagen">
                        <label for="geschäftsunterlagen">Geschäftsunterlagen</label>
                    </div>
                    <div class="input-checkbox">
                        <input type="checkbox" name="website" id="website">
                        <label for="website">Website</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend><h2>Ihre Daten</h2></legend>
                    <div class="input-labeled-text">
                        <input type="text" name="vorname" id="vorname" placeholder="" required>
                        <label for="vorname">Vorname *</label>
                    </div>
                    <div class="input-labeled-text">
                        <input type="text" name="nachname" id="nachname" placeholder="" required>
                        <label for="nachname">Nachname *</label>
                    </div>
                    <div class="input-labeled-text">
                        <input type="email" name="email" id="email" placeholder="" required>
                        <label for="email">E-Mail *</label>
                    </div>
                    <div class="input-labeled-text">
                        <input type="tel" name="telefon" id="telefon" placeholder="" pattern="[+]?[0-9\s-]+">
                        <label for="telefon" title="Zahlen 0-9, +, -">Telefon</label>
                    </div>
                </fieldset>

                
                <div class="input-checkbox">
                    <input type="checkbox" name="privacy" id="privacy" required>
                    <label for="privacy">Ich habe die Hinweise in der <a href="/datenschutz">Datenschutzerklärung</a> zur Kenntnis genommen und akzeptiere diese. *</label>
                </div>

                <p>Felder mit * sind Pflichtfelder.</p>

                <input class="button" type="submit" value="Absenden">
            </form>

            <div>
                <h2>Lennart Hesse</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vel! Non laudantium est perferendis similique. Laborum aliquid animi odit necessitatibus dolorem eaque voluptatem. Quam minima impedit itaque ratione vel deleniti?</p>
            </div>
        </div>
    </section>
</div>