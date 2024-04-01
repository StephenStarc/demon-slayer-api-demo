const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Character = require(__dirname + '/model.js')
const ejs = require('ejs')

app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static("public"));

async function main(){
 await mongoose.connect('mongodb+srv://stephenStarc:yQP7Pv4MAmf%24ax%40@starc1.78gmq4x.mongodb.net/DemonSlayerDB?retryWrites=true&w=majority&appName=Starc1')

app.route('/')

.get(async (req,res)=>{
    // const allChar = await Character.find({})
    res.render('home',{})
})

.post(async (req,res)=>{
    console.log(req.body);

    const newChar = new Character({
    name: req.body.name,
    id: req.body.id,
    race: req.body.race,
    affiliation: req.body.affiliation,
    skill: req.body.skill,
    quote: req.body.quote,
    info:req.body.info,
    gender:req.body.gender,
    height:req.body.height,
    weight:req.body.weight,
    birthday:req.body.birthday,
    thumbnail:req.body.thumbnail,
    image:req.body.image,
    })

    newChar.save()


res.redirect('/Create')
    
});

app.get('/Create',(req,res)=>{
    res.render('create',{})
})

app.listen(3000,()=>{
console.log('Server Running');
});


}
main()