console.log("CSS Theme toggler loaded and running!");

let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "darkgrey",
            fontColour: "white",
            "theme-100": "#402E7A"
        }
    },
    {
        name: "light",
        properties: {
            backgroundColour: "#4B70F5",
            fontColour: "black",
            "theme-100": "#4B70F5"
        }
    }
];

// Read theme name stored in local storage
// and update CSS variables based on that name
function getChosenTheme() {

}

// Set theme name stored in local storage
// and update CSS variables based on that name
function setChosenTheme() {
    
}

// Loop through properties key in chosen theme object
// and apply those properties to CSS
function updateCssVariables() {
    
}



let rootElement = document.querySelector(":root");

function getVariablesFromCSS(){
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--bacckgroundColour"));

    let rootStyles = getComputedStyle(rootElement);
    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();