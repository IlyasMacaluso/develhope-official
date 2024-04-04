/*Stampare nel terminale un triangolo di asterischi di lato n di diverse
tipologie :
-
*
**
***
****
-
****
***
**
*-
*
**
***
****
-
****
***
**
*
*/

function fromN(n) {
    let string = "*".repeat(n)
    for (let i = 0; i < n; i++) {
        console.log(string)
        string = string.substr(1)
    }
}

function toN(n) {
    let string = "*"
    for (let i = 0; i < n; i++) {
        console.log(string)
        string = string.concat("*")
    }
}

function fromNtoN(n) {
    let string = "*".repeat(n)
    for (let i = -n + 1; i <= n - 1; i++) {
        if (i < 0) {
            console.log(string)
            string = string.substr(1)
        } else {
            console.log(string)
            string = string.concat("*")
        }
    }
}

toN(6)

fromN(6)

fromNtoN(6)
