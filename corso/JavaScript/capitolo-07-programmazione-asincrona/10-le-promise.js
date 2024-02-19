function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Ok");
      } else {
        reject("Not Ok");
      }
    }, 1000);
  });
}

/* le promise possono trovarsi in 3 stati
-Pending: stato iniziale, ne completata, nè respinta
-Fullfilled: completata con successo (resolve)
-Rejected: completata con un errore (reject) */

const check = checkAge(16)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
