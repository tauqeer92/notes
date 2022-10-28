/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel')
jest.mock('./notesClient')
const fs = require('fs');
const NotesClient = require('./notesClient')

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

    it('input 2 notes, expect 2 notes to show in browser', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel()
        const view = new NotesView(model);

        // Act
        const input = document.querySelector('#message-input');
        const button = document.querySelector('#add-note-button');
        
        input.value = 'First';
        button.click()
        input.value = 'Second';
        button.click()
        expect(document.querySelector('div.note')).not.toBeNull();
        expect(document.querySelectorAll('div.note').length).toBe(2);
    })

    it('getting data from api', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html');
        const mockClient = {loadNotes: (fn) => {fn(["Test data fetch"])}}
        // const client = { loadNotes: () => 'This note is coming from the server' }
        const model = new NotesModel()
        const view = new NotesView(model, mockClient)

        // Act
        view.displayNotesFromApi()


        // Assert
        expect(document.querySelectorAll('div.note').length).toBe(1)


    })

})