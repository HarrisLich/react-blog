import { BsArrowDown, BsDiscord, BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import {AiOutlineFile} from 'react-icons/ai'
import {RiContactsLine} from 'react-icons/ri'

function Home() {
    return (
        <div className="max-w-full" style={{ height: "calc(100vh)"}}>
            <div className="w-full h-full grid grid-cols-3 grid-rows-3 font-['MyFont']">
                <div>1</div>
                <div>2</div>
                <div className='w-full h-fit flex flex-row justify-end md:px-10 gap-4 md:py-4 text-[#EEEEEE] md:text-lg'>
                    <a className="flex flex-row items-center gap-1">
                        <AiOutlineFile />
                        Works</a>
                    <a className="flex flex-row items-center gap-1">
                        <FaWpforms />
                        Resume</a>
                    <a className="flex flex-row items-center gap-1">
                        <RiContactsLine/>
                        Contact</a>
                </div>
                <div className="w-full h-full flex col-span-3 items-center justify-center flex flex-col gap-4">
                    <div></div>
                    <div className="font-bold text-[#EEEEEE] lg:text-6xl">Harris Lichstein</div>
                    <div className="w-full items-center justify-center flex flex-row gap-4">
                        <a href='/' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                            Discord
                            <BsDiscord className='lg:text-2xl' /></a>
                        <a href='/' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                            Email
                            <BsEnvelopeFill className='lg:text-2xl' />
                        </a>
                        <a href='/' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                            Github
                            <BsGithub className='lg:text-2xl' /></a>
                        <a href='/' className="rounded px-2 py-1 bg-[#D0BFFF] border-2 border-[#BEADFA] hover:text-white text-[#EEEEEE] hover:bg-[#BEADFA] duration-150 lg:text-lg lg:px-4 flex flex-row items-center gap-2">
                            LinkedIn
                            <BsLinkedin className='lg:text-2xl' />
                        </a>
                    </div>
                </div>
                <div>7</div>
                <div className='w-full h-full items-end justify-center flex'>
                    <BsArrowDown className="lg:text-4xl text-[#D0BFFF] animate-bounce" />
                </div>
                <div>9</div>
            </div>
        </div>
    )
}

export default Home;