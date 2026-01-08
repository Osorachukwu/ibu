import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function CTA() {
    return (
        <div className='border-b py-10 border-base-300'>
            <p className='text-5xl font-bold mb-6 text-center'>Let us deliver your <br /> package to its <br /> destination</p>
            <div className='flex justify-center'>
                <button className='btn btn-secondary rounded-full'>Learn More <ArrowRight className='-rotate-40 w-5' /></button>
                {/* <button className='btn'>Learn More</button> */}
            </div>
        </div>
    )
}
