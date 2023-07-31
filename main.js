
// SWITCH-BREAK - LEVEL 2_5

// Schreibe eine Funktion, um Daten über die Bundesländer zu erhalten.

// Assets:
// HTML und CSS befinden sich im Kommentar (s.u.)
// switch
// case
// break
// default

// Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt
// Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt
// Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt
// Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt
// Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt
// Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt
// Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt
// Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt
// Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt
// Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt
// Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt
// Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt
// Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt
// Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt
// Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt
// Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt
// Ein solches Bundesland gibt es in Deutschland nicht.


function check() {
    let bundesland = document.getElementById("bundeslandInfo").value;
    let ausgabe = document.getElementById("bundeslandInfoErgebnis");

    switch (bundesland) {
        case "Baden-Württemberg":
            ausgabe.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            ausgabe.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            ausgabe.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            ausgabe.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            ausgabe.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            ausgabe.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            ausgabe.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            ausgabe.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            ausgabe.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            ausgabe.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            ausgabe.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            ausgabe.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            ausgabe.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            ausgabe.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            ausgabe.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen":
            ausgabe.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            ausgabe.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht.";
            break;
    }
}


// SWITCH-BREAK - LEVEL 2_7

// Schreibe eine Funktion, um die Daten der Selectbox zu erhalten.



// Assets:
// HTML und CSS befinden sich im Kommentarbereich (s.u.)
// switch
// case
// break
// default  ( Extra große Größe )

// function showtxt()


function showtxt() {
    let paket = document.getElementById("mylist").value;
    let ergebnis = document.getElementById("masse");
    switch (paket) {
        case "0":
            ergebnis.innerHTML = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm <br>B: 7 - 12,5 cm <br>H: bis 1 cm"
            break;
        case "1":
            ergebnis.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm"
            break;
        case "2":
            ergebnis.innerHTML = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        case "3":
            ergebnis.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        default:
            ergebnis.innerHTML = "<b>Extra große Größe</b>"
    }
}