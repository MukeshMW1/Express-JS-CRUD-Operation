import colors from 'colors';
const logger =(req,res,next)=>{


    const methodColors={
        GET:'green',
        POST:'blue',
        PUT:'cyan',
        DELETE:'red',
    }
    const color=methodColors[req.method ||white];

console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} `[color])
console.log(req.url);
next();

}

export default logger;