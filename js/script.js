// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


//1)Genero un array di numeri casuali a cui lego una function che metterò dentro le FUNCTION a piè pagina


const numeriDaStampareInConsole = 5 ;

const arraydiNumeriCasuali = [];

while(arraydiNumeriCasuali.length < numeriDaStampareInConsole){

    let numeroRandom = numeriCasuali (1 , 10);

    if(!arraydiNumeriCasuali.includes(numeroRandom)){
        
    console.log(numeroRandom , "Numero Random" , typeof numeroRandom);
    arraydiNumeriCasuali.push(numeroRandom);

    arraydiNumeriCasuali.sort();

    arraydiNumeriCasuali.innerHtml = 1;
    arraydiNumeriCasuali.classlist.add(arraydiNumeriCasuali);

    }

}

    
    
    console.log(arraydiNumeriCasuali , "Numeri casuali" ,  typeof arraydiNumeriCasuali);

    console.log(arraydiNumeriCasuali.lenght < 10);
    










//-----------
//  FUNCTION
//-----------

//funzione legata alla generazione dei numeri casuali
function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

