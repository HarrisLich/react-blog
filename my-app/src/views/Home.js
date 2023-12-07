import { BsArrowDown, BsDiscord, BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import { AiOutlineFile } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'

function Home() {

    const user = localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload(false)
    }

    const fetchResume = () => {
        fetch("http://localhost:3001/static/imgs/Resume.pdf").then((res) => {
            res.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            })
        })
    }

    if (user) {
        return (
            <div className="max-w-full" style={{ height: "calc(100vh)" }}>
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 font-['MyFont']">
                    <div className="flex flex-row p-4 text-lg text-white justify-start items-start">
                        <button onClick={() => logout()} className="">Logout ({user})</button>
                    </div>
                    <div></div>
                    <div className='w-full h-fit flex flex-row justify-end md:px-10 gap-4 md:py-4 text-[#EEEEEE] md:text-lg'>
                        <a href="/" className="flex flex-row items-center gap-1">
                            <AiOutlineFile />
                            Works</a>
                        <button onClick={() => fetchResume()} className="flex flex-row items-center gap-1">
                            <FaWpforms />
                            Resume</button>
                        <a href="mailto:harris.lichstein1@marist.edu" className="flex flex-row items-center gap-1">
                            <RiContactsLine />
                            Contact</a>
                    </div>
                    <div className="w-full h-full flex col-span-3 items-center justify-center flex flex-col gap-4">
                        <div></div>
                        <div className="font-bold text-[#EEEEEE] lg:text-6xl">Harris Lichstein</div>
                        <div className="w-full items-center justify-center flex flex-row gap-4">
                            <a href='discord.com/users/213684069643452416' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                Discord
                                <BsDiscord className='lg:text-2xl' /></a>
                            <a href='mailto:harris.lichstein1@marist.edu' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                Email
                                <BsEnvelopeFill className='lg:text-2xl' />
                            </a>
                            <a href='https://github.com/HarrisLich' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                Github
                                <BsGithub className='lg:text-2xl' /></a>
                            <a href='https://www.linkedin.com/in/harris-lichstein-620b84291/' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                LinkedIn
                                <BsLinkedin className='lg:text-2xl' />
                            </a>
                        </div>
                    </div>
                    <div></div>
                    <div className='w-full h-full items-end justify-center flex'>
                        <BsArrowDown className="lg:text-4xl text-[#D0BFFF] animate-bounce" />
                    </div>
                    <div></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="max-w-full" style={{ height: "calc(100vh)" }}>
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 font-['MyFont']">
                    <div className="flex flex-row p-4 text-lg text-white justify-start items-start">
                        
                    </div>
                    <div></div>
                    <div className='w-full h-fit flex flex-row justify-end md:px-10 gap-4 md:py-4 text-[#EEEEEE] md:text-lg'>
                        <a href="/" className="flex flex-row items-center gap-1">
                            <AiOutlineFile />
                            Works</a>
                        <button onClick={() => fetchResume()} className="flex flex-row items-center gap-1">
                            <FaWpforms />
                            Resume</button>
                        <a href="mailto:harris.lichstein1@marist.edu" className="flex flex-row items-center gap-1">
                            <RiContactsLine />
                            Contact</a>
                    </div>
                    <div className="w-full h-full flex col-span-3 items-center justify-center flex flex-col gap-4">
                        <div></div>
                        <div className="font-bold text-[#EEEEEE] lg:text-6xl select-none">Harris Lichstein</div>
                        <div className="w-full items-center justify-center flex flex-row gap-4">
                            <a href='discord.com/users/213684069643452416' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                Discord
                                <BsDiscord className='lg:text-2xl' /></a>
                            <a href='mailto:harris.lichstein1@marist.edu' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                Email
                                <BsEnvelopeFill className='lg:text-2xl' />
                            </a>
                            <a href='https://github.com/HarrisLich' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                Github
                                <BsGithub className='lg:text-2xl' /></a>
                            <a href='https://www.linkedin.com/in/harris-lichstein-620b84291/' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                                LinkedIn
                                <BsLinkedin className='lg:text-2xl' />
                            </a>
                        </div>
                    </div>
                    <div></div>
                    <div className='w-full h-full items-end justify-center flex'>
                        <BsArrowDown className="lg:text-4xl text-[#D0BFFF] animate-bounce" />
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }

}

export default Home;