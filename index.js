const logger = require('./logger')
const errorPersonalizado = val =>{
    if(typeof val !== "string")
    logger.error("El valor debe ser de tipo string")
}

try{
    errorPersonalizado(3)    
}catch(e){
    logger.error(e)
}