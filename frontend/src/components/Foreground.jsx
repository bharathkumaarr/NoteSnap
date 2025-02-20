import React, {useRef} from 'react'
import { useState } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);
    // const data = {
    //     description, filesize, closeOrDownload, tagDetails, 
    // }

    const data = [
        {
            desc: "Project proposal for Q1 2025, includes budget and timeline details.",
            fileSize: "0.9 mb",
            close: false,
            tagDetails: 
            {
                isOpen: true,
                tagTitle: "Download",
                tagColor: "emerald"
            }

        },
        {
            desc: "Draft of the annual report, needs review by the end of the week.",
            fileSize: "0.4 mb",
            close: true,
            tagDetails: 
            {
                isOpen: true,
                tagTitle: "Preview",
                tagColor: "sky"
            }

        },
        {
            desc: "file containing sales data for January 2025, 500 entries.",
            fileSize: "0.6 mb",
            close: true,
            tagDetails: {
              isOpen: true,
              tagTitle: "Preview",
              tagColor: "sky",
            },
        },
        {
            desc: "tutorial on using the new CRM system, 10 minutes read.",
            fileSize: "1.1 mb",
            close: true,
            tagDetails: {
              isOpen: false,
              tagTitle: "Delete",
              tagColor: "sky",
            },
        }, 
        {
            desc: "High-resolution photo from the company retreat, taken on 2025-02-15.",
            fileSize: "3.2 mb",
            close: false,
            tagDetails: {
              isOpen: true,
              tagTitle: "Download",
              tagColor: "emerald",
            },
        },
        
    ]
    useState()
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 flex-wrap p-5'>
       
        {data.map((item,index)=>(
            <Card key={index} data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground
