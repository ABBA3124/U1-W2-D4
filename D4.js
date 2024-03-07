/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2
}
console.log("l'area del rettangolo è:", area(10, 15))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (number1, number2) {
  if (number1 === number2) {
    let risultatoMoltiplicatoPer3 = (number1 + number2) * 3
    console.log(
      "la somma dei due parametri moltiplicato per 3 è:",
      risultatoMoltiplicatoPer3
    )
    return risultatoMoltiplicatoPer3
  } else {
    let somma = number1 + number2
    console.log("la somma dei due parametri è:", somma)
    return somma
  }
}
crazySum(50, 50)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (number) {
  const differenza = Math.abs(number - 19)
  if (number > 19) {
    let moltiplicatoPer3 = differenza * 3
    console.log("maggiore di 19 moltiplicato per 3 è:", moltiplicatoPer3)
    return moltiplicatoPer3 //messo per via dell'esercizio, ritenevo più "appropiato" inserire direttamente il console log con le info
  } else {
    console.log("la differenza è di:", differenza)
    return differenza //messo per via dell'esercizio, ritenevo più "appropiato" inserire direttamente il console log con le info
  }
}
console.log(crazyDiff(48))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400
}
console.log("True or False?", boundary(57), "!")
console.log("True or False?", boundary(19), "!")
console.log("True or False?", boundary(400), "!")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (cambio) {
  if (cambio.startsWith("EPICODE")) {
    return cambio
  } else {
    return "EPICODE" + cambio
  }
}
console.log(epify (" davide"))
console.log(epify ("EPICODE"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (number) {
    const multiplo7 = number % 7 === 0
    const multiplo3 = number % 3 === 0
    return multiplo7 || multiplo3
}
console.log (check3and7(9))
console.log (check3and7(67))
console.log (check3and7(10))
console.log (check3and7(115))
console.log (check3and7(70))


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (reverse) {
    return reverse.split('').reverse().join('')
}
console.log (reverseString("EPICODE"))
console.log (reverseString("DAVIDE"))
console.log (reverseString("TASSELLATORE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(laPrimaLetteraMaiuscola) {
    const lista = laPrimaLetteraMaiuscola.split(' ')
    let upper = ''

    for (let j = 0; j < lista.length; j++) {
        const word = lista[j].split('')

        for (let n = 0; n < word.length; n++) {
            if (n !== 0) {
                upper += word[n]
            } else {
                upper += word[n].toUpperCase()
            }
        }
        upper += ' '
    }
    return upper
}

console.log(upperFirst("ciao come stai ?"))


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stringa) {
    return stringa.slice(1, - 1)
}
console.log (cutString("come stai ?"))
console.log (cutString("come stai"))
console.log (cutString("davide"))
console.log (cutString("epicode"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
    const numbers = []
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * 11))
    } return numbers
}
console.log(giveMeRandom(1))