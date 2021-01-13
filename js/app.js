import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", loadAdditionalInfo);
ui.genderContainer.addEventListener("click", loadAdditionalInfoAfterClick);


function loadAdditionalInfo() {
    const gender = ui.getGenderRadioValue();
    ui.showAdditionalInfoBasedUponGender(gender);
}

function loadAdditionalInfoAfterClick() {
    const oldGender = ui.getCurrentGenderValue();
    const newGender = ui.getGenderRadioValue();
    
    if (oldGender !== newGender) {
        ui.showAdditionalInfoBasedUponGender(newGender);
    }
}