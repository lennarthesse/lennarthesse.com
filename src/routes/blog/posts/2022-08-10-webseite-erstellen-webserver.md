---
slug: "webseite-erstellen-webserver"
title: "Eine eigene Webseite erstellen (Teil 2/2): Der Webserver"
author: "Lennart Hesse"
date: "2022/08/10"
description: "Nachdem ich im ersten Teil gezeigt habe, wie man eine einfache Webseite programmiert, erkläre ich in diesem Artikel, wie man einen Webserver aufsetzt, konfiguriert und eine Webseite hosten lässt. Außerdem zeige ich, wie ich meine Seite anschließend öffentlich zugänglich gemacht habe."
keywords: "web, server, hosting, linux, administration, ionos, setup, apache"
categories: "Server"
---

# {title}

Im ersten Teil der Serie habe ich gezeigt, wie man eine einfache Webseite selbst programmiert. In diesem Teil möchte ich zeigen, wie man diese Seite im Internet preisgünstig hosten kann.

## Das World Wide Web

Um eine Webseite im Web zu hosten, wird ein sogenannter Webserver benötigt. Er besteht aus einem Programm, wie zum Beispiel Apache oder Nginx, welches auf einem Rechner, der mit dem Internet verbunden ist, läuft.

Für dieses Projekt werde ich Apache auf einem Ubunturechner benutzen.

## Apache installieren

Für die Installation können wir Ubuntus Packagemanager benutzen. Im Terminal geben wir folgenden Befehl ein.

```
sudo apt install apache2
```

Mit dem Befehl `systemctl status apache2.service` können wir prüfen, ob der Server erfolgreich installiert wurde und läuft. Die Ausgabe sollte etwa so aussehen, wobei `Actice: active (running)` angibt, dass der Server läuft.

```
apache2.service - The Apache HTTP Server
    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
    Active: active (running) since Mon 2022-08-08 16:21:53 CEST; 3s ago
    Docs: https://httpd.apache.org/docs/2.4/
    Process: 12010 ExecStart=/usr/sbin/apachectl start (code=exited, status=0/SUCCESS)
    Main PID: 12014 (apache2)
    Tasks: 55 (limit: 18342)
    Memory: 5.1M
    CGroup: /system.slice/apache2.service
            ├─12014 /usr/sbin/apache2 -k start
            ├─12015 /usr/sbin/apache2 -k start
            └─12016 /usr/sbin/apache2 -k start
```

Sollte dort `inactive` oder `failed` stehen, kann der Server mit `systemctl restart apache2.service` neu gestartet werden.

## Die Webseite hochladen

Wenn wir nun die IP-Adresse des Rechners, auf dem der Server läuft (sie kann mit `hostname -I` angezeigt werden), im Browser eingeben, werden wir Apaches Default-Page sehen.

![Apaches Default-Page](/media/posts/webseite-erstellen-webserver/apache.png)

Sie gibt nützliche Informationen zum Konfigurationsverzeichnis und, wichtig für den nächsten Schritt, von wo die Daten für die anzuzeigende Webseite genommen werden, nämlich `/var/www/`. In diesem Verzeichnis erstellen wir einen Ordner für unsere Webseite, in welchen wir alle Dateien kopieren.

Jetzt muss der Server so konfiguriert werden, dass er die neue Webseite anstelle der Default-Page zeigt. Im Konfigurationsverzeichnis `/etc/apache2/` gibt es einen Ordner namens `sites-available/`. Dieser enthält Konfigurationen, die man modular aktivieren kann. Als Grundlage können wir die bereits vorhandene Datei `000-default.conf` kopieren und angemessen benennen, beispielsweise mit dem zukünftigen Domainnamen.

Der Inhalt der Datei sollte folgende Zeilen enthalten, wobei die \[Informationen\] entsprechend angepasst werden.

```markup
<VirtualHost *:80>
    ServerAdmin [contact email address]
    ServerName [domain name]
    ServerAlias www.[domain name]
    DocumentRoot /var/www/[website folder]
</VirtualHost>
```

Um die Änderungen in Kraft treten zu lassen, deaktivieren wir die alte Konfiguration, aktivieren die neue und starten den Server neu.

```
sudo a2dissite 000-default.conf
sudo a2ensite [name].conf
sudo systemctl restart apache2.service
```

Nun wird die Seite aus dem neuen Verzeichnis angezeigt.

## In die Öffentlichkeit

Bis jetzt konnten die Schritte auch gut auf einem persönlichen Rechner ausgeführt werden, um die Webseite im lokalen Netzwerk zugänglich zu machen. Wenn sie aber nicht nur für die Familie oder Mitbewohner gedacht ist, muss dafür gesorgt werden, dass man zuverlässig darauf zugreifen kann.

Dazu könnte man den eigenen Router so einrichten, dass er Verbindungen von außerhalb zulässt und den Internetanbieter bitten, dem Router eine statische IP-Adresse zuzuweisen.

Stattdessen kann man aber auch sogenannte Root Server mieten, die sehr günstig sind und außerdem im gleichen Schritt das Mieten einer Domain und dazugehörigen E-Mail-Adresse ermöglichen.

## Einen Server mieten

Root Server überlassen dem Kunden selbst Setup und Pflege und sind daher günstiger als verwaltete Server. In meinem Fall habe ich einen Root Server von IONOS für 1€ pro Monat gemietet und ebenfalls eine Domain dazugebucht.

Um den Server einzurichten, kann man über SSH auf den Server zugreifen und wie oben beschrieben den Webserver installieren. Jetzt kann auch über den Anbieter der Domainname in das Domain Name System (DNS) eingetragen werden, wodurch der Server auch über die Domain erreichbar ist.

## SSL/TLS

Noch werden Anfragen unverschlüsselt mit Hilfe von HTTP übermittelt. Um das zu ändern, verwenden wir ein SSL-Zertifikat, welches es bei IONOS direkt zum Server dazu gibt. Als Erstes aktivieren wir Apaches SSL Modul.

```
sudo a2enmod ssl
```

Dann muss die Konfiguration so angepasst werden, dass sie neben HTTP Verbindungen über Port 80 auch HTTPS Verbindungen über Port 443 zulässt. Außerdem sollen alle HTTP Verbindungen zu HTTPS umgeleitet werden. Die neue Konfigurationsdatei sieht so aus:

```markup
<VirtualHost *:80>
    ServerAdmin [contact email address]
    ServerName [domain name]
    ServerAlias www.[domain name]
    DocumentRoot /var/www/[website folder]
    Redirect permanent / https://[domain name]
</VirtualHost>

<VirtualHost *:443>
    ServerAdmin [contact email address]
    ServerName [domain name]
    ServerAlias www.[domain name]
    DocumentRoot /var/www/[website folder]
    SSLEngine on
    SSLCertificateFile      /path/to/certificate.cer
    SSLCertificateKeyFile   /path/to/private-key.key
</VirtualHost>
```

IONOS stellt eine Zertifikats- und eine Schlüsseldatei aus, welche bei `SSLCertificateFile` und `SSLCertificateKeyFile` verlinkt werden müssen.

Zum Schluss muss noch die Firewall eingerichtet werden, sodass sie nur Anfragen über Ports zulässt, die wir erlauben. Der Status der bei Ubuntu vorinstallierten Firewall UFW kann mit `sudo ufw status` eingesehen werden. Die verfügbaren Profile können mit `sudo ufw app list` angezeigt werden.

Um sicherzustellen, dass wir weiterhin über SSH auf den Server zugreifen können, geben wir `sudo ufw allow OpenSSH` ein. Danach erlauben wir noch `Apache Full`, um Port 80 und 443 zu öffnen. Dann bleibt nur noch, die Firewall mit `ufw enable` zu aktivieren. Der Status sollte dann so aussehen:

```
root@localhost:~# ufw status
Status: active

To                  Action      From
--                  ------      ----
OpenSSH             ALLOW       Anywhere                  
Apache Full         ALLOW       Anywhere                  
OpenSSH (v6)        ALLOW       Anywhere (v6)             
Apache Full (v6)    ALLOW       Anywhere (v6)
```

Und damit ist der Server samt SSL eingerichtet!

Von dieser Basis aus können wir weitere Funktionen einbauen, zum Beispiel Formulare oder Datenbanken mit PHP. Oder man vertieft seine Kenntnisse von JavaScript und baut eine Web-App.

In jedem Fall ist die Webseite, die wir in diesen beiden Artikeln gebaut, haben ein guter Startpunkt, um die eigenen Fähigkeiten und Online-Präsenz auszubauen.