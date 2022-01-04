var username;
var theme;

// Set user's name
function setName(name){
    username = name;
}

// Get user's name
function getName(){
    return username;
}

// Set theme
function setTheme(newTheme){

    if (newTheme == "darkMode"){

    } else if (newTheme == "lightMode"){

    } else if (newTheme == "unicornVomit"){
        console.log("Theme changed to 'Unicorn Vomit' - cringe, but I'll allow it.")
    } else {
        console.log(`Hmm, that's funny, there's no such theme as ${newTheme}`);
    }

}

// Alert
alert("Bazinga!");
prompt("Enter your name:");