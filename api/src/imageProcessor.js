const path = require('path');
const {Worker, isMainThread} = require('worker_threads');


const pathToResizeWorker = path.resolve(__dirname, 'resizeWorker.js')







const imageProcessor = () => {
    return new Promis((resolve, reject) =>{
        if(isMainThread){

        }else{
            reject(new Error('not on main thread'))
        }

        resolve();
    })
}

module.exports = imageProcessor