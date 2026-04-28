const resetbtn = document.getElementById("resetbtn")
resetbtn.addEventListener("click", () => {
    if (confirm("voulez vous vraiment effacer ?")) {
        note1.value = ""
        note2.value = ""
        note3.value = ""
        note4.value = ""
    }
})