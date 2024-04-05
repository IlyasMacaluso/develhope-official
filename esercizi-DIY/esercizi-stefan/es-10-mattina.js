/* Dato un intero trovare il fattoriale del numero,
Esempio: fattoriale di 5 è 5*4*3*2*1 uguale a 120, fattoriale di 8 è
8*7*6*5*4*3*2*1 */

function factorial(n) {
    let c = 1
    for (let i = 1; i <= n; i++) {
        c = i * c
    }
    return c
}
console.log(factorial(8))
