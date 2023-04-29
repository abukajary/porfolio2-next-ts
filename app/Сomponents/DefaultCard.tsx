import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardContent {
  title: string
  text: string
  subText?: string
  image: string
  linkText?: string
  linkUrl?: string
}

export const DefaultCard: React.FC<CardContent> = ({
  title,
  text,
  subText,
  image,
  linkText,
  linkUrl
}: CardContent) => {
  return (
    <div className='flex justify-between border-b-2 border-black py-[106px]'>
      <div className='flex flex-col'>
        <div className='font-medium text-base leading-[121.5%] tracking-tighter w-full max-w-[70%]'>{title}</div>
        <div className='font-normal text-base leading-[121.5%] tracking-tighter w-full max-w-[70%] mt-25'>{text}</div>
        {subText && <div className='font-normal text-sm leading-[121.5%] tracking-tighter text-gray-600 w-full max-w-[70%] py-[33px]'> {subText} </div>}
        <div className='mt-auto font-medium text-base tracking-tighter underline'>
          {linkText && linkUrl && <Link href={linkUrl}>{linkText}</Link>}
        </div>
      </div>
      <div className='w-full max-w-[640px] flex justify-end'>
        <img src={image} alt="image1" />
      </div>
    </div>
  )
}