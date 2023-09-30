import { useEffect } from "react";
import React from 'react'
import axios from 'axios'

function Articles() {

    const [articles, setArticles] = React.useState(null)


    useEffect(() => {
        axios.post("http://localhost:3001/api/articles").then((res) => {
            setArticles(res.data)
        })
    })

    return (
        <div className="w-full font-['MyFont'] bg-[#2D2424] text-white p-6 flex flex-col" style={{ height: "calc(100vh)" }}>
            <div className="md:text-4xl font-bold w-full h-fit flex flex-row items-center justify-center text-white">
                My Articles
            </div>
            <div className="md:py-4">
                {articles ? <ArticlesDisplayComponent articles={articles} /> : "Loading..."}
            </div>
        </div>
    )
}

function ArticlesDisplayComponent(props) {
    const articles = props.articles;

    const deleteArticle = (val) => {
        axios.delete("http://localhost:3001/api", {
            data: {
                id: val
            }
        }).then((res)=>{
            console.log(res.data)
        })
    }
    
    return (
        <div className="w-full h-full flex flex-col">
            <ul className="w-full h-full flex flex-col gap-4">
                {articles.map(article => (
                    <li className="w-full flex flex-col bg-white py-2 rounded-lg h-36 text-black grid grid-rows-4 p-4">
                        <div className="font-bold md:text-xl">{article.title}</div>
                        <div>{article.description}</div>
                        <div className="row-span-2 flex flex-col gap-2">
                            <h1 className="truncate">{article.markdown}</h1>
                            <button onClick={() => deleteArticle(article._id)} className="px-4 py-1 bg-red-500 rounded w-fit font-bold">Delete</button>
                        </div>
                    </li>
                ))

                }
            </ul>
        </div>
    )
}

export default Articles;