import { ui } from "./ui";
import { Characteristics } from "./characteristics";
import Utilities from "./utilities";


// Event Listeners
document.addEventListener("DOMContentLoaded", loadAdditionalInfo);
document.addEventListener("DOMContentLoaded", loadHeightInput);
ui.genderContainerUI.addEventListener("click", loadAdditionalInfo);
ui.btnCmUI.addEventListener("click", event => loadHeightInput(event, "cm"));
ui.btnFtUI.addEventListener("click", event => loadHeightInput(event, "ft"));
ui.btnSubmit.addEventListener("click", startLoaderForCharacteristics);

// Event Callbacks
function loadAdditionalInfo() {
    const oldGender = ui.getCurrentGenderValue();
    const newGender = ui.getGenderValueFromDom();
    
    if (oldGender !== newGender) {
        ui.showAdditionalInfoBasedUponGender(newGender);
    }
}

function loadHeightInput(event, measurementType = "cm") {
    ui.changeHeightInputState(measurementType);
    event.preventDefault();
}

function startLoaderForCharacteristics() {
    ui.removeCharacteristicProgressBars();
    ui.showLoader();
    Utilities.scrollToBottom();
    setTimeout(loadCharacteristicProgressBars, 2000);
}

function loadCharacteristicProgressBars() {
    const formDetails = ui.getAllFormDetails();
    const characteristics = new Characteristics(formDetails);

    if (characteristics.areAttributesValid()) {
        const calculatedCharacteristics = characteristics.calculateCharacteristics();
        ui.showCharacteristicProgressBars(calculatedCharacteristics);
    }
    else {
        ui.showAlert("Please enter valid details...", "alert-danger");
    }

    ui.hideLoader();
    Utilities.scrollToBottom();
}