const message =
    document.getElementById("message");

/* LOGIN */

function login() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    // GET SAVED ACCOUNT

    const savedEmail =
        localStorage.getItem("email");

    const savedPassword =
        localStorage.getItem("password");

    // NO ACCOUNT

    if (
        savedEmail === null ||
        savedPassword === null
    ) {

        message.innerText =
            "Luo tili ensin.";

        return;
    }

    // WRONG LOGIN

    if (
        email !== savedEmail ||
        password !== savedPassword
    ) {

        message.innerText =
            "Väärä sähköposti tai salasana.";

        return;
    }

    // SUCCESS LOGIN

    message.innerText =
        "Kirjautuminen onnistui!";

    setTimeout(() => {

        window.location.href =
            "etusivu.html";

    }, 1000);
}

/* REGISTER */

function register() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    // EMPTY CHECK

    if (email === "" || password === "") {

        message.innerText =
            "Täytä kaikki kentät.";

        return;
    }

    // SAVE ACCOUNT

    localStorage.setItem(
        "email",
        email
    );

    localStorage.setItem(
        "password",
        password
    );

    message.innerText =
        "Tili luotu onnistuneesti!";

    setTimeout(() => {

        window.location.href =
            "index.html";

    }, 1000);
}