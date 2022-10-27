(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var Notes2 = class {
        constructor() {
          this.notes = [];
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
      };
      module.exports = Notes2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var model2 = require_notesModel();
      var notesView = class {
        constructor(model3) {
          this.model = model3;
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#message-input").value;
            this.addNewNote(newNote);
          });
        }
        addNewNote(note) {
          this.model.addNote(note);
          this.displayNotes();
        }
        displayNotes() {
          const array = this.model.getNotes();
          if (array.length == 1) {
            const note = array[0];
            const newElement = document.createElement("div");
            newElement.className = "note";
            newElement.innerText = note;
            document.querySelector("#main-container").append(newElement);
          } else {
            const note = array[array.length - 1];
            const newElement = document.createElement("div");
            newElement.className = "note";
            newElement.innerText = note;
            document.querySelector("#main-container").append(newElement);
          }
          document.querySelector("#message-input").value = "";
        }
      };
      module.exports = notesView;
    }
  });

  // index.js
  var Notes = require_notesModel();
  var NotesView = require_notesView();
  var model = new Notes();
  var view = new NotesView(model);
})();
