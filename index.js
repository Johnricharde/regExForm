document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    const form = document.getElementById("my-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validate();
    });

    function validate() {
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;

        const nameRegex = /^[a-zA-Z]{2,}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!nameRegex.test(firstNameValue)) {
            alert("First name must contain only letters and be at least 2 characters long");
            return false;
        }
        if (!nameRegex.test(lastNameValue)) {
            alert("Last name must contain only letters and be at least 2 characters long");
            return false;
        }
        if (!emailRegex.test(emailValue)) {
            alert("Invalid email address");
            return false;
        }
        if (!passwordRegex.test(passwordValue)) {
            alert("Password must contain at least 8 characters including one uppercase letter and one digit");
            return false;
        }
        if (passwordValue !== confirmPasswordValue) {
            alert("Passwords do not match");
            return false;
        }
        alert("Form submitted successfully!");
        return true;
    }
});

// Implementer validering ved hjelp av Javascript og Regular Expressions (RegEx) for å
// sikre at følgende kriterier er oppfylt:

// 4. Passord og bekreft passord må være like.
//    Du kan bruke .match() eller .test(), og legge inn RegEx stringen som argument.


// Her er en rask forklaring på RegEx.
// 5. 0-9 er en karakterklasse som matcher tallene 0-9.
//    Så med det kan vi utvide den over til a-zA-Z0-9 for å matche alle små og
//    store bokstaver samt tall. Du kan også legge til f.eks. bindestrek,
//    understrek og punktum på den måten her: a-zA-Z0-9,_-
//
// 6. {2,} betyr at det må være minst to bokstaver.
//
// 7. {2, 4} betyr at det må være minst to bokstaver, men maks fire.
//
// 8. $ betyr at matchen må ende på slutten av teksten.
//    Her er et eksempel på en RegEx string: ^a-zA-Z0-9._-+@a-zA-Z0-9.-+\.a-zA-Z{2,4}$
//    Klarer du å se hva den gjør?
//
//    Her er en forklaring uansett:
//    1. Den starter å matche på starten av teksten pga. ^ symbolet.
//    2. Så sjekker den for små og store bokstaver
//       (samt tallene 0-9 og punktum, understrek og bindestrek (...0-9._-),
//       etterfulgt av en alfakrøll (+@).
//    3. Så sjekker den etter det samme, men denne gangen tillater vi ikke understrek,
//       og vi sjekker etter et punktum istedenfor en alfrakrøll (+\.).
//       Backslashen der er bare for å escape chartern.
//       altså for å indikere at det er et bokstavelig punktum, og ikke et spesielt symbol.
//    4. Deretter sjekker vi etter små og store bostaver (a-zA-Z) som har
//       en minimum lengde på 2 tegn og maks lengde på 4 tegn ({2, 4}).
//    5. Så sier vi at matchingen skal stoppe på slutten av teksten pga. $ symbolet.
//    6. Hvis valideringen mislykkes skal du vise feilmeldinger ved siden av relevante inputfelt,
//       slik at brukeren vet hva som må rettes opp før de kan sende skjemaet.
//    7. Hvis valideringen er vellykket, kan du vise en alert som sier at det gikk bra,
//       og så tilbakestille skjemaet.



// Bonusoppgaver
// Implementer en styrkemåler for passordet som viser hvor sterkt passordet er
// basert på kompleksiteten (svak, middels, sterkt) Legg til en captcha for å
// forhindre automatisert registrering

// BonusBonusoppgave
// Lag en lokal database og lagre brukerdataene i en database når registreringen er vellykket.
// HTTP requests via .fetch() SQLite og denne.

// BonusBonusBonusoppgave
// Hash passordet før du lagrer det