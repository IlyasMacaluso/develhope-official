function Smartphone (brand, name, price){
    this.brand = brand
    this.name = name
    this.price = price
}

let smartphone1 = new Smartphone ("Samsung", "Galaxy S20", 1299)
let smartphone2 = new Smartphone ("Google", "Pixel 8", 999)

console.log(smartphone1)
console.log(smartphone2)