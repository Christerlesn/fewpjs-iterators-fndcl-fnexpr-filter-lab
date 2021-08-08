/*
Write findMatching- This function takes an array of drivers and a string as 
arguments, and returns the matching list of drivers. The function should be case 
insensitive.
*/

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === string.toLowerCase();
    })
}

/*
Write fuzzyMatch - This function takes an array of drivers and a string as 
arguments for querying the array, and returns all drivers whose names begin with 
the provided letters.
*/
function fuzzyMatch(drivers, string){
    return drivers.filter(function(word) {
       return word.charAt(0) === string.charAt(0);
    })
}

/*
Write matchName - This function takes an array of drivers and a string as arguments.
In this function, each element of the drivers array is a JavaScript object that has
a property of name. The function should return each element whose name property 
matches the provided string argument.
*/
function matchName(drivers, string){
    return drivers.filter(function(array){
        return array.name === string
    })
}