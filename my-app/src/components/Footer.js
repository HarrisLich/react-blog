import { BsArrowDown, BsDiscord, BsEnvelopeFill, BsGit, BsGithub, BsLinkedin } from 'react-icons/bs'
import axios from 'axios'
function Footer(){

    const fetchResume = () => {
        fetch("http://localhost:3001/static/imgs/Resume.pdf").then((res)=>{
            res.blob().then((blob)=>{
                const fileURL = window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            })
        })
    }

    return(
        <div className="bg-[#2D2424] w-full h-fit px-24 py-10 flex flex-col items-center">
            <div className="flex flex-row gap-4">
                <a href="discord.com/users/213684069643452416" className="text-[#D0BFFF] p-3 rounded-full outline outline-[#D0BFFF]"><BsDiscord className='lg:text-2xl' /></a>
                <a href="mailto:harris.lichstein1@marist.edu" className="text-[#D0BFFF] p-3 rounded-full outline outline-[#D0BFFF]"><BsEnvelopeFill className="lg:text-2xl"/></a>
                <a href="https://github.com/HarrisLich" className="text-[#D0BFFF] p-3 rounded-full outline outline-[#D0BFFF]"><BsGithub className="lg:text-2xl"/></a>
                <a href="https://www.linkedin.com/in/harris-lichstein-620b84291/" className="text-[#D0BFFF] p-3 rounded-full outline outline-[#D0BFFF]"><BsLinkedin className="lg:text-2xl"/></a>
            </div>
            <div className="mt-[2%] flex flex-row gap-4">
                <a href="/" className="text-xl text-[#EEEEEE] hover:underline decoration-1">Home</a>
                <a href="/articles" className="text-xl text-[#EEEEEE] hover:underline decoration-1">Articles</a>
                <button onClick={()=> fetchResume()} className="text-xl text-[#EEEEEE] hover:underline decoration-1">Resume</button>
                <a href='mailto:harris.lichstein1@marist.edu' className="text-xl text-[#EEEEEE] hover:underline decoration-1">Contact</a>
                <a className="text-xl text-[#EEEEEE] hover:underline decoration-1">Works</a>
            </div>
            <div className="mt-[1%] text-[#EEEEEE] text-sm">
                <h1>Harris Lichstein</h1>
            </div>
        </div>
    )
}

export default Footer