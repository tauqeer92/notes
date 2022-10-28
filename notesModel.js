class Notes {

    constructor() {
        this.notes = [];
    }

    setNotes(note) {
        return note
    }


    getNotes() {
        return this.notes;
    }

    addNote(note) {
        this.notes.push(note);

    }

    reset() {
        this.notes = [];
    }
}

module.exports = Notes;