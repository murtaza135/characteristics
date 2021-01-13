import { ui } from "./ui";


// Event Listeners
document.addEventListener("DOMContentLoaded", loadAdditionalInfo);
document.addEventListener("DOMContentLoaded", loadHeightInput);
ui.genderContainerUI.addEventListener("click", loadAdditionalInfo);
ui.btnCmUI.addEventListener("click", event => loadHeightInput(event, "cm"));
ui.btnFtUI.addEventListener("click", event => loadHeightInput(event, "ft"));


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