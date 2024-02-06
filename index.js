// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");


// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
    let html = /*HTML*/ `
        <form style="display: flex; flex-direction: column; width: 200px;">
            <input id="first-name" placeholder="first name" type="text" />
            <input id="last-name" placeholder="last name" type="text" />
            <input id="email" placeholder="email" type="email" />
            <input id="password" placeholder="password" type="password" />
            <input type="submit">
        </form>
`
    app.innerHTML = html
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////


// Implementer validering ved hjelp av Javascript og Regular Expressions (RegEx) for å
// sikre at følgende kriterier er oppfylt:
//
// 1. Fornavn og etternavn må inneholde minst to bokstaver, og
//    kan bare inneholde bokstaver (ingen tall eller spesialtegn)
// 2. E-postadressen må følge et
//    gylding e-postformat (f.eks: "navn@domene.com")
// 3. Passordet må være minst 8 tegn langt,
//    inneholde minst én stor bokstav, og minst ett tall.
// 4. Passord og bekreft passord må være like.
//    Du kan bruke .match() eller .test(), og legge inn RegEx stringen som argument.

// Her er en rask forklaring på RegEx.
//
// 1. ^ betyr at matchen må starte fra begynnelsen av teksten.
// 2. a-z er en karakterklasse som matcher en hvilken som helst engelsk bokstav som er liten.
// 3. A-Z er en karakterklasse som matcher en hvilken som helst engelsk bokstav som er stor.
// 4. a-zA-Z er de to overnevnte slått sammen.
//    0-9 er en karakterklasse som matcher tallene 0-9.
//    Så med det kan vi utvide den over til a-zA-Z0-9 for å matche alle små og
//    store bokstaver samt tall. Du kan også legge til f.eks. bindestrek,
//    understrek og punktum på den måten her: a-zA-Z0-9,_- {2,} betyr at det må være minst
//    to bokstaver.
// 5. {2, 4} betyr at det må være minst to bokstaver, men maks fire.
// 6. $ betyr at matchen må ende på slutten av teksten Her er et eksempel på
//    en RegEx string: ^a-zA-Z0-9._-+@a-zA-Z0-9.-+\.a-zA-Z{2,4}$
//    Klarer du å se hva den gjør?
//    Her er en forklaring uansett:
//    Den starter å matche på starten av teksten pga. ^ symbolet.
//    Så sjekker den for små og store bokstaver (samt tallene 0-9 og punktum,
//    understrek og bindestrek (...0-9._-), etterfulgt av en alfakrøll (+@).
//    Så sjekker den etter det samme, men denne gangen tillater vi ikke understrek,
//    og vi sjekker etter et punktum istedenfor en alfrakrøll (+\.).
//    Backslashen der er bare for å escape chartern.
//    altså for å indikere at det er et bokstavelig punktum, og ikke et spesielt symbol.
//    Deretter sjekker vi etter små og store bostaver (a-zA-Z) som har
//    en minimum lengde på 2 tegn og maks lengde på 4 tegn ({2, 4}).
//    Så forteller sier vi at matchingen skal stoppe på slutten av teksten pga. $ symbolet.
//    Hvis valideringen mislykkes skal du vise feilmeldinger ved siden av relevante inputfelt,
//    slik at brukeren vet hva som må rettes opp før de kan sende skjemaet.
//    Hvis valideringen er vellykket, kan du vise en alert som sier at det gikk bra,
//    og så tilbakestille skjemaet.

// Bonusoppgaver
// Implementer en styrkemåler for passordet som viser hvor sterkt passordet er
// basert på kompleksiteten (svak, middels, sterkt) Legg til en captcha for å
// forhindre automatisert registrering

// BonusBonusoppgave
// Lag en lokal database og lagre brukerdataene i en database når registreringen er vellykket.
// HTTP requests via .fetch() SQLite og denne.

// BonusBonusBonusoppgave
// Hash passordet før du lagrer det