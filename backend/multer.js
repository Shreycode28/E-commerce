const multer=require('multer')

//configure the multer

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload/')  
    },
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+'-'+Math.round.apply(Math.random()*1e9)
        const filename=file.originalname.split('.')[0];
        cb(null,filename+"-"+unquieSuffix+".png")
    }
})

exports.upload=multer({storage:storage});