function multiply() {
    console.log('hello');
    //input
    const firstNumber = document.getElementById("FirstNumber").value;
    console.log(firstNumber);

    const secondNumber = document.getElementById("SecondNumber").value;
    console.log(secondNumber);
    //process
    const answer = firstNumber * secondNumber;
    console.log(answer);

    //output
    document.getElementById("Output").innerText = answer;
}


function calcAge() {
    console.log('calcAge');

    //input
    const years = document.getElementById("years").value;
    console.log(years);

    //process
    const days = years * 365;
    console.log(days);

    //output
    document.getElementById("ageOutput").innerText = days;
}

function increment() {
    //test the link
    console.log('increment linked');

    //input
    const strIncrement = document.getElementById("inputIncrement").value;

    //process
    let ansIncrement = parseInt(strIncrement);
    //ansIncrement = ansIncrement + 1; //option 1
    //ansIncrement += 1; //option 2
    ansIncrement++; //option 3

    console.log(ansIncrement);

    //output
    document.getElementById("parIncrement").innerText = ansIncrement;

}

function convert() {
    //test the link
    console.log('convert linked');

    //input
    const strConvert = document.getElementById("inputConvert").value;

    //process
    let ansConvert = parseInt(strConvert);
    ansConvert *= 60 *60;

    console.log(ansConvert);

    //output
    document.getElementById("parConvert").innerText = ansConvert + " seconds";

}

function arrayElement() {
    //test the link
    console.log('array element linked');

    //input
    const strArray1 = document.getElementById("inputArray1").value;
    const strArray2 = document.getElementById("inputArray2").value;
    const strArray3 = document.getElementById("inputArray3").value;

    //process
    const ansArray = [strArray1, strArray2, strArray3];// defined
    const firstElement = ansArray[0]; //strArray1
    // const secondElement = ansArray[1]; //strArray2
    // const thirdElement = ansArray[2]; //strArray3
    
    // const fourthElement = ansArray[3]; // undefined. Out side of the array length

    // console.log(firstElement, secondElement, thirdElement, fourthElement);
 
    //output
    document.getElementById("parArray").innerText = firstElement;

}

/**
 * Gets the body mass index of a person
 * @param {string} mass mass input value as string
 * @param {string} height height input value as string
 * @returns 
 */
function bmi(mass, height) {
    
    const intMass = parseInt(mass);
    const intHeight = parseInt(height);

    const answer = divide(intMass, squared(intHeight));

    return answer;
}

/**
 * divides one number from the second number
 * @param {number} firstNumber the nominator
 * @param {number} secondNumber the denominator
 * @returns 
 */
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

/**
 * multiplies a number by itself
 * @param {number} number the number to multiply with
 * @returns 
 */
function squared(number) {
    return number * number;
}