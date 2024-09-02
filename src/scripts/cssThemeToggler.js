console.log("CSS Theme toggler loaded and running!");

let rootElement = document.querySelector(":root");
let themeToggleButton = document.getElementById("themeToggle");
let randomThemeToggleButton = document.getElementById("randomThemeToggle");

let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "#4c565b",
            fontColour: "white",
            "theme-100": "#27353d"
        }
    },
    {
        name: "light",
        properties: {
            backgroundColour: "#a5b1b7",
            fontColour: "black",
            "theme-100": "#a5b1b7"
        }
    }
];

[themeToggleButton, randomThemeToggleButton].forEach(button => {
    button.style.padding = "10px 20px";
    button.style.margin = "15px 5px";
    button.style.borderRadius = "5px";
    button.style.border = "none";
    button.style.backgroundColor = "#36C2CE";
    button.style.color = "black";
    button.style.cursor = "pointer";
    
});


// Adjust hover effects
themeToggleButton.onmouseover = () => {
    themeToggleButton.style.backgroundColor = "#478CCF";
};
themeToggleButton.onmouseout = () => {
    themeToggleButton.style.backgroundColor = "#36C2CE";
};

randomThemeToggleButton.onmouseover = () => {
    randomThemeToggleButton.style.backgroundColor = "#478CCF";
};
randomThemeToggleButton.onmouseout = () => {
    randomThemeToggleButton.style.backgroundColor = "#36C2CE";
};

// Event listener for random theme toggle
randomThemeToggleButton.addEventListener("click", () => {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = "#ffffff"; // Ensuring text is visible on any background
});

// Read theme name stored in local storage
// and update CSS variables based on that name
function getChosenTheme() {
    let foundTheme = localStorage.getItem("theme");
    console.log(foundTheme);
    return foundTheme;
}

// Set theme name stored in local storage
// and update CSS variables based on that name
function setChosenTheme(newThemeName) {
    localStorage.setItem("theme", newThemeName);
    updateCssVariables();
}

if (getChosenTheme() == null) {
    // If a theme DOES NOT exist in local storage, 
	// get the system light/dark preference 
	// and apply that.
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if(darkThemeMq.matches) {
        // theme set to dark.
        setChosenTheme("dark");  
        console.log("No theme found, applied the dark theme")
    } else {
        // theme set to light.
        setChosenTheme("light");
        console.log("No theme found, applied the light theme")
    }
} else {
    // If a theme Does exist in local storage,
    // apply that theme's proprties to CSS
    updateCssVariables();
}

function updateButtonText() {
    // Read the current theme
    if (getChosenTheme() == "dark") {
        // Change button text to say other theme
        themeToggleButton.innerText = "Change theme to Light";
    } else {
        themeToggleButton.innerText = "Change theme to Dark";
    }
    
}


function toggleTheme() {
    // if ("dark" == "light"){
    // if ("light" == "dark"){
    if(getChosenTheme() == "dark"){
        // set it to light
        setChosenTheme("light");
    } else {
        // set it to dark
        setChosenTheme("dark");
    };
} 



// Loop through properties key in chosen theme object
// and apply those properties to CSS
function updateCssVariables(){
	// Find the matching theme object
	let matchingTheme = themes.find(themeObject => themeObject.name == getChosenTheme());
	console.log(matchingTheme);

	// Find the properties object in the matching theme object 
	// Loop through all properties 
	Object.keys(matchingTheme.properties).forEach(cssProperty => {
		console.log(cssProperty + ": " + matchingTheme.properties[cssProperty]);

		// Apply property value to CSS variables
		rootElement.style.setProperty(`--${cssProperty}`, matchingTheme.properties[cssProperty]);

	})
	// for (const cssProperty of matchingTheme.properties) {
	// 	console.log(cssProperty);
	// }
    document.body.style.backgroundColor = matchingTheme.properties.backgroundColour;
    document.body.style.color = matchingTheme.properties.fontColour;

	updateButtonText();
}

// Attach the toggleTheme function to the themeToggle button
themeToggleButton.onclick = toggleTheme;
// themeToggleButton.addEventListener("click", toggleTheme);


function getVariablesFromCSS(){
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--bacckgroundColour"));

    let rootStyles = getComputedStyle(rootElement);
    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();