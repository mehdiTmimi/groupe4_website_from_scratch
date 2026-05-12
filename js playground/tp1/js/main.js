const resetbtn = document.getElementById("resetbtn")
const vider = () => {
    note1.value = ""
    note2.value = ""
    note3.value = ""
    note4.value = ""

}
resetbtn.addEventListener("click", () => {
    if (confirm("voulez vous vraiment effacer ?"))
        vider()

})

moyennebtn.addEventListener("click", () => {
    if (note1.value === "" || note2.value === "" || note3.value === "" || note4.value === "") {
        alert("Veuillez remplir toutes les notes avant de calculer la moyenne.")
        return
    }
    const n1 = parseFloat(note1.value)
    const n2 = parseFloat(note2.value)
    const n3 = parseFloat(note3.value)
    const n4 = parseFloat(note4.value)
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        alert("Veuillez entrer des valeurs numériques pour les notes.")
        return
    }
    const moyenne = (n1 + n2 + n3 + n4) / 4
    let mention = ""
    if (moyenne > 14)
        mention = "Très bien"
    else if (moyenne > 10)
        mention = "assez bien"
    else
        mention = "Insuffisant"
    const data = {
        date: new Date().toLocaleDateString(),
        dateTime: new Date().toLocaleTimeString(),
        note1: n1,
        note2: n2,
        note3: n3,
        note4: n4,
        moyenne: moyenne,
        matiere1: "Mathematiques",
        matiere2: "Physique",
        matiere3: "Informatique",
        matiere4: "Anglais",
        mention: mention
    }
    addMoyenneToList2(data)
    moyenneHistory.push(data)
    localStorage.moyenneHistory = JSON.stringify(moyenneHistory)
    vider()
})


let moyenneHistory = JSON.parse(localStorage.moyenneHistory || "[]")
for(let i=0; i<moyenneHistory.length; i++){
    addMoyenneToList2(moyenneHistory[i])
}

