import { ui } from "./ui";


// Event Listeners
document.addEventListener("DOMContentLoaded", loadAdditionalInfo);
document.addEventListener("DOMContentLoaded", loadHeightInput);
ui.genderContainerUI.addEventListener("click", loadAdditionalInfo);
ui.btnCmUI.addEventListener("click", event => loadHeightInput(event, "cm"));
ui.btnFtUI.addEventListener("click", event => loadHeightInput(event, "ft"));
ui.btnSubmit.addEventListener("click", loadCharacteristicProgressBars);

// Event Callbacks
function loadAdditionalInfo() {
    const oldGender = ui.getCurrentGenderValue();
    const newGender = ui.getGenderValueFromDom();
    
    if (oldGender !== newGender) {
        ui.showAdditionalInfoBasedUponGender(newGender);
    }
}

function loadHeightInput(event, measurementType = "cm") {
    ui.showHeightInputBasedUponMeasurementType(measurementType);
    ui.changeHeightBtnColors(measurementType)
    event.preventDefault();
}

function loadCharacteristicProgressBars() {
    const characteristics = {
        attractiveness: 48,
        intelligence: 89,
        drive: 76,
        goodCharacter: 67,
        success: 72
    }

    ui.showCharacteristicProgressBars(characteristics);
}