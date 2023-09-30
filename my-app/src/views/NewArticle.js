import ArticleForm from "../components/ArticleForm";
function NewArticle(){
    return(
        <div className="w-full bg-[#2D2424] text-white font-['MyFont']" style={{height: "calc(100vh)"}}>
            <div className="w-full h-full flex flex-col md:px-8 md:py-8">
                <h1 className="md:text-4xl text-white">New Article</h1>
                <ArticleForm/>
            </div>
            
        </div>
    )
}

export default NewArticle;