const fs = require ('fs')
let listadoPorHacer = []

const crear = (descripcion) => {
    cargarDb()
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer)
    guardarDb()
    return porHacer
}

const cargarDb = () =>{
    try {
        listadoPorHacer = require('../db/data.json')
    }catch(err){
        listadoPorHacer = []
    }
    console.log(listadoPorHacer);
}

const getListado =() =>{
    cargarDb()
    return listadoPorHacer
}


const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json',data, (err) => {
        if (err) console.log('No se pudo grabar', err);
    })
}

const actualizar = (descripcion,completado =true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion )
    if (index !== -1){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }
    return false;
}


const borrar = (descripcion) => {
    cargarDb()
    let index =listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion )
    if (index >=0 ) {
        listadoPorHacer.splice(index,1)
        guardarDb()
        return true
    }
    return false;

}

module.exports = {
    crear,getListado,actualizar,borrar
}