﻿"use strict";

var	LangDef = {
/*
	LangDef contains language specific texts for
		HTMl element hover title attributes ("trt")
		HTML element text content ("trh"),
		programmatic access ("trx") which is not directly linked to a specific HTML tag

		The last group ("trx") is speciofically intended to be used for lesson titles and lesson text.
		It can contain MARK DOWN syntax and supports some additional proprietory syntax extensions
		which are similar to MEDIAWIKI syntax:
			IMG:[[path|attributes]] - inserts an image (floating right), attributes are added to the style oif the <img> tag
			LINK:[[URL|label]] - links to A web URL
			WP:[[name|label]] - links to the Wikipedia in the configured language
			DEMO:[[demo-ID|label]] - produces a button to invoke a DEMO script defined in Lessons.js
*/
	trt : {											//============================ "title" attributes to be added to a tag with the given "id"

		createdBy: {
			en: "created by Gero Scholz (gero.scholz(at)gmail.com)",
			de: "enwickelt von Gero Scholz (gero.scholz/at)gmail.com",
			es: "",
		},
													// detector control area
		detector: {
			en: "settings for tone detection",
			de: "Einstellungen für die Tonerkennung (Detektor)",
			es: "",
		},
		reference: {
			en: "reference frequency (in Hz) for note 'a', default=443 Hz",
			de: "Bezugsfrequenz für den Kammerton 'a', Default=443 Hz",
			es: "",
		},
		transposition: {
			en: "transposition used for display of note names; default = 'C notation' = no transposition",
			de: "verwendete Transposition für die Anzeige von Notennnamen; default = 'C notation' = keine Transposition",
			es: "",
		},
		pitch: {
			en: "detected frequency",
			de: "erkannte Frequenz",
			es: "",
		},
		rmsbg: {
			en: "signal strenth and peak value (0..100)",
			de: "Signalstärke und Spitzenwert (0..100)",
			es: "",
		},
		rms: {
			en: "signal strenth and peak value (0..100)",
			de: "Signalstärke und Spitzenwert (0..100)",
			es: "",
		},
		hz: {
			en: "Hertz (periods per second)",
			de: "Hertz (Schwingungen pro Sekunde)",
			es: "Hertz",
		},
		announceNoteNames: {
			en: "after a tone is stable for some time: speak its note name",
			de: "wenn ein Ton für einige Zeit stabil ist: Sage den Notennamen an",
			es: "",
		},
		// detected note display area
		detectedNote: {
			en: "name of the detected note",
			de: "Name der erkannten Note",
			es: "",
		},

		// master control area
		microInput: {
			en: "switch microphone on/off",
			de: "Mikrofon ein-/ausschalten",
			es: "",
		},
		waveForm: {
			en: "show wave form (oscilloscope)",
			de: "Wellenform anzeigen (Oszilloskop)",
			es: "",
		},
		sequence: {
			en: "show time line",
			de: "Zeitdiagramm anzeigen",
			es: "",
		},
		soundGen: {
			en: "show sound generator (oscillator)",
			de: "Tongenerator anzeigen (Oszillator)",
			es: "",
		},

	},

	trh : {											//============================ HTML content to be added to a tag with the given "id"

		intro: {
			en: "Tunator wants to access your microphone.<p/>Make sure your browser accepts this.<p/>Then click to accept or press any key ...",
			de: "Tunator möchte das Mikrofon benutzen.<p/>Stelle sicher, dass der Browser den Zugriff erlaubt.<p/>Klicke dann hier oder drücke irgendeine Taste ...",
			es : "",
		},


		chooseLesson: {
			en: "Choose a lesson!",
			de: "Wähle eine Lektion aus!",
			es: "",
		},
		peak: {
			en: "peak",
			de: "Peak",
			es: "",
		},
		hz: {
			en: "Hz",
			de: "Hz",
			es: "Hz",
		},
		announceNoteNames: {
			en: "tell note",
			de: "Note sagen",
			es: "",
		},
	},

	trx : {											//============================ text content to be associated with the given "id"

		"selectLesson": {
			en: "select lesson",
			de: "Lektion wählen",
			es: "",
		},

		"noLessonFound": {
			en: "There is no lesson with this title",
			de: "Es gibt keine Lektion mit diesem Namen",
			es: "",
		},

		"lesson-title-TUNATOR": {					// ##########################################################################################################################################
			en: "Getting started with <i>Tunator</i>",
			de: "Einführung in <i>Tunator</i>",
			es: "",
		},
		"lesson-TUNATOR": {
 /*-----------------------------------------------------------------------------------------*/   en:`

*Tunator* is about intonation - the art of perfect pitch.

IMG[[https://image.freepik.com/vektoren-kostenlos/classical-piano-gezeichnet_1058-98.jpg|width:300px]]
On a well-tuned piano you simply press a key
and you will hear the correct sound. But with many instruments - and with your singing voice - things are more complicated.
How do you know what note you are singing? Is your pitch "correct" or is it a little bit "off"?
DEMO[[wanderingPitch|Wandering pitch - where is the correct **C** ?]]

When notes sound together they form **chords**. Chords can be intonated differently. DEMO[[chord-3-III|Click and listen carefully!]]

* The first chord you hear  is *chromatic*. The frequency ratios between the lower an the higher tones are §1 : 1.26 : 1.498§.
* The second chord played is *perfect* or *pure* which means that the ratios are based on simple integer numbers: §4 : 5 : 6§.

Mathematically §1.26§ is quite close to §5/4 (1.25)§ but when listening carefully you can feel this difference.
The chromatic chord has small vibrations, the perfect chord sounds clearer and more stable.
It is a matter of listening habits and taste which one you prefer.
Read more on WP[[Scale_(music)|musical scale systems]] and WP[[Interval (music)|intervals]] if you like...

### Now sing or play a tone!

If you see a *large letter* with the name of the note in the **empty gray box** everything works fine.
Next to it you also see the musical representation of the note within the staff lines.
Try to keep the note stable for two seconds and check the red *peak level* in the **green box**.
It should be at 20% or more of its range. If it is smaller: sing louder or move closer to the microphone.

*If you do not see a large note letter*

* You must allow this website to access your microphone. Check your browser settings!
* Your browser must support the media API. Make sure that you are using the latest version of your browser.
* On older Apple devices (like ipad 2) the browser (Safari) does not support the media API - sorry.
* The microphone of your device must be active and its signal must be strong enough.
A certain signal strength is necessary for successful detection.
Check your microphone driver settings if you do not get a signal at all or if your signal is too weak.

### Begin with the first lesson!
*Tunator* offers a number of different **lessons**. Lessons can be selected in the *gray area* at the screen top.
Or simply press the button below to start the first lesson.
`/*-----------------------------------------------------------------------------------------*/ , de:`

Bei *Tunator* geht es um Intonation - die Kunst der perfekten Tonhöhe.

IMG[[https://image.freepik.com/vektoren-kostenlos/classical-piano-gezeichnet_1058-98.jpg|width:300px]]
Bei einem gut gestimmten Klavier drückt man einfach eine Taste und es erklingt der richtige Ton.
Aber bei vielen Instrumenten - und bei der Singstimme - ist es komplizierter.
Woher weißt du, welche Note du singst? Ist die Tonhöhe "richtig" oder liegst du ein wenig "daneben"?
DEMO[[wanderingPitch|Tonhöhe auf Wanderschaft - wo ist das richtige **C** ?]]

Wenn Noten zusammen erklingen, bilden sie **Akkorde**. Akkorde können unterschiedlich intoniert werden.
DEMO[[chord-3-III|Klick und hör genau zu!]]

* Der erste Akkord, den man hört, ist *chromatisch*. Die Frequenzverhältnisse zwischen den niedrigeren und höheren Tönen sind §1 : 1.26 : 1.498§.
* Der zweite Akkord ist *perfekt* oder *rein*, was bedeutet, dass die Verhältnisse auf einfachen Ganzzahlen basieren: §4 : 5 : 6§.

Mathematisch gesehen liegt §1.26§ ziemlich nahe an §5/4 (1.25)§, aber wenn man genau hinhört, kann man dennoch den Unterschied spüren.
Der chromatische Akkord hat kleine Vibrationen, der perfekte Akkord klingt klarer und stabiler.
Es kommt auf die Hörgewohnheiten und den Geschmack an, welche Variante du bevorzugst.
Lies mehr über WP[[Tonleiter|Tonleitern]] und WP[[Intervall (Musik)#Stimmungen|Intervalle]] wenn du es genauer wissen willst...

### Jetzt sing oder spiel einen Ton!

Wenn ein *großer Buchstabe* mit dem Namen der Note in der **leeren grauen Box** erscheint, funktioniert alles gut.
Daneben siehst du auch die musikalische Darstellung der Note innerhalb der Notenlinien.
Versuche die Note zwei Sekunden lang stabil zu halten und überprüfe den roten Balken mit dem *Spitzenwert der Lautstärke*
in der **grünen Box**. Er sollte bei 20% oder mehr des Anzeigebereichs liegen.
Wenn die Zahl kleiner ist: Sing lauter oder nähere dich dem Mikrofon.

*Wenn kein Notenbuchstabe erscheint ...*

* Du musst dieser Website den Zugriff auf das Mikrofon gestatten. Überprüfe die Browsereinstellungen!
* Dein Browser muss das Media-API unterstützen. Stelle sicher, dass du die neueste Version deines Browsers verwendest.
* Auf älteren Apple-Geräten (wie ipad 2) unterstützt der Browser (Safari) das Media-API nicht - sorry.
* Das Mikrofon deines Gerätes muss aktiv sein und das Signal muss stark genug sein.
Für eine erfolgreiche Erkennung ist eine gewisse Mindestlautstärke nötig.
Überprüfe die Mikrofon-Treibereinstellungen, wenn du überhaupt kein Signal erhältst oder wenn es zu schwach ist.

### Beginne mit der ersten Lektion!
*Tunator* bietet eine Reihe von verschiedenen **Lektionen**. Die Lektionen können im *grauen Bereich* am oberen Bildschirmrand ausgewählt werden.
Oder drücke einfach den nachfolgenden Knopf, um die erste Lektion zu starten.

`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-WHAT-NOTE-1": {				// ##########################################################################################################################################
			en: "1. What note is it?",
			de: "1. Welche Note ist das?",
			es: "",
		},
		"lesson-WHAT-NOTE-1": {
 /*-----------------------------------------------------------------------------------------*/   en:`

### Sing a tone, try to find your "personal" tone.

IMG[[img/male-singer-portrait-silhouette.jpg|width:300px]]
Your personal tone is the most "natural" tone that your body wants to produce.
Raise its pitch and lower it so that you feel the "center" of your naturally preferred tone.

*Tunator* detects its pitch and displays the name of the correspondig note in the gray area.
**Remember the name of your personal tone**.

You should also think of a song that starts exactly with that tone.
Thinking of that song will help you to find your personal tone again and again.

* Is your personal tone a "Bb/A#"? Then you may find it easy to sing the
LINK[[https://www.youtube.com/watch?v=LQCooL_q91k&start=65|Prisoner's Choir of Nabucco]].
It begins with the sequence **§a#-g#-f#-c#-c#'-c#'§**. But these are rather strange notes...
You better look for a different song ;-)
* Maybe your personal tone is an "A". Then
LINK[[https://www.youtube.com/watch?v=A_MjCqQoLLA&start=55|Hey Jude (from The Beatles)]]
might become your song. The second (*heavy*) note is an "A". And there is an additional advantage: it starts with
a "C" - which will help you to find other notes via intervals.

After you stop singing you will still see the note name (in gray color).
*Right now we are not dealing with subtle differences in pitch. We are happy if the letter does not flicker.*
*This means that you are closer than 50 ct (= 50% of a semitone) to the ideal pitch of your note.*

### Sing, whistle, blow different tones quite loud. Then calm down, close your eyes and try to reproduce your "natural tone".
Have you been successful? Did you think of "your" song beginning?
Most people do not recognize absolute pitch (see this LINK[[https://www.sciencedaily.com/releases/2013/06/130611122011.htm|article]]).

If you tell someone to sing a **C** he will not know what to do.
But if you are able to reproduce one single tone and you know its note name you have a stable platform for the identification
of other tones because you can use intervals that refer to your principal tone.

Many people have a basic understanding of intervals (relative pitch). Also, recognizing intervals can be trained.
Let us start from your personal tone and sing a **C**

### Start with your principal tone and change pitch until you have a **C**
Learn to understand the interval which takes you from you personal tone to the **C**
If your naturally preferred tone was an **A** for example, you must go up a minor third from there to reach the 'c'.


### Try to produce a stable **C**. Avoid **C#** or **H** (**B** in English notation).

Again, try several times with closed eyes. Can you reproduce the **C** even if you made some wild noise in between?

### Click the checkbox in the green area which is called "tell me" and sing again.

If you keep the note stable enough over some time (=for more than one second) the speakers will tell you the name
of the note. You should use (open) headphones from here on to avoid acoustic feed-back.

### Practice with closed eyes until you can sing (or play) **C - E - G**  ( = a simple major triple chord)
You should *hear all three note names spoken.* If you cannot hear a note's name do not open your eyes.
Instead try to shift your pitch a little bit up or down until you hear the name being spoken. Remember such corrections.

### Aim to produce the same three notes in other sequences, like **G - E - C** or **E - G - C**
`/*-----------------------------------------------------------------------------------------*/ , de:`
### Sing einen Ton, versuche deinen "persönlichen" Ton zu finden.

IMG[[img/male-singer-portrait-silhouette.jpg|width:300px]]
Dein persönlicher Ton ist der "natürlichste" Ton, den dein Körper erzeugen will.
Erhöhe und senke die Tonhöhe mehrfach, bis du das "Zentrum" deines natürlichsten (bevorzugten) Tons spürst.

*Tunator* erkennt die Tonhöhe und zeigt den Namen der entsprechenden Note im grauen Bereich an.
**Merke dir den Namen deines persönlichen Tons**.

Du solltest dir auch einen Song vorstellen, der genau mit diesem Ton beginnt.
Die Erinnerung an diesen Song wird dir helfen, deinen persönlichen Ton immer wieder zu finden.

* Ist dein persönlicher Ton ein "Bb/A#"? Dann ist es vielleicht einfach für dich, den Anfang des
LINK[[https://www.youtube.com/watch?v=LQCooL_q91k&start=65|Gefangenenchors aus Verdis Nabucco]]] zu singen.
Er beginnt mit der Tonfolge **§a#-g#-f#-c#-c#'-c#'§**. Aber das sind ziemlich seltsame Noten, oder?
Du suchst vielleicht besser nach einem anderen Lied ;-)
* Ist dein persönlicher Ton ein "A"? Dann könnte
LINK[[https://www.youtube.com/watch?v=A_MjCqQoLLA&start=55|Hey Jude (von den Beatles)]]
dein Lied werden. Die zweite (*schwere*) Note ist ein "A". Und es gibt noch einen weiteren Vorteil:
Der Song beginnt mit einem "C" - das dir helfen wird, andere Noten über Intervalle zu finden.

Nachdem du aufgehört hast zu singen, siehst du immer noch den Namen der Note (in grauer Farbe).
*Im Moment befassen wir uns nicht mit subtilen Unterschieden in der Tonhöhe. Wir freuen uns, wenn der Notenname nicht flackert.*
*Das bedeutet, dass du dich näher als 50 ct (= 50% eines Halbtons) an der idealen Tonhöhe deiner naürlichen Note befindest.*

### Sing, pfeife oder spiele verschiedene Töne ganz laut. Dann beruhige dich, schließe die  Augen und versuche, wieder deinen "natürlichen Ton" zu singen.
Warst du erfolgreich? Hast du an "dein" Lied gedacht?
Die meisten Menschen erkennen die absolute Tonhöhe nicht (siehe diesen
LINK[[https://www.sciencedaily.com/releases/2013/06/130611122011.htm|Artikel]]).

Wenn du jemandem sagst, dass er ein **C** singen soll, wird er nicht wissen, was er tun soll.
Aber wenn du in der Lage bist, einen einzelnen Ton zu reproduzieren und den Namen der Note kennst, hast du
eine stabile Plattform für die Identifizierung von anderen Tönen, weil du Intervalle verwenden kannst,
die sich auf deinen persönlichen Ton beziehen.

Viele Menschen haben ein grundlegendes Verständnis von Intervallen (relative Tonhöhe).
Auch kann das Erkennen von Intervallen trainiert werden.
Lass uns von deinem persönlichen Ton ausgehend ein **C** singen.

### Beginne mit deinem persönlichen Ton und ändere die Höhe, bis du ein **C** hast.
Lerne das Intervall zu verstehen, das dich von deinem persönlichen Ton zum **C** führt.
Wenn dein natürlich bevorzugter Ton zum Beispiel ein **A** war, musst du von dort aus eine kleine Terz nach oben gehen,
um das **C** zu erreichen.

### Versuche, ein stabiles **C** zu erzeugen. Vermeide das **C#** oder das **H** (**B** in englischer Schreibweise).

Versuche es mehrmals mit geschlossenen Augen. Kannst du das **C** reproduzieren,
auch wenn du zwischen durch wilden Lärm produziert hast?

### Klicke auf das Kontrollkästchen im grünen Bereich, das "Note sagen" heißt, und singe erneut.

Wenn du die Note über einen längeren Zeitraum (=für mehr als eine Sekunde) stabil genug hältst,
wird ihr Name über den Lautsprecher angesagt.
Du solltest von nun an (offene) Kopfhörer verwenden, um akustische Rückkopplungen zu vermeiden.

### Übe mit geschlossenen Augen, bis du einen einfachen Dur-Dreiklang singen kannst: **C - E - G** .
Du solltest *alle drei gesprochenen Notennamen hören.* Wenn du den Namen einer bestimmten Note nicht hören kannst,
öffne nicht die Augen. Versuche stattdessen, deine Tonhöhe ein wenig nach oben oder unten zu verschieben, bis du den Namen hörst.
Präge dir solche Korrekturen gut ein.

### Dein Ziel ist es, die gleichen drei Noten in anderer Reihenfolge zu erzeugen, wie etwa **G - E - C** oder **E - G - C**.
`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-WHAT-NOTE-2": {				// ##########################################################################################################################################
			en: "2. What note is it, precisely?",
			de: "2. Um welche Note handelt es sich genau?",
			es: "",
		},
		"lesson-WHAT-NOTE-2": {
 /*-----------------------------------------------------------------------------------------*/   en:`
### Play or sing your preferred tone!
Below the note name in the gray box you now see the deviation (in cents) from the correct pitch.
The numbers can change quite fast. It is not easy to keep a tone absolutely stable.

### Click on the timeline symbol (third icon in the menu)
You will see a large grid in the center of the screen which shows how your pitch changes over time.
Make another sound and you will see the timeline move.

Note the small box at the right end of the menu. It allows you to change the vertical resolution
of the timeline and the degree of details ist shows. By default it highlights the current note and shows
a thick red line which is a smoothed average value of your pitch. You can see more details or you can simplify
the presentation.

You can resize the window height of the timeline grid by dragging its *bottom right corner* up or down.

### Analyse your tone!

Did you start your note with a "t" or stop it with your tongue?
Try to sing without attack (i.e. only on the air, without using your tongue at the beginning)
and do not stop your note with the tongue. Just take your breath away and keep pitch.

IMG[[img/glitches.png| ]]
The example at the right shows the note "c" being played (major gray block with thick red line and blue dashes).
The blue dashes show the exact pitch every 50 msec. The thick red line is a smoothed average. It follows lazily the blue dashes.

* Initial glitch: The note was started too low: effectively an "h" ("b" in English) was produced instead of a "c".
* The pitch entered the note from its bottom (lower part of the gray box, -50 cent .. -10 cent).
* The pitch stabilized near the center. It was a little too low in general (-10 cents). Now the blue dashes are above
and below the red line which is almost horizontal.
* Finally the pitch jumped up by ~ 60 cents so that even the next higher note was touched for a very short moment (thin gray area
at c# level).
* The note ended above its correct pitch, close to the next higher note. Probably the tension of mouth, lips or breast
had increased while the flow of air stopped.
* If you see glitches at the beginning of your note: Create an imagination of the note before you start to produce the tone!
* If you see glitches at the end of your note: Take away breath without altering the attitude of your lips or chest.

### Produce a sequence of the same note!
IMG[[img/sameTone.png| ]]
Can you do better than this example?
<div style="clear:both"></div>

### Play a chord sequence up and down, like c - e - g - e - c !
IMG[[img/ceg-1.png| ]]
Here is another example:

* The first note was started without sufficient tension (initial bottom glitch)
* Altough the "e" looks very low the <i>relative</i> pitch (interval: major third) was not so bad because the initial note
had already been significantly too low.
* The "g" looks "ok" - although it is more like the peak of a mountain than a stable platform. But the interval from the
very low "e" to the average "g" was too large.
* Good news with the "e" on the downwards path: it is exactly the same (wrong) "e" as its brother in the climbing phase.
The short red dot at the beginning of the note is not so crucial. Small transitory glitches can not always be avoided (when singing).
* The final note is still too low but a little bit better than the initial "c". It often happens that in a sequence like
"c-e-g-e-c" the final note is slightly higher than the first note. <i>Tunator</i> shows you what happened and makes you aware
of such typical problems.

### Coordinate volume and pitch
Select "dynamic" mode in the timeline settings and use large note spacing, e.g. 100.
The width of the red line with the (smoothed) pitch now shows the volume. At maximum volume
the red line fills the entire space of a note, at minimum volume it is only a thin line.

IMG[[img/pitchdyn.png|]]
Sing a note and change the volume from pp to ff and back again. Not always will your result look as perfectly
as the image on the right. You'll be amazed at how the pitch changes greatly without you intending to.
**Try to keep constant pitch from piano to forte and back to pp!**

Sing or play a chromatic tone sequence in a healthy forte (about 50-70% signal level).
Are there tones where the red line becomes thicker or thinner? Wind instruments often have
a different amount of resistence for differing tones. Some tones respond less well, others "burst
out quickly". If you know your instrument, you can take countermeasures.
`/*-----------------------------------------------------------------------------------------*/ , de:`
### Spiele oder singe deinen bevorzugten Ton!
Unter dem Notennamen im grauen Kästchen siehst du nun auch Abweichung (in Cent) von der richtigen Tonhöhe.
Die Zahlen können sich sehr schnell ändern. Es ist nicht einfach, einen Ton absolut stabil zu halten.

### Klicke auf das Zeitleisten-Icon (drittes Symbol im Menü).
In der Mitte des Bildschirms erscheint ein großes Gitter, das zeigt, wie sich deine Tonhöhe im Laufe der Zeit ändert.
Erzeuge einen weiteren Klang und du wirst sehen, wie sich die Zeitleiste bewegt.

Beachte das kleine Kästchen am rechten Ende des Menüs. Es erlaubt dir, die vertikale Auflösung und den
Detaillierungsgrad der Darstellung zu beeinflussen. Standardmäßig wird die aktuelle Note hervorgehoben und eine
dicke rote Linie zeigt den geglätteten Durchschnittswert der Tonhöhe. Du kannst mehr Details sehen oder
die Darstellung vereinfachen.

Du kannst die Fensterhöhe des Zeitleiste ändern, indem du die *rechte untere Ecke* nach oben oder unten ziehst.

### Analysiere deinen Ton!

Hast du deine Note mit einem "t" begonnen oder mit der Zunge gestoppt?
Versuchen Sie, ohne Anstoß zu singen (d.h. nur mit der Luft, ohne die Zunge am Anfang zu benutzen).
und beende die Note ohne Zunge. Nimm einfach den Atem weg und halte die Tonhöhe.

IMG[[img/glitches.png| ]]
Das Beispiel rechts zeigt die gespielte Note "c" (großer grauer Block mit dicker roter Linie und blauen Strichen).
Die blauen Striche zeigen alle 50 ms die genaue Tonhöhe an. Die dicke rote Linie ist ein geglätteter Durchschnitt.
Es folgt etwas verzögert den blauen Strichen.

* Erste Auffälligkeit: Die Note war zu tief angesetzt: Es wurde praktisch ein "h" ("b" auf Englisch) statt eines "c" produziert.
* Die Anfang ging von unten in die Note hinein (unterer Teil des grauen Kastens, -50 Cent... -10 Cent).
* Die Tonhöhe hat sich in der Nähe der Mitte stabilisiert. Sie war im Allgemeinen etwas zu niedrig (-10 Cent).
Danach verlaufen die blauen Striche oberhalb und unterhalb der roten Linie, die fast horizontal verläuft.
* Schließlich sprang die Tonhöhe um ~ 60 Cent nach oben, so dass auch die nächsthöhere Note für einen sehr kurzen Moment erklang
(dünne Grauzone auf c#-Ebene).
* Die Note endete oberhalb ihrer korrekten Tonhöhe, nahe der nächsthöheren Note. Wahrscheinlich hatte sich die Spannung von Mund,
Lippen oder Zwerchfell erhöht, während der Luftstrom stoppte.
* Wenn du zu Beginn einer Note Probleme erkennst: Bilde dir eine Vorstellung von der Note, bevor du beginnst, den Ton zu erzeugen!
* Wenn du am Ende einer Note Probleme siehst: Nimm den Atem weg, ohne die Haltung der Lippen oder des Körpers zu verändern.

### Produziere  eine Sequenz derselben Note!
IMG[[img/sameTone.png| ]]
Kannst du es besser als dieses Beispiel?
<div style="clear:both"></div>

### Spiele eine Akkordfolge auf- und abwärts, wie c - e - e - g - e - e - c !
IMG[[img/ceg-1.png| ]]
Hier ist ein weiteres Beispiel:

* Die erste Note wurde ohne ausreichende Spannung gestartet (anfänglich zu tief).
* Obwohl das "e" sehr tief aussieht, war die <i>relative</i> Tonhöhe (Intervall: große Terz) nicht so schlecht, denn die ursprüngliche Note
war bereits deutlich zu niedrig.
* Das "g" sieht "ok" aus - obwohl es eher wie der Gipfel eines Berges als wie eine stabile Plattform wirkt. Aber das Intervall von dem
sehr niedrigen "e" zum durchschnittlichen "g" war zu groß.
* Gute Nachrichten für das "e" auf dem Weg nach unten: Es ist genau das gleiche (falsche) "e" wie sein Bruder in der ansteigenden Phrase.
Der kurze rote Punkt am Anfang der Note ist nicht so entscheidend. Kleine vorübergehende Störungen lassen sich nicht immer vermeiden (beim Singen).
* Die letzte Note ist immer noch zu niedrig, aber etwas besser als das anfängliche "c". Es kommt oft vor, dass in einer Sequenz wie dieser
"c-e-g-g-e-c" die letzte Note etwas höher ist als die erste Note. <i>Tunator</i> zeigt dir, was passiert ist, damit du solche wiederkehrenden
Probleme erkennen und beheben kannst.

### Laustärke und Tonhöhe koordinieren
Wähle den Modus "dynamic" in der Zeitleistendarstellug aus und stelle große Notenabstände ein, z.B. 100.
Die Breite der roten Linie mit der (geglätteten) Tonhöhe zeigt jetzt die Lautstärke an. Bei maximaler Lautstärke
füllt die rote Linie den gesamten Raum einer Note aus, bei minimaler Lautstärke ist sie nur ein dünner Strich.

IMG[[img/pitchdyn.png|]]
Singe einen Ton und verändere die Lautstärke von pp bis ff und wieder zurück. Nicht immer wird dein Ergebnis
so perfekt sein wie in dem Bild rechts. Du wirst erstaunt sein, wie stark sich deine Tonhöhe ändert,
ohne dass du es beabsichtigst. Versuche von p - f (und zurück zu pp) annähernd die Tonhöhe konstant zu halten.

Singe oder spiele eine chromatische Tonfolge in einem gesunden forte (ca. 50-70% Signalpegel).
Gibt es Töne, bei denen die rote Linie dicker oder dünner wird? Blasinstrumente bieten bei
unterschiedlichen Tönen unterschiedlich viel Widerstand. Manche Töne sprechen weniger gut an, andere "platzen
schnell heraus". Wenn du dien Instrument kennst, kannst du entgegensteuern.
`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-TRANSPOSITION": {				// ##########################################################################################################################################
			en: "3. The mysteries of transposition",
			de: "3. Das Geheimnis des Transponierens",
			es: "",
		},
		"lesson-TRANSPOSITION": {
 /*-----------------------------------------------------------------------------------------*/   en:`

If you sing a tone with ~ 130 Hz *Tunator* will tell you that it is a "c". Go ahead and try it out!
A tone of ~ 260 Hz would also be detected as a "c", but one octave higher.

If a composer wants an oboe to play a "c" he will put a black oval into the THIRD SPACE of a standard note system.
Or he might place the oval ON THE FIRST LINE BELOW the system if he wants the "c" to be one octave lower.
Musicians all over the world have learnt that an oval in the the third space or on the first line below the system
is called a "c". If an oboist sees a "c" he will use a certain tension of his lips (embrochure)
and a certain finger setting and if everything is fine his instrument will produce a frequency of ~260Hz (or ~520 Hz).

If an oboe and a trumpet player read and play the same written "c", however, their instruments WILL NOT PRODUCE THE SAME TONE.
What comes out of the trumpet will be **two semitones lower**. This means that the trumpet produces a frequency
of only ~230 Hz. A trumpet is said to be a "transposing" instrument. The transposition is defined
as THE DIFFERENCE IN SEMITONES between the sound that comes out of the instrument and the note
which the player reads and "plays". If the notated note is higher than the sound an instrument transposes downwards.
If the sound is higher it transposes upwards.

Luckily, many instruments (like a harp, a violin, a piano, an oboe, a flute or a guitar) are non-transposing.
Formally speaking you could say that they have a transposition of 0 semitones. Which means that their sound
corresponds exactly to the written notes.

A typical Bb-trumpet has a transposition of -2, a french horn has -7, a saxophone could have -9 or -2 depending on
its type. Very high instruments like the piccolo flute transpose by +12 semitones. Often a note name is used to describe
the transposition characteristic of a an instrument. The note used corresponds to the INTERVAL starting from C.
Thus, a "c" means no transposition, a "Bb" means -2 semitones, an "F" means -7 semitones, an "Eb" is -9.

If a composer wants the same physical frequency to be produced by instruments with different transpositions he must
COMPENSATE for their individual transpositions.
This means, that he has to write a "d" for a Bb-instrument (like the trumpet) and a "g" for "F"-instruments
like the English Horn or the French Horn. In addition he could use different "clefs" -- but that is another story.

If a conductor asks his trumpet players to play a "c"-sound they will have to think of a written "d" to produce the
expected tone. If some of the players are in doubt what to do the conductor might tell them: "play your notated "d"!".

### Now change the transposition of *Tunator* and get confused ;-)
The green box next to the detected note (which currently shows "C notation") allows you to change the transposition.
Select "Bb notation" and sing a tone with <b>~ 260 Hz</b>. Although you are singing the same tone as before
the note will now be called a "d" by *Tunator*.

If you are playing a transposing instrument *you should use the transposition settings*. Thus you tell *Tunator*
to name the notes in the "language" you are familiar with.

### Base tone of an instrument
Wind instruments have a so-called base tone. This is the frequency that corresponds to the length of the
instrument (all flaps closed, no valves activated). Sometimes (but not always)
the natural name of the note for this frequency defines the transposition of that instrument, i.e. the base
note is called "c" in scores for this instrument. For example a trumpet being played without
any buttons pressed produces a "Bb". This note is written as a "c" in music scores for trumpets.

A score for a french horn is written in "F" and indeed, the longer part of a double french horn
has an "F" as its base tone. The shorter part, however, has a "Bb" as its base tone. But horn players are trained
to read in "F", regardless which part of their double horn they are using. In fact they often switch between the
two parts of their instrument because some tones sound more beautifully on one of them.

### Notations with the "wrong" transposition
Sometimes a musician will be confronted with a score that does not match his reading habits.
A clarinet player might look at a score for "clarinet in A" but he wants to play with his standard Bb-clarinet.
The composer wrote the score for A-clarinet (transposition = -3) so he used a "G" when he wanted the sound of an "E".
On a "Bb-clarinet" playing a "G" would produce an "F", however. So the player has to subtract one semitone
from all written notes while he is playing. The ability to do this is called "transposing".
Being able to transpose is quite useful for some instruments, most prominently for french horn players
as (for historical reasons) they often get notes in various transpositions. On the other hand, a flute player
will probably never have the necessity to transpose in his whole life because the flute is a "C"-instrument
and all notes for flute a written in "c"-notation.

### Reference frequency
Regardless of the transposition setting, you can set the basic setpoint frequency of the chamber tone ("a")
from its default value (443 Hz) to another value, such as 440 Hz. Then all tones will be a few cents lower.

`/*-----------------------------------------------------------------------------------------*/ , de:`
Wenn du einen Ton mit ~ 130 Hz singst, wird *Tunator* dir sagen, dass es ein "c" ist. Probiere es aus!
Ein Ton von ~ 260 Hz würde auch als "c" erkannt werden, aber eine Oktave höher.

Wenn ein Komponist möchte, dass eine Oboe ein "c" spielt, setzt er ein schwarzes Oval in den DRITTEN RAUM eines Standard-Noten-Systems.
Oder er platziert das Oval auf der ersten Linie unter dem System, wenn er möchte, dass das "c" eine Oktave tiefer liegt.
Musiker auf der ganzen Welt haben gelernt, dass ein Oval im dritten Raum oder in der ersten Linie unter dem System ein "c" ist.
Wenn ein Oboist ein "c" sieht, verwendet er eine bestimmte Spannung seiner Lippen (Ansatz) und eine bestimmte
Fingereinstellung; wenn alles in Ordnung ist, erzeugt sein Instrument eine Frequenz von ~260Hz (oder ~520 Hz).

Wenn eine Oboe und ein Trompeter jedoch das gleiche geschriebene "c" lesen und spielen,
werden ihre Instrumente NICHT den gleichen Ton erzeugen.
Was aus der Trompete kommt, ist **zwei Halbtöne tiefer**. Das bedeutet, dass die Trompete eine Frequenz von nur ~230 Hz erzeugt.
Eine Trompete gilt daher als "transponierendes" Instrument. Die Transponierung ist definiert als DIE DIFFERENZ IN HALBTÖNEN
zwischen dem Klang, der aus dem Instrument kommt, und der Note, die der Spieler liest und "spielt".
Wenn die notierte Note höher ist als der Klang, transponiert ein Instrument abwärts.
Wenn der Klang höher ist, transponiert es aufwärts.

Glücklicherweise sind viele Instrumente (wie eine Harfe, eine Geige, ein Klavier, eine Oboe, eine Flöte oder eine Gitarre)
nicht transponierend. Formal könnte man sagen, dass sie eine Transposition von 0 Halbtönen haben. Was bedeutet, dass ihr Klang
genau dem schriftlich notierten Ton entspricht.

Eine typische Bb-Trompete hat eine Transposition von -2, ein Waldhorn von -7, ein Saxophon von -9 oder -2, je nach Typ.
Sehr hohe Instrumente wie die Piccoloflöte transponieren um +12 Halbtöne. Oft wird ein Notenname verwendet, um die
Transpostionscharakteristik eines Instruments zu beschreiben. Die verwendete Note entspricht dem INTERVAL ab C.
Ein "c" bedeutet also keine Transposition, ein "Bb" bedeutet -2 Halbtöne, ein "F" bedeutet -7 Halbtöne, ein "Eb" ist -9.

Wenn ein Komponist wünscht, dass die gleiche physikalische Frequenz von Instrumenten mit unterschiedlichen Transpositionen
erzeugt werden soll, muss er ihre individuellen Transpositionen kompensieren.
Das bedeutet, dass er ein "d" für ein Bb-Instrument (wie die Trompete) und ein "g" für "F"-Instrumente schreiben muss
wie das Englischhorn oder das Waldhorn. Alternativ könnte er verschiedene "Schlüssel" verwenden - aber das ist eine andere Geschichte.

Wenn ein Dirigent seine Trompeter bittet, ein "klingendes c" zu spielen, müssen sie sich ein geschriebenes "d" vorstellen,
um den erwarteten Ton zu produzieren. Wenn einige der Spieler im Zweifel sind, was sie tun sollen,
könnte der Dirigent ihnen sagen: "Spielt euer notiertes "d"!".

### Ändere jetzt die Transposition von *Tunator* und lass dich verwirren ;-)
Das grüne Kästchen neben der erkannten Note (das derzeit "C-Notation" anzeigt) ermöglicht es dir, die Transposition zu ändern.
Wähle die "B-Notation" und singe einen Ton mit <b>~ 260 Hz</b>. Obwohl du den gleichen Ton wie vorher singst, wird die Note
jetzt von *Tunator* als "d" bezeichnet.

Wenn du ein transponierendes Instrument spielst, *solltest du ab jetzt die Transpositionseinstellungen* verwenden.
So sagst du *Tunator*, dass er die Noten der "Sprache" benennen soll, die dir vertraut ist.

### Grundton eines Instruments
Blasinstrumente haben einen sogenannten Grundton. Das ist die Frequenz, die der Länge des
Instruments (bei geschlossenen Klappen, keine Ventile aktiviert) entspricht. Manchmal (aber nicht immer)
definiert der natürliche Name der Note für diese Frequenz die Transposition des Instruments, d.h. der Grundton
wird in den Noten für dieses Instrument als "c" bezeichnet. Zum Beispiel erzeugt eine Trompete, die ohne gedrücktes
Ventil gespielt wird, ein "Bb". Diese Note ist als "c" in Partituren für Trompeten geschrieben.

Eine Partitur für ein Waldhorn ist oft in "F" geschrieben, denn der längere Teil eines Doppelhorns hat ein "F" als Grundton.
Der kürzere Teil hat jedoch einen "Bb" als Grundton. Aber Hornisten werden trainiert.
um in "F" zu lesen, unabhängig davon, welchen Teil ihres Doppelhorns sie verwenden. Tatsächlich wechseln sie oft
zwischen den beiden Teilen ihres Instruments, weil einige Töne auf einem von ihnen schöner klingen.

### Notenmaterial mit der "falschen" Transposition
Manchmal wird ein Musiker mit einer Partitur konfrontiert, die nicht zu seinen Lesegewohnheiten passt.
Ein Klarinettist könnte sich eine Partitur für "Klarinette in A" ansehen, aber er will mit seiner Standard-B-Klarinette spielen.
Der Komponist schrieb die Partitur für A-Klarinette (Transposition = -3), so dass er ein "G" verwendete,
wenn er den Klang eines "E" wollte. Auf einer "Bb-Klarinette" würde das Spielen eines "G" jedoch ein "F" ergeben.
Der Spieler muss also einen Halbton von allen Noten abziehen, während er spielt. Die Fähigkeit dazu wird als "Transponieren" bezeichnet.
Die Fähigkeit zur Transposition ist für einige Instrumente sehr nützlich, vor allem für Hornisten,
da sie (aus historischen Gründen) oft Noten in verschiedenen Transpositionen erhalten. Auf der anderen Seite, wird ein Flötenspieler
wahrscheinlich nie die Notwendigkeit haben, zu transponieren, da die Flöte ein "C"-Instrument ist.

### Referenzfrequenz
Unabhängig von der eingestellten Transposition kannst du die Basis-Sollfrequenz des Kammertons ("a")
von ihrem Standardwert (443 Hz) auf einen anderen Wert verändern, wie etwa 440 Hz. Dann werden alle Töne um ein paar Cent niedriger.

`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-GENERATOR": {					// ##########################################################################################################################################
			en: "4. The sound generator",
			de: "4. Der Sound-Generator",
			es: "",
		},
		"lesson-GENERATOR": {
 /*-----------------------------------------------------------------------------------------*/   en:`

*Tunator* has a powerful sound generator. Let's have a look at it!

Currently the generator is playing a pure sine wave with 263.41 Hz.
Relative to our default reference of 443 Hz a frequency of ~263 Hz is a tempered "c".
The frequency and the name "c" are shown in the
<span style="background:#ffc">yellow box (generator control area)</span>.

Click on the wave symbol **[~]** in the yellow area if the sound starts bothering you.
If you stop the generator the "c" will be shown in *parenthesis*.

*Tunator* detects the sound and shows the result: The note "c" as a large letter in the gray area and
the measured frequency (263.3	 Hz .. 263.6 Hz)
are displayed in the <span style="background:#cfc">green box (detector area)</span>.
The measured frequency may deviate a little bit from the generated
frequency - but the error is so small that it can be neglected.

### Look at the oscillogram
It shows a time span of ~ 43 msec (= 2048 / 48000 seconds) in gray color. A magnified version (~ 10 msec)
is shown in solid black. A frequency of ~260 Hz has a period of ~ 4msec. Therefore we see ~ 2,5 cycles
of the sine wave in black color.
The current note (c) is highlighted with three red stars after the first wave in black color.

### Now change the frequency

Switch the sound generator ON again and use the "++","+","-","--" buttons in the yellow area
to change the frequency in steps of semitones or in finer steps.
Watch the three red stars shift. Watch how the name of the detected note changes. If you use "+" or "-" you will
see that the deviation in "cents" in the gray area with the note letter also changes.

In the yellow generator control area you will see tilde symbols around the note: "~c~".
They indicate that the frequency produced by the generator "almost" matches the shown note.
Instead of using the "+"/"-" you can also enter a desired frequency directly.

### Open the timeline view
Observe the change of pitch over time!
You can click anywhere in the time line to change the generator frequency in half-tone steps.

### Try different signal shapes (wave types)
Use "triangle" instead of "sine" and listen how the sound changes although the note and the pitch are still the same.
The acoustic spectrum of a sound is defined by its harmonics.

Click on "custom" and on the button with the triple wave symbol **[&apid;]** directly below it.
This opens a group of sliders which control the intensity and the phase of the first eight harmonics.
The custom wave type sounds similar to an organ because it is a "rich wave form" composed of the base tone and
some overtones (harmonics, mutiples of the base tone).
Feel free to play with the sliders: See and listen how the sound changes. The differences will be more remarkable
at lower notes. In principle it is possible to produce any desired shape. But the mathematics behind (Fourier synthesis)
are not easy to understand.

For the remaining part of this lesson we recommend to use the "custom" wave type.

### Try the "vibrato"
By default the generator is in "straight mode" which means that it plays a steady tone of constant frequency.
The selection box for the generator mode offers lots of other options - which we will use in later lessons.
For the moment, just try "vibrato". Now the frequency changes periodically (about 4 times per second)
around the central value of a "c" (by +/- 12 cts). Switch back to "straight mode".

### Look at the chord section
Select "I + III" instead of "I"!
By default the generator plays a single tone. But it can also play two or more notes together (chords).
ROMAN numbers stand for PURE CHORDS (=JUST INTONATION) whereas ARAB NUMBERS stand for TEMPERED CHORDS.
If you select "I+III" (=base tone and a major third interval above) the two tones will have a frequency ratio
of exactly 3:4. If you select "1+3" the ratio will be 1:1.2599 which is almost the same.
But not exactly. You can hear the difference quit well if you switch between these chords.
In case you ever heard that <b>a major third interval should be played a "little smaller"</b>
than normal - this is the explanation. The diference between 1.26 and 1.25 (less than 1%) may not sound large.
But it is clearly perceivable by the human ear. If you try "i+iii" (third minor in just intonation) and compare it
to 1+3_ you will notice a similar difference - but in the other direction: a minor third should be played
somewhat "larger".

Try also with I+III+V and 1+3+5. The perfect intonation (roman numbers) sounds much clearer whereas
the tempered intonation produces a "spatial" effect which in essence is some kind of "vibrato" BETWEEN the tones
of the chord. It is a matter of taste and hearing habits whether one prefers the perfect integer ratios
or the tempered chord. When playing with wind instrument most people like to produce just intonation.

Listen to 1+3+5 carefully. Can you hear how the highest note fades away and returns almost every second?
The energy of the three waves gets added and due to the minimal differences in their frequency ratio they can
partly extinguish each other from time to time. You can see this effect happen in the oscillogram:
the amplitude and the shape of the waves change periodically, they seem to "breath".
`/*-----------------------------------------------------------------------------------------*/ , de:`
*Tunator* hat einen leistungsstarken Klangerzeuger. Betrachten wit ihn näher!

Derzeit erzeugt der Generator eine reine Sinuswelle mit 263,41 Hz.
Bezogen auf unsere Standardreferenz von 443 Hz ist eine Frequenz von ~263 Hz ein temperiertes "c".
Die Frequenz und der Name "c" werden in der <span style="background:#ffc">gelben Box (Generator-Steuerungsbereich)</span>
angezeigt.

Klicke auf das Wellensymbol **[~]** im gelben Bereich, wenn dich der Ton zu stören beginnt.
Wenn der Generator stoppt, wird das "c" *in Klammern* angezeigt.

*Tunator* erkennt den Ton und zeigt das Ergebnis an: Die Note "c" als großer Buchstabe im grauen Bereich und
die gemessene Frequenz (263,3 Hz .. 263,6 Hz)
werden im <span style="background:#cfc">grünen Kasten (Detektorbereich)</span> angezeigt.
Die gemessene Frequenz kann geringfügig von der erzeugten Frequenz abweichen,
aber der Fehler ist so klein, dass er vernachlässigt werden kann.

### Sieh dir das Oszillogramm an
Es zeigt eine Zeitspanne von ~ 43 msec (= 2048 / 48000 Sekunden) in grauer Farbe. Eine vergrößerte Version (~ 10 msec)
wird in schwarz dargestellt. Eine Frequenz von ~260 Hz hat eine Periode von ~ 4msec. Deshalb sehen wir ~ 2,5 Zyklen
der Sinuswelle in schwarzer Farbe.
Die aktuelle Note (c) wird mit drei roten Sternen nach der ersten Welle in schwarzer Farbe hervorgehoben.

### Ändere nun die Frequenz

Schalte den Klangerzeuger wieder ein und verwende die Tasten "++", "+", "+","-","--" im gelben Bereich,
um die Frequenz in Halbtonschritten oder in feineren Schritten zu ändern.
Beobachte, wie die drei roten Sterne sich verschieben und wie sich der Name der erkannten Note ändert.
Wenn du "+" oder "-" verwendest, wirst du sehen, dass sich auch die Abweichung in "Cent" im Graubereich
mit dem Notenbuchstaben ändert.

Im gelben Generator-Steuerungsbereich siehst du die Tilde-Symbole rund um den Hinweis: "~c~".
Sie zeigen an, dass die vom Generator erzeugte Frequenz "fast" mit der dargestellten Note übereinstimmt.
Anstatt das "+"/"-" zu verwenden, kannst du auch direkt eine gewünschte Frequenz eingeben.

### Öffne die Zeitleisten-Ansicht (Gitter-Symbol)

Beobacht die Veränderung der Tonhöhe über die Zeit! Man kann auch irgendwo in der Zeitleiste klicken,
um die Generatorfrequenz in Halbtonschritten zu ändern.

### Probiere verschiedene Signalformen (Wellentypen) aus
Verwende z.B. "Dreieck" anstelle von "Sinus" und höre, wie sich der Klang ändert, obwohl die Note und die Tonhöhe noch gleich sind.
Das akustische Spektrum eines Klangs wird durch seine Oberwellen definiert.

Klicke auf "Custom" und auf die Schaltfläche mit dem Dreifachwellensymbol **[&apid;]** direkt darunter.
Dies öffnet eine Gruppe von Reglern, die die Intensität und die Phase der ersten acht Oberwellen steuern.
Der aktuelle benutzerdefinierte Wellentyp klingt ähnlich wie eine Orgel, da es sich um eine Wellenform handelt,
die sich aus dem Basiston und einigen Obertöne (=Vielfachen des Grundtons) zusammensetzt.
Du kannst gerne mit den Reglern spielen. Die Unterschiede sind am stärksten warnehmbar bei tieferen Tönen.
Grundsätzlich ist es möglich, jede gewünschte Form herzustellen. Aber die Mathematik dahinter (Fourier-Synthese)
ist nicht leicht zu verstehen.

Für den restlichen Teil dieser Lektion empfehlen wir, den "benutzerdefinierten" Wellentyp ("custom") zu verwenden.

### Probiere das "Vibrato" aus
Standardmäßig befindet sich der Generator im "straight mode", d.h. er spielt einen gleichmäßigen Ton mit konstanter Frequenz.
Die Auswahlbox für den Generator-Modus bietet viele weitere Optionen, die wir in späteren Lektionen verwenden werden.
Probiere im Moment einfach nur mal "Vibrato" aus. Jetzt ändert sich die Frequenz periodisch (ca. 4 mal pro Sekunde).
um den zentralen Wert eines "c" (um +/- 12 cts). Wechsle wieder in den "straight mode" zurück.

### Sieh dir die Akkord-Einstellungen an.
Wähle "I + III" statt "I"!
Standardmäßig spielt der Generator einen Einzelton. Er kann aber auch zwei oder mehr Noten zusammen spielen (Akkorde).
RÖMISCHE Zahlen stehen für REINE Akkorde, während ARABISCHE Zahlen für TEMPERIERTE Akkorde stehen.
Wenn du "I+III" (=Basiston und eine große Terz darüber) wählst, dann haben die beiden Töne ein Frequenzverhältnis.
von genau 3:4. Wenn du "1+3" wählst, beträgt das Verhältnis 1:1,2599, was fast das gleiche ist.
Aber nicht ganz. Du kannst den Unterschied gut hören, wenn du zwischen diesen Akkorden wechselst.
Falls du jemals gehört hast, dass **eine große Terz "etwas enger"** gespielt werden sollte als normal - das ist die Erklärung.
Der Unterschied zwischen 1,26 und 1,25 (weniger als 1%) klingt möglicherweise nicht groß.
Aber er ist für das menschliche Ohr deutlich wahrnehmbar. Wenn du "i+iii" versuchst (Mollterz in reiner Intonation)
und mit 1+3_ vergleichst, dann wirst du einen ähnlichen Unterschied feststellen - aber in die andere Richtung:
eine Mollterz sollte etwas größer (weiter) gespielt werden.

Versuche es auch mit I+III+V und 1+3+5. Die perfekte Intonation (römische Zahlen) klingt viel klarer, während die
die temperierte Intonation einen "räumlichen" Effekt erzeugt, der im Wesentlichen eine Art "Vibrato" zwischen den Tönen
des Akkords ist. Es ist eine Frage des Geschmacks und der Hörgewohnheiten, ob man die perfekten ganzzahligen Verhältnisse bevorzugt.
oder den temperierten Akkord. Beim Spielen mit Blasinstrumenten mögen es die meisten Menschen, eine reine Intonation zu erzeugen.

Höre 1+3+5 aufmerksam an. Kannst du hören, wie die höchste Note verblasst und fast jede Sekunde zurückkehrt?
Die Energie der drei Wellen wird addiert und kann aufgrund der minimalen Unterschiede in ihrem Frequenzverhältnis
sich von Zeit zu Zeit gegenseitig teilweise löschen. Du kannst diesen Effekt auch im Oszillogramm sehen:
die Amplitude und die Form der Wellen ändern sich periodisch, sie scheinen zu "atmen".

`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-COMPARE": {					// ##########################################################################################################################################
			en: "5. Comparing two tones",
			de: "5. Zwei Töne miteinander vergleichen",
			es: "",
		},
		"lesson-COMPARE": {
 /*-----------------------------------------------------------------------------------------*/   en:`

When musicians play together they have to tune their instruments. Otherwise the sound would be rough and unsatisfactory
when they play together. "Tuning" means that an "a" shall match exactly a certain reference frequency on all instruments.
Ideally all other notes on the different instruments will then also be "in tune". We will see later that this is
not the case in reality. Nevertheless it is a good idea to have at least ONE note that sounds in tune on all
instruments.

By convention the "a"-sound is used for this purpose. If a group of wind instruments play together they will prefer
to use a "Bb" as a common reference note as this is the physical base tone for many wind instruments.
Which means that the players do not have to press flaps or keys/valves to produce a "Bb". If you remember what
we explained about transpositions you will have in mind that in the notation of such instruments the sounding "Bb"
will typically be written as a "c". So they will play a "c" (in their minds), effectively producing a "Bb".
F-Instruments will play a (written) "F" which means that they also produce the sound of a "Bb". A saxophone in "Eb"
will have to play a "g" to produce the "Bb". If wind instruments play together with string instruments
they tune on an "a" which means that a trumpet player thinks of a "B" ("H" in German notation), a french horn player
thinks of an "E".

The reference frequency for an "a" is defined by the conductor;
it is chosen in a way that all instruments are capable to be tuned to that frequency. A common value
nowadays is 442 or 443 Hz.

### Pitch drift
Many instruments change their base pitch due to physical reasons when their temperature changes.
Typically their pitch becomes higher when they get warmer. The tension of strings also changes with temperature
and over time.
A cold wind instrument becomes warmer by the flow of the breath of the player.
On a hot stage the difference might even be a semitone! This means that it does not make much sense to
tune a set of "cold" instruments.

### Tuning process in an orchestra
When players tune their instruments they listen to the reference tone (normally being played by the oboe),
produce their own tone for a short moment and try to decide very quickly which one is lower or higher.
This needs some practice. Of course you can - and should - repeat the process if you noticed a difference
but generally speaking players should be very fast in detecting pitch differences.
As soon as they got their instrument correctly tuned they
should remain silent so that the other players can do their job. Typically there is a rule in an orchestra
for the sequence of the instrument groups during the tuning process. Many orchestras start with wind instruments
(from high to low) followed by the double bass and the other string instruments. Some musicians like drummers
or harp players may use their own electronic device and do the tuning independently from the other members
of the orchestra.

### EXERCISE: Let us recognize some simple pitch differences!
Click on the **[~]** symbol in the yellow area to start the oscillator. It will produce a reference tone ("a"=443 Hz)
and after a very short pause it will produce another tone which is slightly higher or lower. After a longer pause
you will hear the next pair of tones. The reference tone will always be the same, the "deviating" tones are randomly
chosen by *Tunator*.

Close your eyes and try to decide whether the second tone is higher or lower than the reference tone. Then open
your eyes and check! You can look at the "cents" indicator below the large note name, at the frequency numbers in the
yellow area or in the green area. There is also a tiny "+" or "-" sign directly behind the "generator mode setting"
in the yellow area. The mode is currently set to "compare (easy)". Look there and you will se a small "+" or "-"
sign appear and disappear. "+" means that the second was too high, "-" means it was too low. By the way, you can also
use the timeline to "see" the pitch differences.

This lesson was "easy" because:
* the reference tone was always the same
* the differences were relatively large
* the sound character (harmonics) was identical for both tones
* there were no octave changes involved.

In reality, however, you have to consider all these aspects.

### Try the other comparison modes: medium, difficult, very hard!
* **compare (easy)**: stable reference tone, large pitch differences, identical sound, same octave.</li>
* **compare (medium)**: various reference tones, medium size pitch differences, different sound (harmonics),  same octave.</li>
* **compare (difficult)**: various reference tones, small pitch differences, different sound, tones may be one octave apart.</li>
* **compare (very hard)**: various reference tones, tiny pitch differences, different sound, tones may be up to two octaves apart.</li>

In the last two exercises the base tone is always played with a triangular wave shape.
This makes it much easier to idebntify small pitch differences between tones when their base difference
is one or two octaves apart. In reality the instrument that comes closest to a "triangle" wave shape is the oboe.
The oboe has an especially rich set of harmonics. This is why the oboe player has to produce the reference tone for the
orchestra. If the tuba did the same job it would be much harder for the other musicians to tune their instruments.
You should get all exercises right at "medium level" and **most of them** in the "difficult" setting.
The "difficult" setting is more or less what you experience in a real instrument tuning session during
a rehearsal or before the concert.

If you have a hit rate of 75% in the "very hard" level you should feel proud!

### Find the octave
Switch the generator mode to "straight" and change its frequency to an "a" (443 Hz).
We are going to find the LOWER OCTAVE for that tone.
Click on the "auxiliary generator button" **[≈]** in the yellow area. This produces a second tone which
you can freely control. At the beginning its pitch is slightly above the main generator´s pitch.

As soon as you HOLD DOWN the arrow button next to **[≈]** FOR SOME TIME its pitch will go down and you can
hear the difference. Stay on the button until you think that you have more or less the LOWER OCTAVE.
Then FINE-ADJUST the tone of the auxiliary generator with the large slider next to the two arrow buttons.

Once you think that you got the lower octave right PUT YOUR MOUSE OVER the button with the question mark!
As a response you will see the interval and the deviation in cents. Placing the mouse over the
**[≈]** button will give you the frequency of the aux generator in Hz.

Try the octave upwards as well. You should be as close as 2..3 cents to the correct value. Pay attention
to the "fading effect" which you start to hear when you are close enough to the correct value.

### Find single tones which are part of a chord

Stop the auxiliary generator. Switch the main generator to a "c" (263 Hz) and select the chord I-III-V
(which equals to "c-e-g"). Now activate the auxiliary generator again and move its frequency
until it matches the "e". Check how well you did and go further up to the fifth ("g") and then to the octave
("c" with 527 Hz).

It is rather easy to match the "e" but the "g" is a little bit harder. Sometimes you may get fooled into
the sixth ("a" instead of "g").

### Follow your neighbor with drifting tones

Sometimes when two players hold a tone "unisonso" for a long time one of them may drift away a little. In such cases
the other player should follow him to keep the tone perfectly sounding together. Use the "drifting" generator
mode to simulate this situation. You can open the timeline to see what happens. Try to notice the small
pitch variations of *Tunator* as fast as possible, decide whether you have to go up or down to follow
and try to match your tone with the changed tone! You can use a simple tone or a chord for this training.

### Keep brave in wild environment
Select "major scale slow 1 octave" at the generator control, use a sept chord "I+II+V+VII" and play a constant tone.
Watch carefully for the monents when one of the tones from the generator matches your tone!
Use the timeline to check if you can withstand the tendency to get drawn away AFTER those moments.
The most crucial moment is when the base tone of the scale goes down, matches your tone and then goes
a semitone lower. Keep your tone!

If you like you can play the octave movement together with the generator, with your tone being I,III,V,VI,VII or VIII
or even with II or IV (which is not easy to do). You can also start with the octave going in opposite direction.
Always watch out for the "magical matching moments" and **when there is no match keep your tone bravely!**

`/*-----------------------------------------------------------------------------------------*/ , de:`

Wenn Musiker zusammen spielen, müssen sie ihre Instrumente stimmen. Sonst wäre der Klang rau und unbefriedigend.
"Tuning" bedeutet, dass ein "a" bei allen Instrumenten genau einer bestimmten Referenzfrequenz entsprechen muss.
Im Idealfall sind dann auch alle anderen Noten auf den verschiedenen Instrumenten "gestimmt". Wir werden später sehen,
dass dies allerdings nicht immer der Fall ist. Dennoch ist es eine gute Idee, mindestens EINE Note zu haben,
die auf allen Instrumenten übereinstimmt.

Per Konvention wird zu diesem Zweck die Note "a" verwendet. Wenn eine Gruppe von Blasinstrumenten zusammen spielt,
wird sie es allerdings bevorzugen ein "B" als gemeinsame Referenznote zu verwenden, da dies der physikalische Basiston
für viele Blasinstrumente ist.
Das bedeutet, dass die Spieler keine Klappen oder Ventile drücken müssen, um ein "B" zu erzeugen. Erinnere dich an unsere
Erklärungen zum Thema *Transposition*. Bei der Notation solcher Instrumente wird das klingende "B" typischerweise als "c"
geschrieben. Die Spieler haben also ein "c" in ihren Köpfen, wenn sie ein "B" produzieren.
F-Instrumente spielen ein (geschriebenes) "F", was bedeutet, dass auch sie den Klang eines "Bb" erzeugen. Ein Saxophon in "Eb"
gestimmt und muss daher ein "g" spielen, um das "B" zu erzeugen.
Wenn Blasinstrumente zusammen mit Streichinstrumenten spielen, stimmen sie jedoch auf ein "a",
was bedeutet, dass ein Trompeter an ein "H" denkt, ein Waldhornist denkt an ein "E".

Die Referenzfrequenz für ein "a" wird durch den Dirigenten festgelegt;
er wählt sie so, dass alle Instrumente in der Lage sind, auf diese Frequenz gestimmt zu werden. Ein gemeinsamer Wert
ist heute 442 oder 443 Hz.

#### Wanderung der Tonhöhe
Viele Instrumente ändern ihre Grundtonhöhe aus physikalischen Gründen, wenn sich ihre Temperatur ändert.
Typischerweise wird ihre Tonhöhe höher, wenn sie wärmer wird. Die Spannung der Saiten ändert sich auch mit der Temperatur.
und im Laufe der Zeit.
Ein kaltes Blasinstrument wird durch den Atemzug des Spielers wärmer.
Auf einer heißen Bühne kann der Unterschied sogar ein Halbton sein! Das bedeutet, dass es nicht viel Sinn macht, mit "kalten"
Instrumenten zu stimmen.

### Stimmprozess in einem Orchester
Wenn Spieler ihre Instrumente stimmen, hören sie den Referenzton (der normalerweise von der Oboe gespielt wird),
erzeugen für einen kurzen Moment ihren eigenen Ton und versuchen, sehr schnell zu entscheiden, welcher niedriger oder höher ist.
Das erfordert etwas Übung. Natürlich kann - und sollte - man den Vorgang wiederholen, wenn ein Unterschied vermutet wurde,
aber im Allgemeinen sollten die Spieler sehr schnell bei der Erkennung von Tonhöhenunterschieden sein.
Sobald sie ihr Instrument richtig gestimmt haben, sollten die Musiker schweigen, damit die anderen Spieler ihren Job machen können.
Typischerweise gibt es eine Regel in einem Orchester für die Reihenfolge der Instrumentengruppen während des Stimmprozesses.
Viele Orchester beginnen mit Blasinstrumenten (von hoch bis tief), gefolgt vom Kontrabass und den anderen Streichinstrumenten.
Einige Musiker wie Schlagzeuger oder Harfenspieler können ihre eigene elektronische Vorrichtung benutzen und die Stimmung
unabhängig von den anderen Mitgliedern des Orchesters vornehmen.

### ÜBUNG: Lass uns einige einfache Tonhöhenunterschiede erkennen!
Klicke auf das Symbol **[~]** im gelben Bereich, um den Oszillator zu starten. Es wird ein Referenzton erzeugt ("a"=443 Hz).
und nach einer sehr kurzen Pause erzeugt er einen anderen Ton, der etwas höher oder niedriger ist. Nach einer längeren Pause
hörst du das nächste Tonpaar. Der Referenzton ist immer gleich, die "abweichenden" Töne sind zufällig ausgewählt von *Tunator*.

Schließe die Augen und versuche zu entscheiden, ob der zweite Ton höher oder niedriger als der Referenzton ist. Dann öffne
die Augen und überprüfe es! Du kannst den "Cent"-Indikator unter dem Namen der großen Note dazu benutzen,
die Frequenzangabe in dem gelben Menu-Bereich oder im grünen Bereich. Es gibt auch ein winziges "+" oder "-" Zeichen direkt
hinter der Einstellung "Generator-Modus" im gelben Bereich. Der Modus ist derzeit auf "Vergleichen (einfach)" eingestellt.
Schau dort hin und du wirst ein kleines "+" oder "-" erscheinen und verschwinden sehen. "+" bedeutet, dass der zweite Ton
zu hoch war, "-" bedeutet, dass er zu niedrig war. Übrigens kannst du auch die Zeitleiste verwenden, um die
Tonhöhenunterschiede zu "sehen".

Diese Lektion war "einfach":
* der Referenzton war immer derselbe
* Die Unterschiede waren relativ groß
* der Klangcharakter (Oberwellen) war für beide Töne identisch
* es gab keine Oktavwechsel

In Wirklichkeit muss man jedoch all diese Aspekte berücksichtigen.

### Versuche jetzt die anderen Vergleichsmodi: mittel, schwierig, sehr hart!
* **Vergleich (einfach)**: stabiler Referenzton, große Tonhöhenunterschiede, identischer Klang, gleiche Oktave.</li>
* **Vergleich (mittel)**: verschiedene Referenztöne, mittlere Tonhöhenunterschiede, unterschiedlicher Klang (Oberwellen), gleiche Oktave.</li>
* * **Vergleich (schwierig)**: verschiedene Referenztöne, kleine Tonhöhenunterschiede, unterschiedlicher Klang, Töne können eine Oktave auseinander liegen.</li>
* * **Vergleich (sehr hart)**: verschiedene Referenztöne, winzige Tonhöhenunterschiede, unterschiedlicher Klang, Töne können bis zu zwei Oktaven auseinander liegen.</li>

In den letzten beiden Übungen wird der Basiston immer mit einer dreieckigen Wellenform gespielt.
Dies macht es viel einfacher, kleine Tonhöhenunterschiede zwischen Tönen zu erkennen, wenn ihre Basisdifferenz
eine oder zwei Oktaven auseinander liegt. In Wirklichkeit ist das Instrument, das einem "Dreieck" am nächsten kommt, die Oboe.
Die Oboe hat einen besonders reichen Satz an Obertönen. Deshalb muss der Oboist den Referenzton für das Orchester produzieren.
Wenn es stattdessen die Tuba machen würde, wäre es für die anderen Musiker viel schwieriger, ihre Instrumente zu stimmen.
Du solltest alle Übungen direkt auf "mittlerem Niveau" und **die meisten von ihnen** in der "schwierigen" Einstellung
erfolgreich bewältigen.
Die "schwierige" Einstellung ist mehr oder weniger das, was bei einer echten Instrumentenstimmung vor einer Probe oder vor
einem Konzert passiert.

Wenn du eine Trefferquote von 75% im "sehr harten" Level hast, solltest du stolz sein!

### Finde die Oktave
Schalte den Generator-Modus auf "straight" und ändere seine Frequenz auf ein "a" (443 Hz).
Wir werden die untere Oktave für diesen Ton suchen gehen.
Klicke auf die Schaltfläche "Hilfsgenerator" **[≈]** im gelben Bereich. Dadurch entsteht ein zweiter Ton, den du
frei kontrollieren kannst. Zu Beginn liegt seine Tonhöhe leicht über der Tonhöhe des Hauptgenerators.

Sobald du die Pfeiltaste neben **[≈]** FÜR EINE WEILE gedrückt hältst, wird die Tonhöhe verringert und du kannst
den Unterschied hören. Bleibe auf der Taste, bis du denkst, dass du mehr oder weniger die untere Oktave gefunden hast.
Dann stelle den Ton des Hilfsgenerators mit dem großen Schieberegler neben den beiden Pfeiltasten fein ein.

Sobald du denkst, dass es genau stimmt, stelle die Maus über den Knopf mit dem Fragezeichen!
Als Antwort siehst du das Intervall und die Abweichung in Cent. Wenn du die Maus über die
**[≈]**-Taste stellst, siehst du dort übrigens die Frequenz des Aux-Generators in Hz.

Versuche es auch mit der Oktave nach oben. Du solltest etwa 2..3 Cent am richtigen Wert sein. Achte auf
auf den "Fading-Effekt", der einsetzt, wenn man nahe genug am richtigen Wert ist.

### Einzelne Töne finden, die Teil eines Akkords sind

Stoppe den Hilfsgenerator. Schalte den Hauptgenerator auf ein "c" (263 Hz) und wählen den Akkord I-III-V aus.
(was gleich "c-e-g" ist). Aktivieren nun wieder den Hilfsgenerator wieder und verschiebe seine Frequenz,
bis sie mit dem "e" übereinstimmt. Überprüfe, wie gut du das "e" getroffen hast; dann gehe weiter bis zur Quinte ("g")
und dann bis zur Oktave ("c" mit 527 Hz).

Es ist ziemlich einfach, das "e" einzustellen, aber das "g" ist etwas schwieriger. Manchmal wirst du dich vielleicht
irren und die Sexte ("a" statt "g") erwischen.

### Folge deinem Nachbarn bei driftenden Tönen

Manchmal, wenn zwei Spieler einen Ton "unisonso" für eine lange Zeit halten, kann einer von ihnen ein wenig wegdriften. In solchen Fällen
sollte der andere Spieler ihm folgen, damit der Ton perfekt zusammen klingt. Verwende den "drifting" Modus des Generators,
um diese Situation zu simulieren. Du kannst die Zeitleiste öffnen, um zu sehen, was passiert. Versuche, die kleinen
Tonhöhenvariationen des *Tunators* so schnell wie möglich zu erfassen und entscheide, ob du nach oben oder unten gehen musst,
um zu folgen. Bleibe dran! Du kannst für dieses Training einen einfachen Ton oder einen Akkord verwenden.

### Bleib tapfer in wilder Umgebung
Wähle am Generatorregler "Dur-Tonleiter langsam 1 Oktave", verwende einen Septakkord "I+II+V+V+VII" und spiele einen konstanten Ton.
Achte sorgfältig auf die Momente, wenn einer der Töne des Generators zu deinem Ton passt!
Verwenden die Zeitachse, um zu überprüfen, ob du der Tendenz widerstehen kannst, dich nach diesen Momenten wegziehen zu lassen.
Der problematischste Augenblick ist es, wenn der Grundton der Tonleiter nach unten geht, zu deinem Ton passt und dann
weiter nach unten geht, also einen Halbton tiefer. Bleib in deinem Ton!

Wenn du magst, kannst du eine Oktavbewegung zusammen mit dem Generator spielen, wobei dein Ton I,III,V,VI,VII oder VIII ist.
oder sogar mit II oder IV (was nicht einfach ist). Du kannst auch deine Tonleiter in entgegengesetzte Richtung spielen.
Achte immer auf die "magischen Momente" und **wenn es keine Übereinstimmung gibt, halte deinen Ton tapfer!**

`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-ASSISTED": {					// ##########################################################################################################################################
			en: "6. Assisted tone playing",
			de: "6. Töne spielen mit Unterstützung",
			es: "",
		},
		"lesson-ASSISTED": {
 /*-----------------------------------------------------------------------------------------*/   en:`

### Put on a headset, sing or play a tone and try to stay precisely "in tune"

The green "intonation" button in the left area of the menu activated "assisted playing". This means
that *Tunator* now listens to the microphone; as soon as it detects a tone it *starts playing
the correct note* for this frequency.

Through the headphones you hear the correct tone from *Tunator* and directly you hear your own sound -
adjust the volume of the headphones so that you can hear both sounds equally well.

In the previous lessons you trained your ear to detect small differences in pitch. Now it is your tasks
to minimize the pitch difference by adjusting the frequency of your tone. We have also activated the "tell me"
checkbox. So you will hear the note name once you kept the difference small enough for some time.

### Sing octave intervals or simple interval sequences!
Set the coloring mode of the timeline from "smoothed" to "simple". Sing octave intervals and try to minize
the percentage of false notes. Listen to the note being played and adjust your pitch.
A good sequence for practicing is "I -IV -VIII I -ii I". Starting from f (for example) this would mean "f-c-F-f-e-f".

### Assisted interval playing
Choose one of the chords that DO NOT start with a "I", for example "+III". Now, when you sing or play *Tunator*
will play a tone which forms the mentioned interval with your tone (when played correctly). Let us say you sing or
play a frequency of 258 Hz - which is a very low "c" (-30 cts). If "+III" is chosen you will hear a tone which is
a pure major third above a perfect "c". It will be an "e" but slightly below the standard chromatic "e" (331.9 Hz) because
it must have an integer ratio of 5:4 compared to a standard "c" (263.4 Hz). So the tone you hear has a frequency of
263.4 Hz * 5 / 4 = 329.2 Hz. If you now aim for playing the correct "c" you will hear the consonance of a perfect (pure)
major third.

There are also triple chords available where one part is misssing. Especially useful is "-III +iii" which means that
we have a major triple chord where your note functions as the middle tone: The generator plays a pure major third
below your tone and a pure minor third above. When you look at the timeline you see what happens. Make sure that the
timeline window is high enough or use a small vertical resolution so that you see a range of one octave.

### Free interval playing
This time the generator will play a constant chord and we will try to match one of the tones or add a missing tone.
Choose "straight" mode and a chord of "I+V" and SWITCH OFF "intonation" and SWITCH ON the microphone icon. You
hear a perfect fifth and now you can place your tone in relation to these tones. You can try to match the base tone,
then the fifth and finally you can place a minor third, a major third or add the octave. If you are ambitious
you could also try for a "tritone".

You could start with "c-g" being played by <i>Tunator</i> and you play or sing "c-g-c-e-c-eb-g-c'-c". The timeline
gives you optical feedback how good your intonation was. Then use "++"/"--" OR CLICK SOMEWHERE INTO THE TIMELINE GRID
to choose another chord base tone.
Depending on your instrument and your capability to compensate for the weekness of some tones you will
observe greater deviations when you switch from "c-g" to "c#-g#" for instance.

Continue with other examples: set "I +VI" (sext chord) and place a fourth interval in between!

`/*-----------------------------------------------------------------------------------------*/ , de:`

### Setze ein Headset auf, singe oder spiele einen Ton und versuche, präzise "die Stimmung zu halten".

Mit der grünen Taste "Intonation" im linken Bereich des Menüs wurde "Assisted Play" aktiviert. Das bedeutet
dass *Tunator* nun auf das Mikrofon hört; sobald er einen Ton erkennt, beginnt er *mit der Wiedergabe der
richtigen Note* für diese Frequenz.

Über die Kopfhörer hörst du den richtigen Ton vom *Tunator* und direkt hörst du deinen eigenen Ton -
stelle die Lautstärke des Kopfhörers so ein, dass beide Töne etwa gleich laut wirken.

In den vorangegangenen Lektionen hast du dein Ohr trainiert, um kleine Unterschiede in der Tonhöhe zu erkennen.
Jetzt ist es deine Aufgabe, die Tonhöhenabweichung durch Anpassen deines Gesangs oder Spiels zu minimieren.
Wir haben auch die Funktion "Note sagen" aktiviert. Du wirst den Namen der Note hören, sobald der
Unterschied für einige Zeit klein genug geblieben ist.

### Sing Oktavintervalle oder einfache Intervallsequenzen!
Stelle den Farbmodus der Timeline von "geglättet" auf "einfach" oder auf "shading" ein.
Sing Oktavintervalle und versuche den Anteil falscher Noten gering zu halten. Höre dir die gespielte Note an und passe
deine Tonhöhe an.
Eine gute Übungssequenz ist "I -IV -VIII I -ii I". Ausgehend von f (zum Beispiel) würde dies "f-c-F-f-e-f" bedeuten.

### Unterstützte Intervallwiedergabe
Wähle einen der Akkorde, die NICHT mit einer "I" beginnen, z.B. "+III". Wenn du jetzt singst oder spielst ergänzt *Tunator*.
einen Ton, der mit deinem Ton (bei richtiger Spielweise) das genannte Intervall bildet. Sagen wir, du singst oder spielst
eine Frequenz von 258 Hz - das ist ein sehr niedriges "c" (-30 cts). Wenn du "+III" eingestellt hast, hörst du einen Ton,
der eine reine große Terz über einem korrekten "c" darstellt. Es wird ein "e" sein, aber etwas unter dem normalen
chromatischen "e" (331,9 Hz), denn es muss ein ganzzahliges Verhältnis von 5:4 im Vergleich zu diesem "c" (263,4 Hz) aufweisen.
Der Ton, den du hörst, hat also eine Frequenz von 263,4 Hz * 5 / 4 = 329,2 Hz.
Wenn du das richtige "c" spielst, hörst du eine perfekte (reine) große Terz.

Es gibt auch Dreifach-Akkorde, bei denen eine Note fehlt. Besonders nützlich ist "-III +iii", was bedeutet, dass
wir einen Durakkord haben, bei dem deine Note als Mittelton fungiert: Der Generator spielt eine reine große Terz
unter deinem Ton und eine reine kleine Terz darüber. Wenn du dir die Zeitleiste ansiehst, siehst du, was passiert.
Stelle sicher, dass das Zeitachsenfenster hoch genug ist oder verwenden eine kleine vertikale Auflösung,
so dass ein Bereich von mindestens einer Oktave sichtbar ist.

### Freie Intervallwiedergabe
Diesmal spielt der Generator einen konstanten Akkord und wir werden versuchen, uns an einen der Töne anzupassen
oder einen fehlenden Ton hinzuzufügen.
Wähle den "straight"-Modus und einen Akkord aus, z.B. "I+V"; dann schalte den Knopf "Intonation" aus und schalte das
Mikrofonsymbol ein. Du hörst jetzt eine perfekte Quinte und kannst jetzt deinen Ton in Beziehung dazu setzen.
Du kannst versuchen, den Basiston zu spielen, dann die Quinte und schließlich die kleine Terz, eine große Terz oder
eine Oktave hinzufügen. Wenn du ehrgeizig bist, könntest du auch versuchen, einen "Tritonus" einzubauen.

Du kannst damit beginnen, dass "c-g" von *Tunator* gespielt wird und du spielst oder singst: "c-g-c-e-c-e-c-eb-g-g-c'-c".
Die Zeitleiste gibt optisches Feedback, wie gut die Intonation war. Dann benutze "++"/"--" oder klicke in dass Gitter
der Zeitleiste, um einen anderen Akkord-Basiston zu wählen.

Abhängig von deinem Instrument und deiner Fähigkeit, die Schwächen mancher Töne auszugleichen, wirst du bei bestimmten
Tonarten größere Abweichungen feststellen, etwa, wenn du von "c-g" auf "c#-g#" wechselst.

Fahre mit anderen Beispielen fort: Stelle "I +VI" (Sext-Akkord) ein und lege dich mit einer Quart dazwischen!

`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


				"lesson-title-CHORDS": {					// ##########################################################################################################################################
					en: "7. Chord sequences",
					de: "7. Akkordfolgen",
					es: "",
				},
				"lesson-CHORDS": {
		 /*-----------------------------------------------------------------------------------------*/   en:`

		### ...

		`/*-----------------------------------------------------------------------------------------*/ , de:`

### Grundlegende Akkordwechsel
Wir spielen jetzt eine choralartige Folge von Akkorden. Die Tabelle zeigt die Leiterstufen der Töne,
wobei der Bass noch eine Oktave tiefer gespielt wird als notiert. Es sind 8 Takte, im 4/4 Takt.
Der Choral beginnt mit dem aktuell eingestellten Ton des Tongenerators,
d.h. dieser Ton ist der Grundton. Der Bass spielt die untere Oktave dazu, die Sopranstimme die obere Oktave.
Wenn du den Grundton änderst, erklingt der Choral höher oder tiefer.
Zu Beginn werden 2/4 vorgezählt (Höhe = der erste Ton der Sopranstimme).

		 DEMO[[basicChange|alle Stimmen ]]
		 DEMO[[basicChangeS|ohne Sopran]] |  8  |  8  | 8-7 |  8  |,|  5  |  6  | 6-5 |  5  |
		 DEMO[[basicChangeA|ohne Alt]]    |  5  |  6  | 5-5 |  5  |,|  3  |  4  | 4-4 |  3  |
		 DEMO[[basicChangeT|ohne Tenor]]  |  3  |  4  | 3-2 |  3  |,|  1  |  1  | 1-7 |  1  |
		 DEMO[[basicChangeB|ohne Bass]]   |  1  |  4  | 5-5 |  1  |,|  1  | 4-3 | 2-5 |  1  |


		`/*-----------------------------------------------------------------------------------------*/ , es:`
		`,
				},


		"lesson-title-SAMPLING": {					// ##########################################################################################################################################
			en: "8. Using sound samples",
			de: "8. Klangmuster benutzen",
			es: "",
		},
		"lesson-SAMPLING": {
 /*-----------------------------------------------------------------------------------------*/   en:`

*Tunator* can extract a periodic pattern from a sound sample and use it
for looped replay or even for configuring the oscillator.

### Sing a tone and click on "1" in the blue sampling control area.
The oscillogram gets frozen and the "loop" button becomes yellow to indicate that there is a stored sample
available. Now press on "loop" and you will hear a steady repetition of the sound which you had produced.

(Note: the buttons "n","all" and "noise" are experimental and of little practical use at the moment).

### Shape the oscillator
While the loop is playing open the generator (yellow control area) and press the **[&perp;]** button.
Now the harmonics are set in way that the generator (nearly) reproduces the sound from the loop.
If you click on the oscillator button **[~]** you can hear and see the wave form produced by the generator.
Pressing "loop" again lets you compare the generator tone to the recorded loop sample.

Now that you have the tone in the generator you can change its pitch as you like, use it for chords etc.
You will notice that chords may sound strongly vibrate sometimes. A chord like "1+3+5" may sound more
comfortable than "I+III+V" in those cases.
`/*-----------------------------------------------------------------------------------------*/ , de:`

*Tunator* kann ein periodisches Muster aus einer Klangprobe extrahieren und
zur Loop-Wiedergabe verwenden oder auch zur Konfiguration des Oszillators.

### Singe einen Ton und klicke auf die "1" im blauen Sampling-Kontrollbereich.
Das Oszillogramm wird eingefroren und die Taste "Loop" wird gelb, um anzuzeigen, dass eine gespeicherte
Klangprobe verfügbar ist. Drücke nun auf "Loop" und du hörst eine ständige Wiederholung des Sounds.

(Hinweis: Die Tasten "n", "alle" und "Rauschen" sind experimentell und im Moment wenig sinnvoll).

### Den Oszillator formen
Während die Schleife läuft, öffne den Generator (gelber Kontrollbereich) und drücke die Taste **[&perp;]**.
Nun werden die Oberwellen so eingestellt, dass der Generator den Klang aus der Schleife (fast exakt) wiedergibt.
Wenn du auf die Oszillator-Taste **[~]** klickst, kannst du die vom Generator erzeugte Wellenform hören und sehen.
Wenn du "loop" erneut drückst, kannst du den Generatorton mit dem aufgenommenen Loop-Sample vergleichen.

Nun, da der Ton im Generator ist, kann man seine Tonhöhe beliebig ändern, ihn für Akkorde etc. verwenden.
Du wirst feststellen, dass Akkorde manchmal stark vibrieren können. Ein Akkord wie "1+3+5" klingt in solchen Fällen
vielleicht besser als "I+III+V".
`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-RHYTHM": {						// ##########################################################################################################################################
			en: "9. Rhythmic exercise",
			de: "9. Rhythmus üben",
			es: "",
		},
		"lesson-RHYTHM": {
 /*-----------------------------------------------------------------------------------------*/   en:`

... text missing ...
`/*-----------------------------------------------------------------------------------------*/ , de:`
... Text fehlt noch ...
`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-MORE": {						// ##########################################################################################################################################
			en: "10. (more to come)",
			de: "10. (wird noch ergänzt)",
			es: "",
		},
		"lesson-MORE": {
 /*-----------------------------------------------------------------------------------------*/   en:`

... more to come ...
`/*-----------------------------------------------------------------------------------------*/ , de:`
... hier kommt noch mehr ...
`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},


		"lesson-title-USER-MODE": {					// ##########################################################################################################################################
			en: "Let me use <i>Tunator</i> on my own!",
			de: "Die Komponenten von <i>Tunator</i> direkt benutzen",
			es: "",
		},


		"lesson-title-ABOUT": {						// ##########################################################################################################################################
			en: "About <i>Tunator</i>",
			de: "Über <i>Tunator</i>",
			es: "",
		},
		"lesson-ABOUT": {
 /*-----------------------------------------------------------------------------------------*/   en:`
*Tunator* is open source, hosted on [github](https://github.com/algorithmixx/tunator).
Your contribution in further development is welcome.

*Tunator* was created by Gero Scholz, Germany, Bad Nauheim.

*Tunator* is available online under [followthescore.org](https://followthescore.org/train/tunator)

January 2019
`/*-----------------------------------------------------------------------------------------*/ , de:`
*Tunator* ist Open Source, gehostet auf [github](https://github.com/algorithmixx/tunator).
Deine Mitwirkung an der Verbesserung ist willkommen.

*Tunator* wurde von Gero Scholz, Deutschland, Bad Nauheim, entwickelt.

*Tunator* ist online verfügbar unter [followthescore.org](https://followthescore.org/train/tunator)

Januar 2019
`/*-----------------------------------------------------------------------------------------*/ , es:`
`,
		},

	}

}
