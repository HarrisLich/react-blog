import React from 'react'
import { useOutletContext } from 'react-router-dom';

function SingleArticle(props){

    const context = useOutletContext()

    return(
        <div className="w-full font-['MyFont'] bg-[#2D2424] text-white p-6 flex flex-col" style={{ height: "calc(100vh)" }}>
            <div className="text-2xl">{props.id}</div>
        </div>
    )
}

export default SingleArticle;
