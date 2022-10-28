class notesClient {
    loadNotes (callback) {
        fetch('http://localhost:3000/' + 'notes').then((response) => response.json()).then((data) => callback(data))
    }

    createNote(param) {
        const data = { content: param };
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.error('Error', error)
        });

    }

    deleteNote() {
        fetch('http://localhost:3000/notes', {
            method: 'DELETE',
        })
    }
}

module.exports = notesClient;