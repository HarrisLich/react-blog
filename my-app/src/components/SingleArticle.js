import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from './Footer'


function SingleArticle(props) {

    const handle = useParams()

    const [article, setArticle] = React.useState(null)

    useEffect(() => {
        axios.post("http://localhost:3001/api/slugsearch", {
            slug: handle.slug
        }).then((res) => {
            setArticle(res.data)
        })

    })



    if (article === null) {
        return (
            <div className="w-full font-['MyFont'] bg-[#2D2424] text-white p-6 flex flex-col" style={{ height: "calc(100vh)" }}>
                <div className="md:text-4xl text-xl text-white">ARTICLE NOT FOUND</div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <div className="w-full font-['MyFont'] text-black py-6 px-12 flex flex-col h-fit" style={{height: "calc(100vh)"}}>
                    <div className="text-2xl font-bold">{article ? article.title : "Article Not Found"}</div>
                    <div className="text-gray-600 text-lg">{article ? new Date(article.createdAt).toLocaleDateString() : ""}</div>
                    <div className="text-2xl mt-2">{article ? article.description : ""}</div>
                    <div dangerouslySetInnerHTML={article ? {__html: article.sanitizedHtml} : ""} className="text-2xl mt-2"></div>
                    <div className="w-full flex flex-row py-4">
                        <a href="/articles" className="hidden px-4 py-1 bg-[#D0BFFF] text-white hover:text-[#EEEEEE] hover:text-white hover:bg-[#BEADFA] border-2 border-[#BEADFA] duration-150 rounded">All Articles</a>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }


}

export default SingleArticle;
