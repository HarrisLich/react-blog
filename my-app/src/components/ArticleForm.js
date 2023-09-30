//<div className="w-full h-fit md:text-2xl flex flex-row gap-4 md:mt-6">
//<h1>Title:</h1>
//<input id="title" name="title" type="text" className="outline-[1px] outline w-full bg-transparent rounded outline-white px-2 py-1"></input>
//</div>
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function ArticleForm() {
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
        const titleInput = document.getElementById("title")
        const descriptionInput = document.getElementById("description")
        const markdownInput = document.getElementById("markdown")

        const title = titleInput.value
        const desc = descriptionInput.value
        const markdown = markdownInput.value

        axios.post("http://localhost:3001/api", {
            title: title,
            desc: desc,
            markdown: markdown
        })
        
        navigate("/articles")
        
    }



    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex flex-row md:mt-6 gap-4">
                <div className="w-fit h-full flex flex-col gap-4">
                    <h1 className="md:text-2xl text-white">Title:</h1>
                    <h1 className="md:text-2xl text-white">Description:</h1>
                    <h1 className="md:text-2xl text-white">Markdown:</h1>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <input id="title" className="w-full rounded bg-transparent outline outline-white outline-[1px] md:text-2xl"></input>
                    <input id="description" className="w-full rounded bg-transparent outline outline-white outline-[1px] md:text-2xl"></input>
                    <textarea id="markdown" rows={10} className="w-full rounded bg-transparent outline outline-white outline-[1px] md:text-2xl"></textarea>
                    <div className="flex flex-row w-full h-fit md:mt-6 md:text-2xl gap-4">
                        <button className="px-2 py-1" onClick={submitForm}>Save</button>
                        <button className="px-2 py-1">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArticleForm;