const fs = require('fs')

const databuffer = fs.readFileSync('1-json.json')
const datajson = databuffer.toString()
const data = JSON.parse(datajson)



const newdata = {
    name:'Afiq',planet:data.planet,age:24
}

const newdatajson = JSON.stringify(newdata)

fs.writeFileSync('1-json.json', newdatajson)
