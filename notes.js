const fs = require('fs')
const log = console.log
const chalk = require('chalk')


////////////////////////////////////////////////////////////////////////////////////////

// add a note function

////////////////////////////////////////////////////////////////////////////////////////


const  addNotes = (title,body) => {
    const notes = loadData()
     
    const duplicate = notes.find((note)=>note.title===title)
    if(!duplicate)
    {
        
        data = [...notes,{title:title,body:body}]
        saveNotes(data)
        log(chalk.bgGreen("The New Note Is Added"))
    }
    else{
        log(chalk.bgRed("This Note Already Exists"))
    }
}


////////////////////////////////////////////////////////////////////////////////////////

// remove a note functions

////////////////////////////////////////////////////////////////////////////////////////

const removeNotes = (title) => {
    notes = loadData()
    
    const data = notes.filter((note)=> note.title !== title )
    saveNotes(data)
    if(notes.length===data.length)
    {
        log(chalk.bgRed('No Note Found'))
    }
    else{
        log(chalk.bgGreen("Note Removed"))
    }
}


////////////////////////////////////////////////////////////////////////////////////////

// save a note functions

////////////////////////////////////////////////////////////////////////////////////////


const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}


////////////////////////////////////////////////////////////////////////////////////////

// load a data functions

////////////////////////////////////////////////////////////////////////////////////////


const loadData = () => {
    try{
       const bufferData = fs.readFileSync('notes.json').toString()
       const data = JSON.parse(bufferData)
       return data
    }
    catch(e)
    {
        return []
    }
}



////////////////////////////////////////////////////////////////////////////////////////

// list a notes functions

////////////////////////////////////////////////////////////////////////////////////////

const listNotes = () => {
    const notes = loadData()
    log(chalk.bgBlue('Your Notes'))
    notes.forEach((note,index)=>
    {
        log(chalk.blue(`Note ${index+1}:`))
        log(`Title : ${note.title}`)
    })
}


////////////////////////////////////////////////////////////////////////////////////////

// read a note function

////////////////////////////////////////////////////////////////////////////////////////

const readNotes = (title) =>{
    const notes = loadData()
    const readedNote = notes.find((note)=>note.title===title)
    if(readedNote){
        log(`${chalk.bgBlue(readedNote.title)}`)
        log(`${readedNote.body}`)
    }
    else{
        log(chalk.bgRed("No Note Found"))
    }
}

module.exports = {
    addNotes : addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes
}