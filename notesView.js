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
        if (array.length == 1) {
            const note = array[0]
            const newElement = document.createElement('div');
            newElement.className = 'note';
            newElement.innerText = note;
            document.querySelector('#main-container').append(newElement);

        }

        else {
            const note = array[array.length - 1];
            const newElement = document.createElement('div');
            newElement.className = 'note';
            newElement.innerText = note;
            document.querySelector('#main-container').append(newElement);
        }

        document.querySelector('#message-input').value = ''
        
            
        
    }


}

module.exports = notesView;