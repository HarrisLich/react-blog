const express = require('express')
const router = express.Router()
const Article = require('../models/article')
const User = require('../models/user')
const crypto = require('crypto')
const { genPassword,  validPassword} = require('../lib/passwordUtils')


router.get("/", (req,res)=>{
    res.json({msg: "testing"})
})

router.post("/", async (req,res)=>{
    const title = req.body.title
    const desc = req.body.desc
    const markdown = req.body.markdown
    console.log(markdown)
    let article = new Article()

    article.title = title
    article.description = desc
    article.markdown = markdown

    try{
        article = await article.save()
    }catch(e){
        console.log(e)
    }

})

router.delete("/", async (req,res)=>{
    let id = req.body.id
    await Article.findByIdAndDelete(id)
})

router.post("/articles", async (req,res)=>{
    let articles = await Article.find().sort({createdAt: 'desc'})
    res.send(articles)
})

router.post("/slugsearch", async (req,res)=>{
    let slug = req.body.slug
    const article = await Article.findOne({ slug: slug })
    if(article == null) res.send(null)
    else res.send(article)
})

router.post("/login", async (req,res)=>{
    const data = req.body
    const password = data.password
    const email = data.email
    try{
        const check = await User.findOne({email: email})
        hash = check.hash
        salt = check.salt
        const passwordCheck = validPassword(password, hash, salt)
        if(check && passwordCheck){
            res.json("exists")
        }else{
            res.json("notexists")
        }

    }catch(e){
        console.log(e)
    }
})

router.post("/signup", async (req,res)=>{
    try{
        const data = req.body
        const password = genPassword(data.password)
        const salt = password.salt
        const hash = password.hash
        const email = data.email
        let user = new User()
        user.email = email
        user.hash = hash
        user.salt = salt
        const registerUser = await user.save().then((user) => {
            console.log(user)
        })
        res.json({complete: true})
    }catch(e){
        console.log(e)
    }
    
    
})

router.post("/recentarticle", async (req,res)=>{
    let articles = await Article.find().sort({createdAt: 'desc'})
    res.send(articles[0])
})

module.exports = router