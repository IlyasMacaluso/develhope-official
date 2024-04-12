/*
Esercizio 1
1. Crea un array di oggetti rappresentanti studenti che abbiano che come chiavi (nome,cognome,età,voto)
2. Scrivi una funzione che prenda come parametro l'array di studenti e ritorni un array di stringhe in formato nome-cognome
3. Scrivi una funzione che ritorni un array con solo gli studenti maggiorenni
4. Scrivi una funzione che calcoli la media dei voti 
*/

/* const students = [
    { id: 1, name: 'Mario', surname: 'Ressi', age: 21, rating: 8 },
    { id: 2, name: 'Fario', surname: 'Tossi', age: 16, rating: 6 },
    { id: 3, name: 'Tario', surname: 'Fossi', age: 31, rating: 5 },
    { id: 4, name: 'Qario', surname: 'Rossa', age: 12, rating: 8 },
  ];

  function modifyArray (array) {
    let nameSurname = array.map(student => {
        return `${student.name}, ${student.surname}`
    })
    return nameSurname
  }

  function filterArray (array) {
    adultStudents = array.filter(student => student.age > 18)
    return adultStudents
  }
function calcAvg (array) {
    let sum = array.reduce((cumulator, num) => num.rating + cumulator, 0)
    return sum / array.length
}

  console.log(modifyArray(students))
  console.log(filterArray(students))
  console.log(calcAvg(students)) */

/*

Esercizio 2 
-Supponiamo di avere un array di oggetti che rappresentano prodotti in un negozio online.
-Stampa in console la proprietà name di tutti i prodotti 
-scrivi una funzione filterProducts() che accetti l'array products e una categoria come argomenti e restituisca un nuovo array contenente solo i prodotti della categoria specificata.
*/

const products = [
    { id: 1, name: 'iPhone 12', category: 'smartphone', price: 999 },
    { id: 2, name: 'Samsung Galaxy S20', category: 'smartphone', price: 899 },
    { id: 3, name: 'iPad Air', category: 'tablet', price: 599 },
    { id: 4, name: 'MacBook Pro', category: 'laptop', price: 1499 },
    { id: 5, name: 'Apple Watch Series 6', category: 'wearable', price: 399 },
    { id: 6, name: 'Sony PlayStation 5', category: 'gaming', price: 499 },
    { id: 7, name: 'Xbox Series X', category: 'gaming', price: 499 },
  ];

  products.forEach(product => console.log(product.name))

  function filterProducts(array, category){
    let filteredProducts = array.filter(product => product.category === category)
    return filteredProducts
  }

console.log(filterProducts(products, "gaming"))