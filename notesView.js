const model = require('./notesModel')

class notesView {

    constructor(model) {
        this.model = model;
        this.buttonEl = document.querySelector('#add-note-button');
        this.buttonEl.addEventListener('click', () => {
            const newNote = document.querySelector('#message-input').value;
              this.addNewNote(newNote)
        })

    }

    addNewNote(note) {
        this.model.addNote(note);
        this.displayNotes();
    }


    displayNotes() {
        const array = this.model.getNotes(); 
        array.forEach((note) => {
            const newElement = document.createElement('div');
            newElement.className = 'note';
            newElement.innerText = note;
            document.querySelector('#main-container').append(newElement);
        })
    }


}

module.exports = notesView;