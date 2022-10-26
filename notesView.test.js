/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel')
const fs = require('fs');

describe('NotesView', () => {
    it('should display a note on the page', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new NotesModel()
        model.addNote('Buy milk')
        const view = new NotesView(model)

        // Act
        view.displayNotes()

        // Assert
        const notesElement = document.querySelectorAll('div.note');
        expect(notesElement.length).toBe(1);
        expect(notesElement[0].innerText).toBe('Buy milk');
    })

    it('adding 2 notes', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new NotesModel()
        model.addNote('Buy milk')
        model.addNote('Buy bread')
        const view = new NotesView(model)

        // Act
        view.displayNotes()

        // Assert
        const notesElement = document.querySelectorAll('div.note');
        expect(notesElement.length).toBe(2);
        expect(notesElement[1].innerText).toBe('Buy bread');
    })

    it('testing the ability to input a note', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel()
        const view = new NotesView(model);

        // Act
        const input = document.querySelector('#message-input');
        const button = document.querySelector('#add-note-button');
        input.value = 'This is a test message';
        button.click()
        expect(document.querySelector('div.note')).not.toBeNull();
        expect(document.querySelector('div.note').innerText).toEqual('This is a test message');

    })


})