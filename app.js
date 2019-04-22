const notesUtiles = require('./notes')
const yargs = require('yargs')


////////////////////////////////////////////////////////////////////////////////////////

// add a new note command

////////////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "add",
    describe : 'this add a new note',
    builder: {
        title : {
            describe: 'note title',
            demandOption: true,
            type : 'string'
        },
        body : {
            describe: 'note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notesUtiles.addNotes(argv.title,argv.body)
    }
})


////////////////////////////////////////////////////////////////////////////////////////

// remove a  note command

////////////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: 'remove',
    describe : 'this remove a note',
    builder:{
        title:{ 
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtiles.removeNotes(argv.title)
    }
})

////////////////////////////////////////////////////////////////////////////////////////

// list all  note command

////////////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: 'list',
    describe:' this list a note',
    handler() {
        notesUtiles.listNotes()
    }
})


////////////////////////////////////////////////////////////////////////////////////////

// read a note command

////////////////////////////////////////////////////////////////////////////////////////


yargs.command({
    command: 'read',
    describe:"this read a note",
    // alias: '-r',
    builder: {
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notesUtiles.readNotes(argv.title)
    }
})

yargs.parse()



























































/////////////////////////////////////////////////////////


// fs.writeFileSync('data.txt','this file is created by nodejs')

// fs.appendFileSync('data.txt','\n this file is appended')

// notes("hello",'world',1,2,3)
// console.log(validator.isEmail("abc@gmailcom"))

// console.log(chalk.bgRed.bold("error"))

// console.log(chalk.blue('hello blue'))

// log(chalk.bgBlue.inverse("hello") + chalk.bgRed.underline("world"))


// log(chalk`
//   CPU : {red ${notes("1,2,3")}}
// `)


// log(chalk.keyword("orange")("this is orange keyword"))


// log(process.argv)
