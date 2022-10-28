const Notes = require('./notesModel')
const NotesView = require('./notesView')
const Client = require('./notesClient')

const model = new Notes();
const client = new Client();
const view = new NotesView(model, client);
// client.deleteNote()
console.log(model.getNotes())
console.log(model.getNotes().length)
// console.log(client.loadNotes(x => console.log(x)))
view.displayNotesFromApi()