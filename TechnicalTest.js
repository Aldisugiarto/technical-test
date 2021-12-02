// ******************************************************************************//
//  *Author : Aldi Sugiarto
//  *Date   : December, 2nd 2021
//  *Task   : Technical Test
// ******************************************************************************//

// ---------------Soal No 1--------------- //
console.log("/------------------------------Soal No 1------------------------------/\n");

/**Function */
function checkXO(inputWord){
    let index, sX = 0, sO = 0;
    let result = false;
    inputWord = inputWord.toLowerCase();    //Change to lower case string format
    for(index = 0; index < inputWord.length; index++){  //Do the iteration to get sum of X and O
        if(inputWord[index] == 'x'){
            sX += 1;
            // console.log("Hello");
        }
        else{
            // DO NOTHING   
        }

        if(inputWord[index] == 'o'){
            sO += 1;
            // console.log("Hey");
        }
        else{
            // DO NOTHING   
        }
    }
    //Checking the number of X and O is same
    if(sX == sO){
        result = true;
    }
    else{
        result = false;
    }
    //Return value of function
    return result;
}

//Create console input from user
const prompt = require('prompt-sync')();
 
const inptWrd = prompt('Input string to check XO: ');
var res = checkXO(inptWrd);
console.log("Result check XO: " + res);
 

// ---------------Soal No 1--------------- //
console.log("/------------------------------Soal No 2------------------------------/\n");

/**Function */
function changeString(inputWord){
    if(inputWord){      //Checking for string data type
        var obj = {};
        let index;
        inputWord = inputWord.toLowerCase();
        for(index = 0; index < inputWord.length; index++){  //Iteration to get number of each character
            if(obj[inputWord[index]]){
                obj[inputWord[index]] += 1;
            }else{
                obj[inputWord[index]] = 1;
            }
        }
        let newString = "";
        for(index = 0; index < inputWord.length; index++){  //Iteration to change string value
            if (obj[inputWord[index]] > 1) {
                newString += ")";
            } else {
                newString += "(";
            }
        }
        //Return value of function
        return newString;
    }
}

//User input from console, to get new string
const inptString = prompt('Input string to change string: ');
res = changeString(inptString); 
console.log("Result change string: " + res);
