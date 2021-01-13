import Utilities from "./utilities"


export class Characteristics {
    constructor(attributes) {
        this.firstname = attributes.firstname.toLowerCase();
        this.lastname = attributes.lastname.toLowerCase();
        this.age = parseInt(attributes.age);
        this.measurementType = attributes.measurementType.toLowerCase();
        this.cm = parseFloat(attributes.cm);
        this.ft = parseInt(attributes.ft);
        this.in = parseFloat(attributes.in);
        this.gender = attributes.gender;
        this.isMarried = (attributes.isMarried === "true");
        this.hasBeard = (attributes.hasBeard === "true");
        this.hasLongHair = (attributes.hasLongHair === "true");

        this._convert_feet_to_cm();
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
            const attractiveness = this._calculateAttractiveness();
            const intelligence = this._calculateIntelligenceAndWisdom();
            const drive = this._calculateDriveAndPassion();
            const goodCharacter = this._calculateGoodCharacter();

            const success = this._calculateChanceOfSuccess(
                attractiveness,
                intelligence,
                drive,
                goodCharacter
            );

            return {
                attractiveness: Math.round(attractiveness * 100),
                intelligence: Math.round(intelligence * 100),
                drive: Math.round(drive * 100),
                goodCharacter: Math.round(goodCharacter * 100),
                success: Math.round(success * 100)
            }
        }
        else {
            return {
                attractiveness: 0,
                intelligence: 0,
                drive: 0,
                goodCharacter: 0,
                success: 0
            };
        }
    }

    _calculateAttractiveness() {
        const firstnameCalc = Math.abs(Math.sin(this.firstname.length - 3.5));
        const lastnameCalc = Math.abs(Math.sin(this.lastname.length - 3.5));
        const ageCalc = Math.sin((Math.PI / 50) * this.age);
        const marriedCalc = (this.isMarried ? 0 : 1) / 2;

        let heightCalc;
        let attractiveness;

        if (this.gender === "male") {
            heightCalc = Math.sin(((Math.PI / 40) * this.cm));
            attractiveness = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
            attractiveness = (this.hasBeard ? attractiveness : attractiveness * 0.7);
        }
        else {
            heightCalc = Math.sin(((Math.PI / 40) * this.cm) + 1);
            attractiveness = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
            attractiveness = (this.hasLongHair ? attractiveness : attractiveness * 0.7);
        }

        return attractiveness;
    }

    _calculateIntelligenceAndWisdom() {
        const firstnameCalc = Math.abs(Math.sin(this.firstname.length - 5.5));
        const lastnameCalc = Math.abs(Math.sin(this.lastname.length - 4.5));
        const ageCalc = Utilities.clamp(this.age / 50, 0, 1);
        const marriedCalc = (this.isMarried ? 1 : 0) / 2;

        let heightCalc;
        let intelligence;

        if (this.gender === "male") {
            heightCalc = Math.sin(((Math.PI / 40) * this.cm) + 1.8);
            intelligence = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
            intelligence = (this.hasBeard ? intelligence : intelligence * 0.95);
        }
        else {
            heightCalc = Math.sin(((Math.PI / 40) * this.cm) + 1.8);
            intelligence = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
            intelligence = (this.hasLongHair ? intelligence : intelligence * 0.95);
        }

        return intelligence;
    }

    _calculateDriveAndPassion() {
        const firstnameCalc = Math.abs(Math.sin(this.firstname.length - 4.65));
        const lastnameCalc = Math.abs(Math.sin(this.lastname.length - 3.55));
        const ageCalc = Utilities.clamp(this.age / 35, 0, 1);
        const marriedCalc = (this.isMarried ? 1 : 0.7) / 2;

        let heightCalc;

        if (this.gender === "male") {
            heightCalc = Math.sin(((Math.PI / 60) * this.cm) - 1.5);
        }
        else {
            heightCalc = Math.sin(((Math.PI / 60) * this.cm) - 1.5);
        }

        const drive = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
        return drive;
    }

    _calculateGoodCharacter() {
        const firstnameCalc = Math.abs(Math.sin(this.firstname.length - 3));
        const lastnameCalc = Math.abs(Math.sin(this.lastname.length - 3.5));
        const ageCalc = Utilities.clamp(this.age / 40, 0, 1);
        const marriedCalc = (this.isMarried ? 1 : 0.5) / 2;

        let heightCalc;
        let goodCharacter;

        if (this.gender === "male") {
            heightCalc = Math.sin(((Math.PI / 100) * this.cm) - 3.4);
            goodCharacter = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
            goodCharacter = (this.hasBeard ? goodCharacter : goodCharacter * 0.85);
        }
        else {
            heightCalc = Math.sin(((Math.PI / 100) * this.cm) - 3.3);
            goodCharacter = (firstnameCalc + lastnameCalc + ageCalc + marriedCalc + heightCalc) / 4.5;
            goodCharacter = (this.hasLongHair ? goodCharacter : goodCharacter * 0.85);
        }

        return goodCharacter;
    }

    _calculateChanceOfSuccess(attractiveness, intelligence, drive, goodCharacter) {
        const marriedCalc = (this.isMarried ? 1 : 0.5) / 1.1;

        const success = Utilities.clamp(
            (attractiveness + (1.2 * intelligence) + (1.1 * drive) + (1.1 * goodCharacter) + marriedCalc) / (4 + (1 / 1.1)),
            0,
            1
        );

        return success;
    }


    _convert_feet_to_cm() {
        if (this.areAttributesValid()) {
            if (this.measurementType === "ft") {
                const INCHES_TO_CM = 2.54;

                const totalInches = (this.ft * 12) + this.in;
                const totalCm = totalInches * INCHES_TO_CM;

                this.cm = totalCm;
            }
        }
    }
}