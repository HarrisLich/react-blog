import React from 'react'
import axios from 'axios'


function ViewTwo() {

    const [article, setArticle] = React.useState(null)
    const [articleLink, setArticleLink] = React.useState(null)

    React.useEffect(()=>{
        axios.post("http://localhost:3001/api/recentarticle").then((res) => {
            setArticle(res.data)
            setArticleLink(`/articles/${res.data.slug}`)
        })
    })


    return (
        <div className="flex justify-center items-center bg-[#817E9F] font-['MyFont']" style={{ height: "calc(95vh)" }}>
            <div className="md:w-[50%] md:h-[96%] flex flex-col items-center justify-center p-4">
                <div className="mb-2 text-3xl text-[#EEEEEE] font-bold">
                    Recent Article
                </div>
                <div className="md:h-[92%] sm:h-[26rem] h-[15rem] w-[80%] bg-white rounded drop-shadow-lg flex flex-col items-center justify-start gap-2 md:py-12 py-6 px-4">
                    <div className="w-full items-start justify-start ml-[30%]">
                        <div className="text-2xl font-bold mt-4">{article ? article.title : "Loading..."}</div>
                        <div className="text-zinc-500">{article ? new Date(article.createdAt).toLocaleDateString() : "Loading..."}</div>
                    </div>

                    <div className="md:w-[70%] h-[70%] overflow-hidden flex">
                        <div dangerouslySetInnerHTML={article ? {__html: article.sanitizedHtml} : {__html: ""}}></div>
                    </div>
                    <div className="bg-gradient-to-b from-transparent to-white relative top-[-6%] w-full h-12"></div>
                    <div className="flex flex-row w-full items-center justify-center gap-2">
                        <a href={articleLink} class="flex items-center h-10 justify-center flex-row border-4 border-blue-500 ml-2 p-0 hover:bg-blue-500 rounded w-fit group">
                            <h1 class="ml-2 mr-2 text-lg">Read More</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 p-2 bg-blue-500 group-hover:translate-x-1 transition" width="36" height="36" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" /></svg>
                        </a>
                        <a href="/articles" class="flex items-center h-10 justify-center flex-row border-4 border-orange-500 ml-2 p-0 hover:bg-orange-500 rounded w-fit group">
                            <h1 class="ml-2 mr-2 text-lg">All Articles</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 p-2 bg-orange-500 group-hover:translate-x-1 transition" width="36" height="36" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTwo;