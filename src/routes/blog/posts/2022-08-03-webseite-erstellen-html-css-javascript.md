---
slug: "webseite-erstellen-html-css-javascript"
title: "Eine eigene Webseite erstellen (Teil 1/2): HTML, CSS & JavaScript"
author: "Lennart Hesse"
date: "2022/08/03"
description: "In unserer digitalisierten Welt wird es immer wichtiger, eine ordentliche Online-Präsenz zu haben. Aber was tut man, wenn man Plattformen wie Twitter, Instagram oder TikTok nicht nutzen möchte? In diesem Artikel zeige ich, wie ich mit HTML, CSS und etwas JavaScript eine einfache und doch gut aussehende Webseite programmiert habe."
keywords: "html, css, javascript, eigene, webseite, website, programmieren, erstellen"
categories: "HTML/CSS, JavaScript"
---

# {title}

Eine eigene Webseite zu programmieren und online zu hosten ist relativ simpel. In dieser kleinen Serie möchte ich die Schritte zeigen, die für mich nötig waren, eine einfache Webseite zu entwickeln und anschließend im Internet zugänglich zu machen.

## Was wird benötigt?

Eine einfache Webseite besteht aus HTML, CSS und JavaScript. Um diese anschließend ins Internet zu bringen, braucht man außerdem einen Webserver. In diesem Teil werde ich mich auf die Webseite konzentrieren. Im zweiten Teil zeige ich dann, wie man den Webserver einrichtet.

## HTML -- Die Struktur

HTML ist wie das Skelett der Webseite. Es strukturiert die einzelnen Abschnitte und ermöglicht es, CSS und JavaScript bestimmte Teile zu manipulieren.

Für diese Webseite wollte ich, dass ein Banner den Bildschirm füllt, wenn man sie aufruft. Desweiteren wollte ich zwei Abschnitte, einen für den eigentlichen Inhalt und einen für zusätzliche Informationen, welche in Karten organisiert sind.

In HTML übersetzt ergibt das folgende Struktur:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <header></header>
        <main>
            <article></article>
        </main>
        <aside>
            <div class="card"></div>
        </aside>
        <footer></footer>
    </body>
</html>
```

Als nächstes müssen die einzelnen Elemente vorbereitet werden, um mit CSS gestyled zu werden. Das Banner und die Karten bestehen nur aus Überschriften und Text. Die eigentlichen Artikel sind jedoch etwas komplexer. Ich habe als erstes ein Bild eingefügt. Darunter sollten Titel und Datum in einem gesonderten Abschnitt `article-head`, gefolgt von dem Inhalt sein.

```html
<article>
    <img src="./path/to/image" alt="description">
    <div class="article-head">
        <h2>Titel</h2>
        <small>Datum</small>
    </div>
    <p>Inhalt</p>
</article>
```

## CSS -- Das Design

Wenn man sich die Webseite zu diesem Zeitpunkt anschaut, ist man wahrscheinlich eher weniger von ihr überzeugt. Um das zu ändern, setzen wir CSS ein. Auf diese Weise können wir bestimmte Attribute der Elemente verändern und die Webseite von dem...

![Website ohne CSS](/media/posts/{slug}/before.png)

... zu dem machen:

![Webseite mit CSS](/media/posts/{slug}/after.png)

Das Banner sollte den gesamten Bildschirm füllen, also bekommt es eine `height` von `100vh`. Das heißt, dass die Höhe des Elements 100 Prozent der Viewporthöhe entspricht. Der Viewport ist der Teil des Browsers, der tatsächlich die Webseite anzeigt, also ohne die Adressleiste usw.

Dann habe ich noch Hintergrund- und Textfarbe sowie Textgröße festgelegt. Um den Text vertikal zu zentrieren habe ich die `position` und `transform` Attribute benutzt.

```css
header {
    height: 100vh;
    background-color: #99ccdd;
}

header .container {
    color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

header h1 {
    font-size: 4.5em;
}
```

Für die restlichen Elemente habe bin ich ähnlich vorgegangen. Um das Seitenelement neben den Artikeln anzuzeigen, kann das das `float`-Attribut genutzt werden. Nachdem die Hintergrundfarben, Abstände und Textformatierungen eingestellt sind, ist die Arbeit schon fast getan.

## JavaScript -- Funktionalität und Animationen

Bis jetzt zeigt die Webseite genau das an, was wir programmiert haben. Um Funktionen auf Knopfdruck einzubauen brauchen wir JavaScript.

Für die Artikel wollte ich einen "Read More"-Button einbauen, der den Rest des Artikels anzeigt. Dafür habe ich zuerst ein `<button>`-Element eingebaut.

```html
<div class="center-wrapper">
    <button class="centered colored-button">
        Read More
    </button>
</div>
```

Danach habe ich es mit CSS zentriert und gestaltet.

```css
.center-wrapper {
    position: relative;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.colored-button {
    cursor: pointer;
    background-color: #4682b4;
    color: white;
    font-weight: bold;
    padding: 0.5em 1em;
}
```

Jetzt kann die Funktionalität mit Hilfe des `onclick`-Events implementiert werden. Dafür rufen wir die entsprechende Funktion mit `<button onclick="readMore(this)"` auf. Die Funktion sieht wie folgt aus.

```javascript
function readMore(btn) {
    var parent = btn.parentElement.parentElement;
    var panel = parent.querySelector(".panel");

    if (panel.style.maxHeight == "0px") {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.innerHTML = "Read Less";
    } else {
        panel.style.maxHeight = "0px";
        btn.innerHTML = "Read More";
    }                        
}
```

Beim Aufruf wird das `<button>`-Element mit an die Funktion übergeben, damit sie weiß, welchen Artikel sie ein- beziehungsweise ausklappen soll.

Danach wird geprüft, ob der Artikel eingeklappt ist, also ob seine Höhe 0 Pixel beträgt. Ist das der Fall, wird der Artikel ausgeklappt und der Text des Buttons geändert, um bei erneutem Drücken den Artikel wieder einzuklappen.

Wenn der Artikel ausgeklappt ist, wird seine Höhe auf 0 gesetzt und der Text des Buttons entsprechend angepasst.

### Animation

Auch Animationen können mit JavaScript realisiert werden. Unten am Banner wollte ich ein Element haben, das darauf hinweist, dass unten mehr Inhalt folgt.

Zuerst habe ich ein Pfeil-Icon eingefügt. Dann habe ich eine Funktion deklariert, die die Position des Elements mit Hilfe des `bottom`-Attributs über die Zeit ändert.

Dabei muss festgelegt werden, bis wohin das Element nach oben, und wie weit es wieder nach unten bewegt werden soll. Dafür wird ein Boolean deklariert, der anzeigt, ob das Element nach oben bewegt werden soll, oder nicht. Erreicht die Position einen festgelegten Schwellenwert, ändert sich der Wert der Variable und das Element wird entsprechend in die andere Richtung bewegt.

```javascript
var xPos = downIcon.style.bottom;

function animateHint() {
    if (xPos == 10) {
        up = false;
    } else if (xPos == 0) {
        up = true;
    }
    if (up) {
        xPos++;
    } else if (!up) {
        xPos--;
    }
    downIcon.style.bottom = xPos + "px";
}
```

Diese Funktion wird nun einfach in einem festgelegten Zeitintervall aufgerufen.

```javascript
setInterval(animateHint, 75);
```

## Letzte Schritte

Mit diesen grundlegenden Techniken können noch viele weitere Elemente und Funktionen implementiert werden, wie beispielsweise ein Navigationsmenü oder eine Suchleiste.

Im zweiten Teil werde ich zeigen, wie unsere Webseite tatsächlich im Web gehostet werden kann und somit öffentlich zugänglich ist.