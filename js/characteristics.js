export class Characteristics {
    constructor(attributes) {
        this.firstname = attributes.firstname.toLowerCase();
        this.lastname = attributes.lastname.toLowerCase();
        this.age = parseInt(attributes.age);
        this.measurementType = attributes.measurementType.toLowerCase();
        this.cm = parseFloat(attributes.cm);
        this.ft = parseInt(attributes.ft);
        this.in = parseInt(attributes.in);
        this.gender = attributes.gender;
        this.isMarried = (attributes.isMarried === "true");
        this.hasBeard = (attributes.hasBeard === "true");
        this.hasLongHair = (attributes.hasLongHair === "true");
    }


    areAttributesValid() {
        const reName = /^[A-Za-z-]{2,100}$/;

        // First name and last name
        if (!reName.test(this.firstname) || !reName.test(this.lastname)) {
            return false;
        }

        // Age
        if (isNaN(this.age) || this.age <= 0) {
            return false;
        }

        // Height
        if (this.measurementType === "cm") {
            if (isNaN(this.cm) || this.cm <= 0) {
                return false;
            }
        }
        else if (this.measurementType === "ft") {
            if (isNaN(this.ft) || this.ft <= 0 || isNaN(this.in) || this.in <= 0) {
                return false;
            }
        }
        else {
            return false;
        }

        // Gender
        if (this.gender !== "male" && this.gender !== "female") {
            return false;
        }

        return true;
    }


    calculateCharacteristics() {
        if (this.areAttributesValid()) {
            return {
                attractiveness: 48,
                intelligence: 89,
                drive: 76,
                goodCharacter: 67,
                success: 72
            };
        }
        else {
            return {
                attractiveness: 0,
                intelligence: 0,
                drive: 0,
                goodCharacter: 0,
                success: 0
            }
        }
    }
}