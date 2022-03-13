const ps = require("prompt-sync");
const prompt = ps();

class MaxMinAverage {
    handleInput(message) {
        const userInput = prompt(message);

        return userInput;
    }

    handleBilangan(data) {
        const result = data.split(/[,\s]/);

        return result;
    }

    handleMaxMin(data, option) {
        const value = data.sort();
        let result = [];

        switch (option) {
            case 1:
                result.push(value[0]);
                break;
        
            case 2:
                result.push(value[value.length - 1]);
                break;
        
            default:
                return "Pilihan tidak tersedia"
        }

        return result;
    }

    handleAverage(data) {
        let result = 0;

        for (let i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }

        return result / data.length;
    }

    display() {
        console.info("\nSelamat datang");

        const userInput = this.handleInput("Silahkan masukan angka: ");
        const data = this.handleBilangan(userInput);

        const min = this.handleMaxMin(data, 1);
        const max = this.handleMaxMin(data, 2);
        const average = this.handleAverage(data);

        return `Min: ${ min }, Max: ${ max }, Average: ${ average }`;
    }
}

const data = new MaxMinAverage;
console.info(data.display());