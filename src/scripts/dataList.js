// Declare data to use in the logic
let dataArray = [
    "Warthog",
    "Interceptor",
    "Herbie",
    "Lightning mcqueen",
    "Batmobile",
    "Bat tumbler",
    "Cybertruck",
    "Delorean",
    "Elanore",
    "Magic school bus",
    "Toyota corolla"
];

// Find elements on the page for us to use in the logic
let carsContainerElement = document.getElementById("carsContainer");

function renderData() {

    carsContainerElement.innerText = "";

    // Create elements to add to the page via the logic
    let carsContainerList = document.createElement("ul");

    // Do logic for each individual item in the array
    dataArray.forEach((car) => {

        // Verify what we are working with, just log it to see the data's value
        console.log(car);

        // Create a new HTML element to help us format the data's value
        let newCarEntry = document.createElement("li");

        // Set larger font size for the list items
        newCarEntry.style.fontSize = "20px";

        // Add the data to the new element with a space after the car name
        newCarEntry.innerText = `${car} `;

        // Add a button to each entry
        // Click on the button to remove the entry from the list
        let removeButton = document.createElement("button");
        removeButton.innerText = `Remove ${car}`;

        // Set button styles
        removeButton.style.backgroundColor = "lightyellow"; // Light yellow or cream color
        removeButton.style.fontSize = "15px";
        removeButton.style.padding = "5px 25px";
        removeButton.style.cursor = "pointer";
        removeButton.style.borderRadius = "5px";
        removeButton.style.marginLeft = "15px"; // Space between car name and button

        // Add hover effect for button color change
        removeButton.onmouseover = () => {
            removeButton.style.backgroundColor = "lightgreen";
        };
        removeButton.onmouseout = () => {
            removeButton.style.backgroundColor = "lightyellow";
        };

        removeButton.onclick = (() => removeCarFromDataList(car));

        // Add the removeButton to the car entry
        newCarEntry.appendChild(removeButton);

        // Add space between list items
        newCarEntry.style.marginBottom = "10px";

        // Add the nicely-formatted element into the list container
        carsContainerList.appendChild(newCarEntry);
    });

    // Add the list container onto the actual HTML page
    carsContainerElement.appendChild(carsContainerList);
}



function removeCarFromDataList(targetItemToRemove) {

    // Remove the target item from the dataArray
    dataArray = dataArray.filter((car) => car !== targetItemToRemove);

    // After the filtering is done, re-render the page with the "new" array
    renderData();
}



function addCarToDataList(event, targetInputId) {

    // Find the form element
    let formElement = document.getElementById("carsInputForm")
    // Use the form element.checkValidity() method and save the result
    let isFormValid = formElement.checkValidity();
    console.log("isFormValid value: " + isFormValid)
    // do a conditional based on that result value
    if (!isFormValid) {
        formElement.reportValidity(); 
        return;
    } 


    // Find the form from the event
    // Prevent the form from doing its default behaviour (refreshing the page)
    event.preventDefault();
    console.log("Add car to list function is now working!");

    // Find the input text field based on targetInputId
    let targetTextInput = document.getElementById(targetInputId);
    // Grab the string value from the text field
    console.log(targetTextInput.value);

    // Push the string value into dataArray
    dataArray.push(targetTextInput.value);

    // Clear out the input field text to be blank again
    targetTextInput.value = "";

    // Focus on the text input field again to enable quick data entry!
    targetTextInput.focus();

    // alert after submit
    alert("Submitted a new entry: " + dataArray[dataArray.length - 1]);

    // Call renderData() to update the page
    renderData();
}

let formInputButton = document.getElementById("formInputButton");
formInputButton.addEventListener("click", (event) => addCarToDataList(event, "carInputText"));