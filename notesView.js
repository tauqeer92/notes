const model = require('./notesModel')
const Client = require('./notesClient')

class notesView {

    constructor(model, client) {
        this.model = model;
        this.client = client;
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

    displayNotesFromApi() {
        
        const notes = this.client.loadNotes((note) => {
            this.model.addNote(note)
            this.displayNotes();
        })
        // const notes = this.client.loadNotes()
        // this.model.addNote(notes)
        // this.displayNotes();
        

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