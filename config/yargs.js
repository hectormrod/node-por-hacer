const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
const completado = {
    completado: {
        alias: 'c',
        default: true,
        descr: 'Marca como completado o pendiente la tearea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Eliminar tarea almacenada', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}