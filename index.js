const Notes = require('./notesModel')
const NotesView = require('./notesView')
const Client = require('./notesClient')

const model = new Notes();
const client = new Client();
const view = new NotesView(model, client);
view.displayNotesFromApi()