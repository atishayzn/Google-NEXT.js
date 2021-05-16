import Head from 'next/head'
import Avatar from '../components/Avatar'
import {ViewGridIcon,MicrophoneIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import {useRouter} from "next/router"

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;
      if(!term)return;
      router.push(`/search?term=${term}`)
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Overpass+Mono:wght@300&display=swap" rel="stylesheet"></link>
        <title>Google</title>
      </Head>


      {/*Header*/}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>

        {/*Left*/}
        <div className='flex space-x-4 items-center'>
            <p className='link'>About</p>
            <p className="link">Story</p>
        </div>


        {/*Right*/}
        <div className='flex space-x-4 items-center'>
            <p className='link' onClick={() => {window.open("https://mail.google.com/mail", '_blank').focus();}}>Gmail</p>
            <p className='link' onClick={() => {window.open("https://www.google.com/imghp", '_blank').focus();}}>Images</p>

            {/* Icon */}
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

            {/* Avatar */}
            <Avatar url="https://lh3.googleusercontent.com/a-/AOh14GggPIu_QN-UCR13jtitqW7z5cvJkrkBpc36o_hbeA=s96-c-rg-br100"/>
        </div>
      </header>

      {/*Body*/}
      <form className="flex flex-col items-center mt-32 flex-grow w-4/5">
          <Image 
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={100}
            width={300}
          />
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
          rounded-full border border-gray-200 px-5 py-3 items-center
          sm:max-w-xl lg:max-w-2xl">

            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input 
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
             />
            <MicrophoneIcon className="h-5 text-gray-500" />

          </div>

          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button hidden type="submit" onClick={search}>Search</button>
            <button onClick={search}  className='btn '>Google Search</button>
            <button onClick={search}  className='btn '>I'm Feeling Lucky</button>
          </div>

        </form>

    <Footer />
    </div>
  )
}
