const argv= require ('yargs')
            .command('crear','crea un nuevo TODO', {
                descripcion :{
                    demand : true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer'
                }
            }).command('actualizar','actualiza estado TODO',{
                descripcion: {
                    demand : true,
                    alias: 'd',
                    desc : 'descripción'

                },
                completado : {
                    default: true,
                    alis : 'c'
                }
            })
            .command('borrar','borrar TODO',{
                descripcion: {
                    demand : true,
                    alias: 'd',
                    desc : 'descripción'

                }
            })
            .help().argv



module.exports = {argv}