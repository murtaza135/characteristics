import Utilities from "./utilities"
import { Alert, AdditionalInfoRadio, HeightInput, CharacteristicProgressBars } from "./components"


class UI {
    constructor() {
        // UI State
        this.currentGenderValue = null;
        this.currentHeightMeasurementType = null;

        // Main Containers
        this.alertContainerUI = document.querySelector(".alert-container");
        this.heightContainerUI = document.querySelector(".height-container");
        this.genderContainerUI = document.querySelector("#gender-container");
        this.additionalInfoContainerUI = document.querySelector("#additional-info-container");
        this.loaderUI = document.querySelector("#loader");
        this.resultsContainerUI = document.querySelector("#results-container");
        
        // Child Containers
        this.heightUI = document.querySelector("#height");
        this.resultsUI = document.querySelector("#results");
        
        // Inputs
        this.firstNameUI = document.querySelector("#firstname");
        this.lastNameUI = document.querySelector("#lastname");
        this.ageUI = document.querySelector("#age");
        
        // Checked Radio Buttons
        this.genderRadioUI = () => document.querySelectorAll("input[name=gender]:checked")[0];
        this.isMarriedRadioUI = () => document.querySelectorAll("input[name=is-married]:checked")[0];
        this.hasBeardRadioUI = () => document.querySelectorAll("input[name=has-beard]:checked")[0];
        this.hasLongHairRadioUI = () => document.querySelectorAll("input[name=has-long-hair]:checked")[0];
        
        // Buttons
        this.btnCmUI = document.querySelector("#btn-cm");
        this.btnFtUI = document.querySelector("#btn-ft");
        this.btnSubmit = document.querySelector("#submit");
    }


    getCurrentGenderValue() {
        return this.currentGenderValue;
    }

    getGenderValueFromDom() {
        this.currentGenderValue = this.genderRadioUI().value
        return this.currentGenderValue;
    }

    getAllFormDetails() {
        const heightChildren = this.heightUI.children;
        const measurementType = heightChildren.length === 1 ? "cm" : "ft";
        const cm = heightChildren.length === 1 ? heightChildren.item(0).value : null;
        const ft = heightChildren.length === 2 ? heightChildren.item(0).value : null;
        const inches = heightChildren.length === 2 ? heightChildren.item(1).value : null;

        const hasBeard = this.hasBeardRadioUI() ? this.hasBeardRadioUI().value : null;
        const hasLongHair = this.hasLongHairRadioUI() ? this.hasLongHairRadioUI().value : null;

        return {
            firstname: this.firstNameUI.value,
            lastname: this.lastNameUI.value,
            age: this.ageUI.value,
            measurementType: measurementType,
            cm: cm,
            ft: ft,
            in: inches,
            gender: this.genderRadioUI().value,
            isMarried: this.isMarriedRadioUI().value,
            hasBeard: hasBeard,
            hasLongHair: hasLongHair
        };
    }

    showAdditionalInfoBasedUponGender(gender) {
        const additionalInfoRadio = new AdditionalInfoRadio(gender);
        this.additionalInfoContainerUI.innerHTML = "";
        this.additionalInfoContainerUI.appendChild(additionalInfoRadio);
    }

    changeHeightInputState(measurementType) {
        this.currentHeightMeasurementType = measurementType;
        this.showHeightInputBasedUponMeasurementType(measurementType);
        this.changeHeightBtnColors(measurementType);
    }

    showHeightInputBasedUponMeasurementType(measurementType) {
        const heightInput = new HeightInput(measurementType);
        this.heightUI.innerHTML = "";

        for (const index in heightInput) {
            this.heightUI.appendChild(heightInput[index]);
        }
    }

    changeHeightBtnColors(measurementType) {
        if (measurementType === "cm") {
            if (this.btnFtUI.classList.contains("active")) {
                this.btnFtUI.classList.remove("active");
            }

            this.btnCmUI.classList.add("active");
        }
        else {
            if (this.btnCmUI.classList.contains("active")) {
                this.btnCmUI.classList.remove("active");
            }

            this.btnFtUI.classList.add("active");
        }
    }

    showCharacteristicProgressBars(characteristics) {
        const characteristicProgressBars = new CharacteristicProgressBars(characteristics);
        this.resultsUI.innerHTML = "";
        this.resultsUI.appendChild(characteristicProgressBars);
        this.resultsContainerUI.style.display = "block";
    }

    showLoader() {
        this.loaderUI.style.display = "block";
    }

    hideLoader() {
        this.loaderUI.style.display = "none";
    }
}


export const ui = new UI();