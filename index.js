const express=require("express")
const app=express()
const Model=require("./model/model")
const path=require("path")
const multer=require("multer")
app.set("view engine","hbs")
app.use(express.static(__dirname+"/Public"))
const Storage=multer.diskStorage({
    destination:"./Public/uploads",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
    }
})
const file=multer({storage:Storage}).single("files")
app.get("/",(req,res)=>{
   const fu=async()=>{
       const val=await Model.find((err,data)=>{
            res.render("index",{data:data})
            console.log(data);
    })}
    fu();
}) 
app.post("/upload",file,(req,res)=>{
    res.redirect('/')
    const insert=Model({
        FileName:req.file.filename,
       
    })
    insert.save()
    console.log(req.file.filename); 
})
app.get("/download/:id",file,(req,res)=>{
console.log(req.params.id);
    res.download("./Public/uploads/"+req.params.id); 
})
const port=process.env.PORT || 3000
app.listen(port,()=>{console.log("Runnig"+port)})