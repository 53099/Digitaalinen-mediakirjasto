window.login = async function () {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href =
            "etusivu.html";

    } catch (error) {

        message.innerText =
            error.message;
    }
};