---
slug: "new"
title: "New"
author: "Lennart Hesse"
date: "datum"
description: "beschreibung"
keywords: "keywords"
---

# Eine Shopping-App programmieren

Auf der Suche nach einem neuen Projekt habe ich daran gedacht, wie oft ich Einkaufszettel schreibe, nur um sie danach weg zu werfen und ein paar Tage später etwas aufzuschreiben, das ich letztens erst auf meinem Zettel stehen hatte.

Die Idee: Eine App, in der man einmalig die Produkte hinzufügt, die man einkauft, um sie anschließend mit einem Klick zu einem digitalen Einkaufszettel hinzuzufügen und abzuhaken. Gleichzeitig könnte man die Häufigkeit, mit der bestimmte Produkte gekauft werden speichern, sodass oft zum Einkaufszettel hinzugefügte Produkte schnell erreichbar sind.

Also habe ich mich an meinen Laptop gesetzt und einen neuen Ordner in meinem Projekt-Verzeichnis hinzugefügt.

## Als Erstes: Die Planung

Bevor es jedoch zum Programmieren ging, habe ich die Funktionen, die ich mir überlegt hatte, aufgeschrieben und ein grobes Layout skizziert. Es besteht aus einem "Einkaufszettel", auf dem einzelne Produkte stehen, die entweder abgehakt oder wieder vom Zettel entfernt werden können. Darunter befinden sich die verschiedenen Kategorien, zu denen die Produkte zugeordnet werden können, um sie später leichter zu finden. Zuletzt findet sich eine Liste mit allen Produkten, die durch anklicken zum Einkaufszettel hinzugefügt werden können.

Mit dieser Skizze im Kopf habe ich mich daran gemacht, die Benutzeroberfläche zu realisieren.

## SvelteKit

Eine App auf diesem Komplexitätslevel ist sicherlich gut mit einfachem JavaScript zu programmieren. Allerdings hatte ich vor Kurzem meine Webseite mit SvelteKit neu programmiert und wollte dieses JavaScript-Framework noch etwas näher kennenlernen.

Ich habe ein leeres SvelteKit-Projekt erstellt und meine CSS-Vorlage hinzugefügt, die die eingebauten Styles zurücksetzt und etwas hilfreiche Funktionalität bietet, wie beispielsweise, dass eine `<section>` eine maximale Breite hat und mittig platziert wird.

## Benutzeroberfläche und Stylesheet

Für die Oberfläche habe ich zuerst grob die Struktur in HTML aufgeschrieben. Eine `<section>`, die alles enthält und die Seitenränder definiert, jeweils ein Element für Einkaufszettel, Kategorien und Produkte und Platzhalter für diese. Dabei ist mir aufgefallen, dass ich noch einen Button zum Erstellen eines Produktes brauchte, sodass der Zwischenstand etwa so aussah:

```html
<section>
    <h1>ShoppingList</h1>
    <div class="items">
        <h2>Einkaufszettel</h2>
        <ul>
            <li class="item">
                <input type="checkbox" id="item1">
                <label for="item1">Item 1</label>
                <button class="remove-btn">✕</button>
            </li>
        </ul>
    </div>

    <div class="categories">
        <div class="category">Category 1</div>
    </div>

    <div class="products">
        <ul>
            <li class="product">
                <div class="product-body">
                    Product 1
                    <button class="product-info">?</button>
                </div>
            </li>
        </ul>
    </div>
</section>

<button class="add-product">
    <svg viewBox="0 0 100 100"
        stroke="#ffffff"
        stroke-width="10">
        <line x1="50" y1="0" x2="50" y2="100" />
        <line x1="0" y1="50" x2="100" y2="50" />
    </svg>
</button>
```

Anschließend habe ich die einzelnen Elemente mit CSS gestaltet, wobei ich viel mit Flexbox gearbeitet habe.

## Die Macht der Frameworks 

Nun kamen endlich JavaScript und die Funktionen von Svelte zum Einsatz. Ich habe drei Arrays für Elemente auf dem Einkaufszettel (`items`), Kategorien (`categories`) und Produkte (`products`) definiert und mit beispielhaften Werten befüllt. Diese konnte ich dank Svelte mit einem `{#each}`-Block rendern.

```html
<script>
    let items = ["Item 1", "Item 2", "Item 3", "Item 4"]
    let categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"]
    let products = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8", "Product 9"];
</script>

<section>
    <h1>ShoppingList</h1>
    <div class="items">
        <h2>Einkaufszettel</h2>
        <ul>
            {#each items as item}
                <li class="item">
                    <label>
                        <input type="checkbox">
                        {item}
                    </label>
                    <button class="remove-btn" on:click={removeItemFromList(item)}>✕</button>
                </li>
            {/each}
        </ul>
    </div>

    <div class="categories">
        {#each categories as category}
            <button class="category" on:click={filterCategory(category)}>
                {category}
            </button>
        {/each}
    </div>

    <div class="products">
        <ul>
            {#each products as product}
                <li class="product-wrapper">
                    <div class="product">
                        <button class="product-body" on:click={addProductToList(product)}>
                            {product}
                        </button>
                        <button class="product-info" on:click={editProduct(product)}>?</button>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</section>
```

Wie man sieht habe ich die `<input>`-Elemente in die `<label>`-Elemente verschoben, um mir deren Verbindung mit IDs zu sparen. Außerdem habe ich den Buttons bereits Event Listener hinzugefügt, die später die entsprechenden Funktionen aufrufen.

## Pop-Ups und Objekte

Bevor wir zur Implementierung der tatsächlichen Funktionalität kommen, muss noch ein Pop-Up her, das dem User die Möglichkeit gibt, seine eigenen Produkte zu erstellen. Dafür habe ich das `<dialog>`-Element benutzt, welches diesen Prozess sehr vereinfacht.

Zuerst wird das Pop-Up im HTML definiert. Zum Eintragen der Daten habe ich ein Formular verwendet, das beim Abschicken die Funktion `addProduct` aufruft.

```html
<dialog id="add-product-modal" class="modal">
    <h1>Produkt hinzufügen</h1>
    <form method="dialog" id="add-product-form" on:submit={addProduct}>
        <div class="input-text">
            <label for="product-name">Produktname</label>
            <input type="text" name="product-name" id="product-name" required>
        </div>

        <div class="input-text">
            <label for="product-brand">Marke</label>
            <input type="text" name="product-brand" id="product-brand">
        </div>

        <div class="buttons">
            <button class="button btn-primary-light" type="reset" on:click={closeModal}>Abbrechen</button>
            <button class="button btn-primary" type="submit">Hinzufügen</button>
        </div>
    </form>
</dialog>
```

Wichtig dabei ist, das `type`-Attribut der Buttons zu setzen (`button`, `submit`, `reset`), da das Pop-Up sonst nicht weiß, welche Rolle die einzelnen Buttons spielen und es sich bei der Navigation mit der Tastatur nicht unbedingt wie gewollt verhält. Außerdem ist bei bei Formularen mit `method="dialog"` zu beachten, dass diese beim Abschicken die Daten der Eingabe nirgendwo hinschicken und sie auch nicht löschen. Daher wird der Inhalt beim Abbrechen mittels `<button type="reset">` und vor dem Öffnen gelöscht. Die Funktionen sehen wie folgt aus.

```javascript
onMount(() => {
    addProductModal = document.getElementById('add-product-modal');
})

function openAddProductModal() {
    let form = document.getElementById("add-product-form");
    form.reset();
    addProductModal.showModal();
}

function closeModal() {
    addProductModal.close();
}
```

Als Nächstes wird aus der Eingabe ein JavaScript-Objekt mit verschiedenen Attributen erstellt. Im Falle dieses Beispiels besteht es aus dem Namen des Produkts sowie der Marke. Um es später einer Kategorie zuzuordnen, bekommt es dann außerdem ein `category`-Attribut.

Die Eingabewerte werden in der `addProduct`-Funktion etwas länglich eingelesen:

```javascript
function addProduct() {
    let productName = document.getElementById("product-name").value;
    let productBrand = document.getElementById("product-brand").value == "" ? null : document.getElementById("product-brand").value;
}
```

Anschließend wird daraus ein Objekt erstellt das zu der Liste von Produkten hinzugefügt wird. Dabei wird die sogenannte Spread Syntax mit drei Punkten verwendet, da ansonsten die Benutzeroberfläche nicht aktualisiert wird.

```javascript
    let product = {
        name: productName,
        brand: productBrand
    }
    products = [...products, product];
```

Da die Liste der Produkte nun aus Objekten besteht, muss im HTML statt `{product}` nun `{product.name}` stehen. Weitere Attribute können auf die gleiche Weise wie oben erklärt ergänzt werden und das Pop-Up zum Bearbeiten der Produkte funktioniert im Kern ebenso wie oben erklärt.

## Produkte abhaken



## Kategorien



## Daten lokal speicher



## Fazit / Ausblick / Whatever