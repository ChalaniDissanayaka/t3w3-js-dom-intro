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
        newCarEntry.style.fontSize = "25px";

        // Add the data to the new element with a space after the car name
        newCarEntry.innerText = `${car} `;

        // Add a button to each entry
        // Click on the button to remove the entry from the list
        let removeButton = document.createElement("button");
        removeButton.innerText = `Remove ${car}`;

        // Set button styles
        removeButton.style.backgroundColor = "lightyellow"; // Light yellow or cream color
        removeButton.style.fontSize = "16px";
        removeButton.style.padding = "6px 30px";
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

// Initial render
renderData();