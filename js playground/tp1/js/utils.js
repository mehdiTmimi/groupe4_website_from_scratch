const addMoyenneToList = (date, dateTime, mention, matiere1, note1,
    matiere2, note2, matiere3, note3, matiere4, note4, moyenne) => {
    let mentionClass = ""
    if (moyenne > 14)
        mentionClass = "mention-good"
    else if (moyenne > 10)
        mentionClass = "mention-okay"
    else
        mentionClass = "mention-low"
    historyList.innerHTML += `
    <li class="history-item">
                    <div class="history-top">
                        <div class="history-meta">
                            <span class="date">${date}</span>
                            <span class="time">${dateTime}</span>
                        </div>
                        <div class="history-mention ${mentionClass}">${mention}</div>
                    </div>
                    <div class="history-notes">
                        <div class="note-chip"><span class="note-label">${matiere1}</span><span class="note-value">${note1}</span></div>
                        <div class="note-chip"><span class="note-label">${matiere2}</span><span class="note-value">${note2}</span></div>
                        <div class="note-chip"><span class="note-label">${matiere3}</span><span class="note-value">${note3}</span></div>
                        <div class="note-chip"><span class="note-label">${matiere4}</span><span class="note-value">${note4}</span></div>
                    </div>
                    <div class="history-bottom">
                        <div class="moyenne-display">
                            <span class="moyenne-label">Moyenne</span>
                            <span class="moyenne-value">${moyenne}<small>/20</small></span>
                        </div>
                        <button type="button" class="btn-erase" aria-label="Supprimer l'entrée">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18"/>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                                <path d="M10 11v6"/>
                                <path d="M14 11v6"/>
                            </svg>
                            <span>Effacer</span>
                        </button>
                    </div>
                </li>`
}
