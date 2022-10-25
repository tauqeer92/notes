class notesView {
    displayNotes(notes) {
        notes.forEach((note) => {
            const newElement = document.createElement('div');
            newElement.className = 'note';
            newElement.innerText = note;
            document.querySelector('#main-container').append(newElement);
        })
    }


}

module.exports = notesView;