const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.find(function (note) {
        return note.title === title
    })

    if (duplicateNotes === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

readNote = (title) => {
    const notes = loadNotes()
    const readnote = notes.find((note) => {
        return note.title === title
    })

    if (readnote === undefined) {

        console.log('No Node Find')
    } else {
        console.log(readnote['title'] + " " + readnote['body'])
    }
}

const removeNote = function (title, body) {
    var notes = loadNotes()
    const keepNote = notes.filter(function (note) {
        return note.title !== title
    })


        saveNotes(keepNote)
        console.log('Notes removes')

}

 listNote = () => {


    console.log(chalk.blue('Note Listed!'));


    var notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note['title'])
    })

}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNote: listNote
}
