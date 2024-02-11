const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

console.log("isSunnyDay AND isSummer:" , isSunnyDay && isSummer) //true -> entrambe verificate
console.log("isSunnyDay AND NOT(isAutumn):" , isSunnyDay && !isAutumn) //true -> entrambe verificate
console.log("itIsRaining OR isSummer:" , itIsRaining || isSummer) //true -> almeno una verificata

console.log("isAutumn AND isSummer:" , isAutumn && isSummer) //false -> almeno una non verificata
console.log("isSunnyDay AND itIsRaining:" , isSunnyDay && itIsRaining) //false -> almeno una non verificata
console.log("itIsRaining OR isAutumn:" , itIsRaining || isAutumn) //false -> entrambe non verificate
