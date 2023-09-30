const express = require('express')
const router = express.Router()
const Article = require('../models/article')

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

module.exports = router