import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


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

    

    if(article === null){
        return(
            <div className="w-full font-['MyFont'] bg-[#2D2424] text-white p-6 flex flex-col" style={{ height: "calc(100vh)" }}>
                <div className="md:text-4xl text-xl text-white">ARTICLE NOT FOUND</div>
            </div>
        )
    }else{
        return (
            <div className="w-full font-['MyFont'] bg-[#2D2424] text-white p-6 flex flex-col" style={{ height: "calc(100vh)" }}>
                <div className="text-2xl">{article ? article.title : "Loading..."}</div>
                <div className="text-2xl mt-2">{article ? article.description : "Loading..."}</div>
                <div className="text-2xl mt-2">{article ? article.markdown : "Loading..."}</div>
                <div className="w-full flex flex-row py-4">
                    <button className="px-4 py-1 bg-[#D0BFFF] text-white hover:text-[#EEEEEE] hover:text-white hover:bg-[#BEADFA] border-2 border-[#BEADFA] duration-150 rounded">All Articles</button>
                </div>
            </div>
        )
    }

    
}

export default SingleArticle;
