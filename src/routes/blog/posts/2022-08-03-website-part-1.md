---
slug: "webseite-erstellen-html-css-javascript"
title: "Eine eigene Webseite erstellen (Teil 1/2): HTML, CSS & JavaScript"
author: "Lennart Hesse"
date: "2022/08/03"
description: "Der erste Teil"
keywords: "html, css, javascript"
categories: "HTML/CSS, JavaScript"
---

# {title}

In der unserer digitalisierten Welt wird es immer wichtiger, eine ordentliche Online-Präsenz zu haben. Aber was tut man, wenn man keine Plattformen wie Twitter, Instagram oder TikTok benutzen möchte?

Die Antwort: Man baut seine eigene Seite, mit voller Kontrolle über jedes einzelne Detail. Eine eigene Webseite zu programmieren und online zu hosten ist relativ simpel.

In dieser kleinen Serie möchte ich die Schritte zeigen, die für mich nötig waren, eine einfache Webseite zu entwickeln und anschließend im Internet zugänglich zu machen.

## Was braucht man?

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