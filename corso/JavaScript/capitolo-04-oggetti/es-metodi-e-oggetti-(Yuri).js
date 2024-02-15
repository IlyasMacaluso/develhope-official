function Smartphone (brand, name, price, originalPrice, sconto){
    this.brand = brand
    this.name = name
    this.price = price
    this.originalPrice = originalPrice
    this.sconto = sconto
  }
  
let smartphone1 = new Smartphone ("Google", "Pixel 8", 999, 999)
    
smartphone1.price = 999;
  
/*la funzione controlla se il prezzo originale coincide con quello attuale, 
e a seconda del risultato dell'operazione restituisce due output differenti*/

function printPrice (smartphone){
    if (smartphone.originalPrice === smartphone.price) {
        console.log(`Il prezzo del prodotto '${smartphone.name}' è di: ${smartphone.price}€`)
    } else {
        smartphone.sconto = 100 - (smartphone.price / smartphone.originalPrice * 100).toFixed(0)
        console.log(`Il prodotto '${smartphone.name}' è scontato del ${smartphone.sconto}%! Il nuovo prezzo è di ${smartphone.price}€`);
    }
}   

printPrice(smartphone1)