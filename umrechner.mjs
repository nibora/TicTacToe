export function umrechner() {

const euro = document.querySelector('#eu');
const kurs = document.querySelector('#ku');
const dollar = document.querySelector('#do');
let lastchange = "";

euro.addEventListener("input", () => {
    const eurovalue = Number(euro.value)
    const kursvalue = Number(kurs.value)
    
    if(isNaN(eurovalue) || isNaN(kursvalue)){
        alert("Fehler: Mindestens ein Wert entspricht keiner Zahl!")
    }else{
        dollar.value = eurovalue * kursvalue;
        lastchange = "euro";
    }
});

dollar.addEventListener("input", () => {
    const dollarvalue = Number(dollar.value)
    const kursvalue = Number(kurs.value)
    
    if(isNaN(dollarvalue) || isNaN(kursvalue)){
        alert("Fehler: Mindestens ein Wert entspricht keiner Zahl!")
    }else{
        euro.value = dollarvalue / kursvalue;
        lastchange = "dollar";
    }
});

kurs.addEventListener("input", () => {
    const dollarvalue = Number(dollar.value)
    const eurovalue = Number(euro.value)
    const kursvalue = Number(kurs.value)
    
    if(isNaN(dollarvalue) || isNaN(eurovalue)){
        alert("Fehler: Mindestens ein Wert entspricht keiner Zahl!")
    }else{
        if(lastchange==="dollar"){
            euro.value = dollarvalue / kursvalue;
        } else if (lastchange==="euro"){
            dollar.value = eurovalue * kursvalue;
        }
    }
});


}


