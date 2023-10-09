import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from '@/components/SideBar'
import PostsFeed from '@/components/PostsFeed'
import Trending from '@/components/Trending'
import BottomBanner from '@/components/BottomBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

    <div className='bg-black min-h-screen text-[#E7E9EA] max-w-[1400] mx-auto flex'>
     <SideBar/>
     <PostsFeed/>
     <Trending/>
    </div>
    <BottomBanner/>
    </div>
  )
}
