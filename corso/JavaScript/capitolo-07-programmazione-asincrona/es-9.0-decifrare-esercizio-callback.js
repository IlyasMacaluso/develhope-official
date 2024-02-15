let persons = [{ name: "John", age: 30 }, { name: "John", age: 20 }] 

function fetchDataFromAPI(data, callback) { 
    //riceve come parametri data, e una callback che effettuerà delle operazioni su data
      const filteredData = callback(data);
      //salviamo in filteredData il risultato dell'operazione che la callback effettua su data
      console.log("Filtering data..");
      //stampiamo subito il messaggio "Filtering data..."
      const loadingID = setInterval(() => {
      //creiamo un setInterval e lo assegnamo a loadingID (per potere utilizzare clearInterval dopo)
        console.log(".");
      }, 950);
      //stampa un punto al secondo per simulare un caricamento
      setTimeout(() => {
      //creiamo un setTimeout per simulare il ritardo dovuto all'elaborazione dei dati  
        console.log(filteredData);
        clearInterval(loadingID);
      }, 2000);
      //dopo due secondi stampiamo il risultato dell'operazione che callback effettua su data e fermiamo il setInterval
    }
    
    function handleData(error, data) {
            return data.filter((person) => person.name === "John");
    }
    //la funzione che viene richiamata da fetchDataFromAPI, e che filtra i dati ricevuti come argomento da essa
    
    fetchDataFromAPI(persons, handleData);
    //chiamiamo la funzione fetchDataFromAPI che riceve come argomento persons (array) a sua volta richiama come callback handleData