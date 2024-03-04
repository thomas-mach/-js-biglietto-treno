// Calcolo prezzo biglietto
// sotto 18 anni sconto 20%
// sopra 65 anni sconto 40%
// prezzo base 0.21 euro/km

const prezzoBase = 0.21
// Capire eta del passeggero
let eta = parseInt(prompt ('Salve. Quanti anni hai?'))
// Finche l'eta e un numero intero proseguire
while (isNaN(parseInt(eta)))
    eta = prompt('Per favore, inserisci un numero intero')
// Capire la distanza da percorrere
let distanza = parseInt(prompt ('Quanti chilometri vuoi percorrere? '))
// Finche la distanza e un numero intero proseguire
while (isNaN(parseInt(distanza)))
    distanza = prompt('Per favore, inserisci un numero intero')
// Calcolare prezzo biglieto a base di chilometri
const prezzoBiglietto = (prezzoBase * distanza)


// Calcolare prezzo a base d'eta
if (eta <=14)
    console.log('SEI TROPPO PICCOLO DEVI ESSE ACCOMPAGNATO')
//  SE minorenne 
if (eta < 18) {
    // calcolo sconto del 20% moltiplico prezzo biglietto per 0.2
    const sconto = (prezzoBiglietto * 0.2)
    // calcolo prezzo scontato
    const prezzoScontato = (prezzoBiglietto - sconto)
    console.log('Prezzo intero ' + prezzoBase + ' euro al km')
    console.log('Per le persone under 18 applichiamo lo sconto del 20%')
    console.log('Prezzo da scontare ' + prezzoBiglietto.toFixed(2) + ' euro')
    console.log('Il tuo prezzo scontato ' + prezzoScontato.toFixed(2) + ' euro')
    console.log('BUON VIAGGIO Piccolo tornado')
// SE over 65
 } else if 
    (eta >= 65) {
        // calcolo sconto del 40% moltiplico prezzo biglietto per 0.4
        const sconto = (prezzoBiglietto * 0.4)
        // calcolo prezzo scontato
        const prezzoScontato = (prezzoBiglietto - sconto)
        console.log('Prezzo intero ' + prezzoBase + ' euro al km')
        console.log('Per le persone over 65 applichiamo lo scnto del 40%')
        console.log('Prezzo da scontare ' + prezzoBiglietto.toFixed(2) + ' euro')
        console.log('Il tuo prezzo scontato ' + prezzoScontato.toFixed(2) + ' euro')
        console.log('BUON VIAGGIO Campione del tempo')
//ALTRIMENTI prezzo pieno
} else {
    console.log('Prezzo intero ' + prezzoBase + ' euro al km')
    console.log('Per le persone come te non abbiamo alcun tipo do sconto devi pagare prezzo pieno!')
    console.log('Il tuo prezzo ' + prezzoBiglietto.toFixed(2) + ' euro')
    console.log('BUON VIAGGIO Pilastro della produttività')

}