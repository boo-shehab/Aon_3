const arr = [
    {
        text: `I can do anything once I've had a cup of SleepyTime Tea, perhaps even fall sleep.`,
        author: `Dillon Brady`
    },{
        text: `I can do anything once I've had a cup of SleepyTime Tea, perhaps even fall sleep.`,
        author: `Dillon Brady`
    },{
        text: `I can do anything once I've had a cup of SleepyTime Tea, perhaps even fall sleep.`,
        author: `Dillon Brady`
    }
]

const stickyNotesContainer = document.getElementById("flex");
const addNewNote = () => {
    const note = {
        text: '',
        author: ""
    }
    arr.unshift(note)
    showNotes();
}

const showNotes = () => {
    
    stickyNotesContainer.innerHTML = ''
    const addBtn = `
    <div class="quote-container">
        <i class="pin"></i>
            <blockquote class="note yellow">
                <button onclick="addNewNote()" class="addBtn">
                    +
                </button>
            </blockquote>
        </div>
        `
        stickyNotesContainer.innerHTML += addBtn
    for(let i = 0 ; i < arr.length; i++) {
        const note = `
            <div class="quote-container">
            <i class="pin"></i>
                <blockquote class="note yellow">
                    ${arr[i].text === '' ? 
                        `<input type="text" id="text-${i}" />`:
                    `${arr[i].text}`}
                    <cite class="author">
                    ${arr[i].author === '' ? 
                        `<input type="text" id="author-${i}" />`:
                        `${arr[i].author}`
                    }
                    
                    </cite>
                </blockquote>
            </div>
        `
        stickyNotesContainer.innerHTML += note
    }
}
stickyNotesContainer.addEventListener("change", (e) => {
    for(let i = 0; i < arr.length; i++) {
        if (e.target && e.target.id === `text-${i}`) {
            const note = {
                text: e.target.value,
                author: arr[i].author
            } 

            arr.splice(i, 1,note)
            showNotes()
        }else if (e.target && e.target.id === `author-${i}`) {
            const note = {
                text: arr[i].text,
                author: e.target.value
            } 

            arr.splice(i, 1,note)
            showNotes()
        }

    }
})
showNotes()