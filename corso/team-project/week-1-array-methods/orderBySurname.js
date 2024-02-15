//NOTA: (il filter filtra i VALORI, il map PUò FILTRARE le PROPRIETà)
function sortBySurname(array) {
    const surnames = array.map(item => `${item.surname} ${item.surname}`)
    return surnames
}

console.log(sortBySurname(teamMembers))

//   teamMembers.sort((a, b) => {
//     const nameA = a.surname.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.surname.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1; //modifica l'indice
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     // names must be equal
//     return 0;
//   })
// );