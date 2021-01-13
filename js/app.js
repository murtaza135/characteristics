import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", loadAdditionalInfo);
document.addEventListener("DOMContentLoaded", loadHeightInput);
ui.genderContainer.addEventListener("click", loadAdditionalInfoAfterClick);
ui.btnCmUI.addEventListener("click", (event) => loadHeightInput(event, "cm"));
ui.btnFtUI.addEventListener("click", (event) => loadHeightInput(event, "ft"));


function loadAdditionalInfo(event) {
    const gender = ui.getGenderRadioValue();
    ui.showAdditionalInfoBasedUponGender(gender);
    event.preventDefault();
}

function loadHeightInput(event, measurementType = "cm") {
    ui.showHeightInputBasedUponMeasurementType(measurementType);
    ui.changeHeightBtnColors(measurementType)
    event.preventDefault();
}

function loadAdditionalInfoAfterClick(event) {
    const oldGender = ui.getCurrentGenderValue();
    const newGender = ui.getGenderRadioValue();
    
    if (oldGender !== newGender) {
        ui.showAdditionalInfoBasedUponGender(newGender);
    }

    event.preventDefault();
}