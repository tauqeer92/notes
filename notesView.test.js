/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('NotesView', () => {
    it('should display a note on the page', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html')
        const view = new NotesView()

        // Act
        view.displayNotes(['Buy milk'])

        // Assert
        const notesElement = document.querySelectorAll('div.note');
        expect(notesElement.length).toBe(1);
        expect(notesElement[0].innerText).toBe('Buy milk');
    })

    it('adding 2 notes', () => {
        // Arrange
        document.body.innerHTML = fs.readFileSync('./index.html')
        const view = new NotesView()

        // Act
        view.displayNotes(['Buy milk'])
        view.displayNotes(['Buy bread'])

        // Assert
        const notesElement = document.querySelectorAll('div.note');
        expect(notesElement.length).toBe(2);
        expect(notesElement[1].innerText).toBe('Buy bread');
    })
})