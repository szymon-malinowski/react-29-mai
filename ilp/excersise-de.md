# Individuelle Learning Phase: State und bedingte Darstellung in einer Mini-Shop-App

## Dein Ziel

Du baust mit React 19 eine kleine, interaktive Produktkarte für einen Onlineshop. Dabei arbeitest du mit `useState`, veränderst State gezielt, beobachtest Re-Rendering und nutzt bedingte Darstellung, um Inhalte abhängig vom aktuellen Zustand ein- oder auszublenden. Außerdem trennst du sauber zwischen Props und State.

## Das brauchst du

- Eine laufende React-19-Entwicklungsumgebung, z. B. mit Vite
- Einen Editor wie VS Code
- Einen Browser mit DevTools
- Grundkenntnisse in JSX und funktionalen Komponenten
- Optional: Konsole im Browser, um Re-Rendering sichtbar zu machen

## Zeitplanung

- 10 Minuten: Projekt anlegen oder bestehendes React-Projekt vorbereiten
- 15 Minuten: Aufgabe 1
- 20 Minuten: Aufgabe 2
- 20 Minuten: Aufgabe 3
- 20 Minuten: Aufgabe 4
- 15 Minuten: Aufgabe 5
- 20 Minuten: Erweiterungsaufgaben oder Reflexion

## Basis-Aufgaben

### Aufgabe 1:

Produktkarte als Ausgangsbasis erstellen  
**Ziel:** Du legst die Grundstruktur der App an und arbeitest erstmals mit Props.  
**Arbeitsauftrag:** Erstelle eine kleine Shop-App mit einer `App`-Komponente und einer `ProductCard`-Komponente. Lege in `App` ein Produktobjekt an, z. B. mit `name`, `price`, `category`, `description` und `initialStock`. Übergib diese Werte als Props an `ProductCard`. Zeige in der Produktkarte mindestens den Produktnamen, den Preis, die Kategorie und einen kurzen Beschreibungstext an.  
**Erwartetes Ergebnis / Soll-Zustand:** Du siehst eine statische Produktkarte im Browser. Die Daten kommen aus `App` per Props in die `ProductCard`.

### Aufgabe 2:

Interaktion mit `useState` einbauen  
**Ziel:** Du nutzt lokalen State, um interaktive Inhalte zu steuern.  
**Arbeitsauftrag:** Ergänze in `ProductCard` zwei State-Werte mit `useState`:  
- `quantity` für die Bestellmenge, Startwert `0`  
- `isFavorite` für den Favoritenstatus, Startwert `false`  

Baue passende Buttons ein:  
- `+` erhöht die Menge um 1  
- `-` verringert die Menge um 1, aber nie unter 0  
- ein Button oder Icon schaltet den Favoritenstatus um  

Zeige den aktuellen Wert von `quantity` und den aktuellen Favoritenstatus sichtbar in der Oberfläche an. Füge zusätzlich ein `console.log` in die Komponente ein, damit du bei jeder State-Änderung das Re-Rendering beobachten kannst.  
**Erwartetes Ergebnis / Soll-Zustand:** Du kannst Menge und Favoritenstatus ändern. Nach jedem Klick aktualisiert sich die Anzeige sofort, und in der Konsole erkennst du das Re-Rendering.

### Aufgabe 3:

Bestand und Bestelllogik über State steuern  
**Ziel:** Du veränderst State gezielt und verknüpfst mehrere Zustände miteinander.  
**Arbeitsauftrag:** Ergänze einen weiteren State-Wert `stock`, der mit `initialStock` startet. Passe die Logik an:  
- Wenn du die Menge erhöhst, soll sich der Lagerbestand um 1 verringern  
- Wenn kein Lagerbestand mehr vorhanden ist, darf die Menge nicht weiter erhöht werden  
- Wenn du die Menge verringerst, darfst du entscheiden, ob der Bestand wieder erhöht wird oder nicht; bleibe dann aber konsequent bei deiner Logik  
- Ergänze einen `Reset`-Button, der Menge, Favoritenstatus und Bestand auf den Startzustand zurücksetzt  

Zeige Bestand und Menge deutlich getrennt an.  
**Erwartetes Ergebnis / Soll-Zustand:** Deine Produktkarte reagiert logisch auf Benutzereingaben. Menge und Bestand bleiben konsistent, und du kannst den Startzustand wiederherstellen.

### Aufgabe 4:

Bedingte Darstellung für Statusmeldungen umsetzen  
**Ziel:** Du nutzt `if / else`, den Ternary Operator und `&&`, um Inhalte abhängig vom State anzuzeigen.  
**Arbeitsauftrag:** Ergänze in deiner Produktkarte mehrere bedingte Anzeigen:  
- Zeige mit einem Ternary Operator entweder `Auf Lager` oder `Ausverkauft` an  
- Zeige mit `&&` eine Warnung wie `Nur noch wenige Artikel verfügbar`, wenn der Bestand klein ist, z. B. bei `stock <= 3`  
- Blende die Bestellbuttons aus oder deaktiviere sie, wenn `stock === 0`  
- Zeige einen Hinweis wie `Du hast dieses Produkt als Favorit markiert`, aber nur wenn `isFavorite === true`  
- Nutze zusätzlich einmal bewusst ein klassisches `if / else`, z. B. für eine Textvariable oder für die Auswahl einer Statusfarbe  

**Erwartetes Ergebnis / Soll-Zustand:** Die Oberfläche passt sich sichtbar an den aktuellen State an. Je nach Bestand, Menge und Favoritenstatus werden unterschiedliche Inhalte gezeigt oder verborgen.

### Aufgabe 5:

Props und State sauber trennen  
**Ziel:** Du erkennst den Unterschied zwischen Props und State in einer kleinen Komponentenstruktur.  
**Arbeitsauftrag:** Teile deine App weiter auf:  
- Erstelle eine Komponente `StockStatus`, die nur den Lagerstatus anzeigt  
- Erstelle eine Komponente `OrderSummary`, die Menge und Gesamtsumme anzeigt  
- Übergib die benötigten Werte als Props an diese Komponenten  
- Lasse den eigentlichen State weiterhin in `ProductCard` liegen  

Ergänze in `OrderSummary` eine berechnete Ausgabe wie `Gesamtpreis: quantity * price`. Achte darauf, dass untergeordnete Komponenten keine eigenen Kopien derselben Daten als State anlegen, wenn Props ausreichen.  
**Erwartetes Ergebnis / Soll-Zustand:** Deine App besteht aus mehreren Komponenten. Produktdaten kommen als Props von oben, lokaler interaktiver Zustand liegt in `ProductCard`, und Kindkomponenten zeigen die Werte über Props an.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Mehrere Produkte mit unabhängigen States

**Ziel:** Du überträgst dein Konzept auf mehrere Instanzen derselben Komponente.  
**Arbeitsauftrag:** Lege in `App` ein Array mit mindestens zwei Produkten an und rendere mehrere `ProductCard`-Komponenten per `map()`. Achte darauf, dass jede Produktkarte ihren eigenen Zustand für Menge, Favorit und Bestand verwaltet.  
**Erwartetes Ergebnis / Soll-Zustand:** Du siehst mehrere Produktkarten. Interaktionen in einer Karte beeinflussen die anderen Karten nicht.

### Erweiterungsaufgabe 2: Detailbereich ein- und ausblenden

**Ziel:** Du steuerst sichtbare UI-Bereiche über State.  
**Arbeitsauftrag:** Ergänze einen State `showDetails` in `ProductCard`. Baue einen Button `Details anzeigen` / `Details ausblenden`. Zeige bei aktivem Detailbereich zusätzliche Informationen wie Beschreibung, Kategorie oder Versandhinweis an. Nutze dafür bedingte Darstellung.  
**Erwartetes Ergebnis / Soll-Zustand:** Du kannst den Detailbereich gezielt ein- und ausblenden. Der Buttontext passt sich dem aktuellen Zustand an.

### Erweiterungsaufgabe 3: Admin-Modus aus der App steuern

**Ziel:** Du kombinierst State in der Elternkomponente mit bedingter Darstellung in Kindkomponenten.  
**Arbeitsauftrag:** Lege in `App` einen State `adminMode` an. Schalte ihn über einen Button um. Übergib `adminMode` als Prop an `ProductCard`. Zeige in der Produktkarte zusätzliche Admin-Elemente nur dann an, wenn `adminMode` aktiv ist, z. B. einen Button zum Auffüllen des Bestands oder eine technische Statusanzeige.  
**Erwartetes Ergebnis / Soll-Zustand:** Du steuerst Teile der Oberfläche aus der Elternkomponente. Die Kindkomponente reagiert auf Props und blendet Admin-Funktionen nur bei Bedarf ein.

## Wichtige Hinweise

- Arbeite schrittweise und teste nach jeder kleinen Änderung im Browser.
- Nutze sprechende State-Namen wie `quantity`, `stock`, `isFavorite` und `showDetails`.
- Verändere State nie direkt, sondern immer über die Setter-Funktionen von `useState`.
- Achte darauf, ob Daten von außen kommen oder in der Komponente selbst verändert werden:
  - Props kommen von außen
  - State gehört der Komponente selbst
- Nutze die Browser-Konsole, um Re-Rendering bewusst zu beobachten.
- Wenn deine UI unübersichtlich wird, teile sie in kleinere Komponenten auf.
- Prüfe bei Buttons, ob bestimmte Aktionen in einem Zustand gesperrt sein sollten, z. B. bei leerem Lager.

## Reflexionsfragen

- Welche Daten in deiner App sind Props, welche sind State?
- An welcher Stelle hast du Re-Rendering besonders deutlich beobachtet?
- Welche Elemente deiner Oberfläche werden bedingt dargestellt und warum?
- Wann war `&&` praktisch, wann war der Ternary Operator passender?
- Warum sollte `StockStatus` die Daten über Props erhalten statt eigenen State dafür anzulegen?
- Welche State-Änderung hatte sichtbare Auswirkungen auf mehrere Teile der Oberfläche?

---