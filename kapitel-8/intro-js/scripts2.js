// var namn = prompt("Vad heter du?")
// var ålder = prompt("Hur gammal är du?")
// alert("Hej, " + namn + " du är " + ålder + " år gammal.")
// console.log("Funkar")

// Be användaren mata in 2 tal och skriv summan

// var tal1 = prompt("Skriv ett nummer")
// var tal2 = prompt("Skriv ett nummer igen")
// var summa = parseInt(tal1) + parseInt(tal2)
// alert("Summan av talen är " + summa)

// var svar = 0
// var föddmånad = prompt("Vilken månad år du född? (ange tal)")

// if (föddmånad > 6) {
//     svar = 18
// } else {
//     svar = 19
// }

// document.writeln("Du kommer att vara " + svar + " år gammal vid studenten.")

var slumptal1 = Math.floor(Math.random() * 100)
var slumptal2 = Math.floor(Math.random() * 100)
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + " ? ")
var summa = slumptal1 + slumptal2
if (gissning == summa) {
    document.writeln("<h1>Du har gissat rätt, bra jobbat! 😁👍</h1>")
} else {
    document.writeln("<h1>Du suger 😒</h1>")
}