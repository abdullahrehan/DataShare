const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Rehan:123@qwerty@testing.hv5ln.mongodb.net/test",{useNewUrlParser:true,useUnifiedTopology:true})

const Schema=new mongoose.Schema({
    FileName:String,
    
})

const Model=new mongoose.model("Datas",Schema)


module.exports=Model