import { useEffect } from "react";
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function Articles() {

    const [articles, setArticles] = React.useState(null)

    React.useEffect(() => {
        axios.post("http://localhost:3001/api/articles").then((res) => {
            setArticles(res.data)
        })
    })

    return (
        <div className="flex flex-col">
            <div className="w-full font-['MyFont'] bg-[#EEEEEE] text-white flex flex-col px-10" style={{ height: "calc(100vh)" }}>
                <div className="md:text-4xl font-bold w-full h-fit flex flex-row items-center justify-center text-black mt-4 mb-6 select-none">
                    My Articles
                </div>
                <div className="">
                    {articles ? <ArticlesDisplayComponent articles={articles} /> : "Loading..."}
                </div>
            </div>
            <Footer/>
        </div>

    )
}

function ArticlesDisplayComponent(props) {
    const articles = props.articles;

    const history = useNavigate()

    const user = localStorage.getItem('token')

    const deleteArticle = (val) => {
        axios.delete("http://localhost:3001/api", {
            data: {
                id: val
            }
        }).then((res) => {
            console.log(res.data)
        })
    }

    if (user) {
        return (

            <div className="w-full h-full flex flex-col">
                <ul className="w-full h-full flex flex-row gap-4">
                    {articles.map(article => (
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-[#817E9F]">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{article ? article.title : "Loading..."}</h5>
                            </a>
                            <p class="mb-3 font-normal text-black">{article ? article.description : "Loading..."}</p>
                            <div className="flex flex-row gap-2">
                                <button onClick={() => history(`/articles/${article.slug}`)} className="bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 rounded flex flex-row items-center justify-center px-2 py-1">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                                <button onClick={() => deleteArticle(article._id)} className="px-4 py-1 bg-red-500 rounded w-fit font-bold">Delete</button>
                            </div>
                        </div>
                    ))
                    }
                </ul>
            </div>


        )
    } else {
        return (
            <div className="w-full h-full flex flex-col">
                <ul className="w-full h-full flex flex-row gap-4">
                    {articles.map(article => (
                        <div class="max-w-sm p-6 bg-white border border-gray-200 h-fit rounded-lg shadow bg-[#817E9F]">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{article ? article.title : "Loading..."}</h5>
                            <p class="mb-3 font-normal text-black">{article ? article.description : "Loading..."}</p>
                            <div className="flex flex-row gap-2">
                                <button onClick={() => history(`/articles/${article.slug}`)} className="bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text hover:bg-[#BEADFA] duration-150 rounded flex flex-row items-center justify-center px-2 py-1">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                    }
                </ul>
            </div>
        )
    }


}

export default Articles;