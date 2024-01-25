import React from 'react'
import Image from 'next/image'
function Card() {
  return (
    <div className='mx-20 flex-wrap flex gap-8 text-center justify-center mb-16'>

        <figure className='w-1/4 overflow-hidden'>
            <Image src='/one.jpg' alt='cards' width='350' height='60'/>
            <figcaption className='text-sm'>Connecting artificial intelligence with digital product design</figcaption> 
        </figure>
        <figure className='w-1/4 overflow-hidden'>
            <Image src='/two.jpg' alt='cards' width='350' height='60'/>
            <figcaption className='text-sm'>Hello world, or, in other words, why this blog exists</figcaption> 
        </figure>
        <figure className='w-1/4 overflow-hidden'>
            <Image src='/three.jpg' alt='cards' width='350' height='60'/>
            <figcaption className='text-sm'>Here are some things you should know regarding how we work </figcaption> 
        </figure>
        <figure className='w-1/4 overflow-hidden'>
            <Image src='/four.jpg' alt='cards' width='350' height='60'/>
            <figcaption className='text-sm'>A few words about this blog platform, Ghost, and how this site was made</figcaption> 
        </figure>
        <figure className='w-1/4 overflow-hidden'>
            <Image src='/five.jpg' alt='cards' width='350' height='60'/>
            <figcaption className='text-sm'>Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better</figcaption> 
        </figure>
        <figure className='w-1/4 overflow-hidden'>
            <Image src='/sis.jpg' alt='cards' width='350' height='60'/>
            <figcaption className='text-sm'>How modern remote working tools get along with Old School Cowboy's methods </figcaption> 
        </figure>
    </div>
  )
}

export default Card