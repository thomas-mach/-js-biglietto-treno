// Calcolo prezzo biglietto
// sotto 18 anni sconto 20%
// sopra 65 anni sconto 40%
// prezzo base 0.21 euro/km

const prezzoBase = 0.21
// Capire eta del passeggero
let eta = parseInt(prompt ('Salve. Quanti anni hai?'))
// Capire la distanza da percorrere
let distanza = parseFloat(prompt ('Quanti chilometri vuoi percorrere? '))
// Calcolare prezzo biglieto a base di chilometri
const prezzoBiglietto = (prezzoBase * distanza)


// Calcolare prezzo a base d'eta
if (eta <=14)
    console.log('SEI TROPPO PICCOLO DEVI ESSE ACCOMPAGNATO')
if (eta < 18) {
    const sconto = (prezzoBiglietto * 0.8)
    console.log('Prezzo intero ' + prezzoBase + ' euro al km')
    console.log('Per le persone under 18 applichiamo lo sconto del 20%')
    console.log('Prezzo da scontare ' + prezzoBiglietto.toFixed(2) + ' euro')
    console.log('Il tuo prezzo scontato ' + sconto.toFixed(2) + ' euro')
    console.log('BUON VIAGGIO Piccolo tornado')
 } else if 
    (eta >= 65) {
        const sconto = (prezzoBiglietto * 0.6)
        console.log('Prezzo intero ' + prezzoBase + ' euro al km')
        console.log('Per le persone over 65 applichiamo lo scnto del 40%')
        console.log('Prezzo da scontare ' + prezzoBiglietto.toFixed(2) + ' euro')
        console.log('Il tuo prezzo scontato ' + sconto.toFixed(2) + ' euro')
        console.log('BUON VIAGGIO Campione del tempo')
} else {
    console.log('Prezzo intero ' + prezzoBase + ' euro al km')
    console.log('Per le persone come te non abbiamo alcun tipo do sconto devi pagare prezzo pieno!')
    console.log('Il tuo prezzo ' + prezzoBiglietto.toFixed(2) + ' euro')
    console.log('BUON VIAGGIO Pilastro della produttività')

}