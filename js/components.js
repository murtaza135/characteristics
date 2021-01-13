export function Alert(message, classNames, hasCloseBtn = true) {
    const alert = document.createElement("div");
    alert.className = classNames;

    if (hasCloseBtn) {
        alert.innerHTML = `
                <span class="alert-message">${message}</span>
                <span class="alert-close">X</span>
        `;
    }
    else {
        alert.innerHTML = `
                <span class="alert-message">${message}</span>
        `;
    }

    return alert;
}


export function AdditionalInfoRadio(gender) {
    const div = document.createElement("div");
    div.className = "radio";

    if (gender === "male") {
        div.innerHTML = `
            <label class="radio-title">Do you have a beard?</label>

            <div class="radio-group grid">
                <div class="radio-control">
                    <input type="radio" id="yes-beard" name="has-beard" value="yes" checked>
                    <label for="yes-beard">Yes</label>
                </div>

                <div class="radio-control">
                    <input type="radio" id="no-beard" name="has-beard" value="no">
                    <label for="no-beard">No</label>
                </div>
            </div>
        `;
    }
    else {
        div.innerHTML = `
            <label class="radio-title">Do you have long hair?</label>

            <div class="radio-group grid">
                <div class="radio-control">
                    <input type="radio" id="yes-long-hair" name="has-long-hair" value="yes" checked>
                    <label for="yes-long-hair">Yes</label>
                </div>

                <div class="radio-control">
                    <input type="radio" id="no-long-hair" name="has-long-hair" value="no">
                    <label for="no-long-hair">No</label>
                </div>
            </div>
        `;
    }

    return div;
}


export function HeightInput(measurementType) {
    if (measurementType === "cm") {
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("name", "height");
        input.setAttribute("id", "cm");
        input.setAttribute("placeholder", "Height (cm)");
        return { input };
    }
    else {
        const inputFt = document.createElement("input");
        inputFt.setAttribute("type", "number");
        inputFt.setAttribute("name", "height");
        inputFt.setAttribute("id", "ft");
        inputFt.setAttribute("placeholder", "ft");

        const inputIn = document.createElement("input");
        inputIn.setAttribute("type", "number");
        inputIn.setAttribute("name", "height");
        inputIn.setAttribute("id", "in");
        inputIn.setAttribute("placeholder", "in");

        return {
            inputFt,
            inputIn
        };
    }
}