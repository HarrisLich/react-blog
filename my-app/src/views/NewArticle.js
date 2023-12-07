import ArticleForm from "../components/ArticleForm";
import NotFound from "./NotFound";
function NewArticle(){
    const user = localStorage.getItem('token')
    if(user){
        return(
            <div className="w-full bg-[#2D2424] text-white font-['MyFont']" style={{height: "calc(100vh)"}}>
                <div className="w-full h-full flex flex-col md:px-8 md:py-8">
                    <h1 className="md:text-4xl text-white">New Article</h1>
                    <ArticleForm/>
                </div>
                
            </div>
        )
    }else{
        return(
            <div>
                <NotFound></NotFound>
            </div>
        )
    }
    
}

export default NewArticle;