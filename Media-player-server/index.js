const JSONServer = require('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router('db.json')
const middileware = JSONServer.defaults()


const PORT = 3000 || process.env.PORT

MPServer.use(middileware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log((`mediaplayer server started running at PORT:${PORT},and waiting fot thr client request...`));
    
})