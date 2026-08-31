import {
    database,
    ref,
    set,
    onValue
} from "./firebase.js";

const stateRef =
    ref(database, "cardSystem/state");

const portRef =
    ref(database, "cardSystem/port");

const stateDisplay =
    document.getElementById("state");

const scanButton =
    document.getElementById("scanButton");

const secretButton =
    document.getElementById("secretButton");

const portButton =
    document.getElementById("portButton");

const resetButton =
    document.getElementById("resetButton");

const portInput =
    document.getElementById("portInput");


scanButton.addEventListener("click", async () => {

    try {

        await set(stateRef, "scan");

    } catch (error) {

        console.error(error);

    }

});


secretButton.addEventListener("click", async () => {

    try {

        await set(stateRef, "secret");

    } catch (error) {

        console.error(error);

    }

});


portButton.addEventListener("click", async () => {

    const port =
        portInput.value.trim();

    if (!port) return;

    try {

        await set(portRef, port);

    } catch (error) {

        console.error(error);

    }

});


resetButton.addEventListener("click", async () => {

    try {

        await set(stateRef, "down");

    } catch (error) {

        console.error(error);

    }

});


onValue(stateRef, snapshot => {

    const currentState =
        snapshot.val() || "down";

    const names = {

        down: "SYSTEM DOWN",

        scan: "SCANNING",

        secret: "SECRET LEVEL"

    };

    stateDisplay.textContent =
        names[currentState] || currentState;

});