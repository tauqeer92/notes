const Notes = require('./notesModel');

describe('notesModel', () => {
    it('returns list of empty notes', () => {
        const list = new Notes();
        expect(list.getNotes().length).toBe(0);
        expect(list.getNotes()).toEqual([]);
    })

    it('returns 1 note', () => {
        const list = new Notes();
        list.addNote('Buy milk')
        expect(list.getNotes()).toEqual(['Buy milk']);
        expect(list.getNotes().length).toBe(1);
    })

    it('clears all notes', () => {
        const list = new Notes();
        list.addNote('Buy milk')
        list.addNote('Buy bread')
        list.reset()
        expect(list.getNotes().length).toBe(0);
        expect(list.getNotes()).toEqual([]);

    })
})