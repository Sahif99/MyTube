import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebody = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <>
      <div className='  shadow-lg mt-3' >
        <div className='mr-12'>
          <li className=' flex ml-5 mb-1'>
            <Link className='flex' to="/">
            <img className=' h-8 ml-1' alt='home' src='https://e7.pngegg.com/pngimages/703/597/png-clipart-logo-house-home-house-angle-building-thumbnail.png'
            />
            <h1 className=' font-bold ml-4 text-lg'>Home</h1>
            </Link>
            </li>
          <li className=' flex ml-3 mb-1'>
            <img className=' h-8 ml-1' alt='shorts' src='https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg'
            />
            <h1 className=' font-bold ml-3.5 text-lg'>Shorts</h1></li>
          <li className=' flex ml-5 mb-1'>
            <img className=' h-8 ml-1' alt='subscriptions' src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png'
            />
            <h1 className=' font-bold ml-4 text-lg'>Subscriptions</h1></li>
        </div>
        <hr className=" ml-6 h-px my-4 bg-gray-400 border-0 dark:bg-gray-700" />
        <div>
          <h1 className='ml-6 font-bold text-xl mb-2'>Your Info</h1>
          <ul>
            <li className=' flex ml-5 mb-2'>
              <img className=' h-7 ml-1' alt='your channel' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEb9EDmW3YHlECkFfsU9xI5mJL_BaKKOCYhumzltcFsM8-ykO7A8S_kjh9_mBSPEgQto&usqp=CAU'
              />
              <h1 className=' font-bold ml-5 text-lg'>Your channel</h1></li>
            <li className=' flex ml-5 mb-2'>
              <img className=' h-7 ml-1' alt='history' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzboKuSXzdlfM6elIPLn4v4jIvEn01ub19y7Jwehr0DqoRpVOJF4WRtZVdCZlgxxtWMU&usqp=CAU'
              />
              <h1 className=' font-bold ml-4 text-lg'>History</h1></li>
            <li className=' flex ml-5 mb-2'>
              <img className=' h-7 ml-1' alt='playlists' src='https://cdn.icon-icons.com/icons2/2463/PNG/512/playlist_icon_149195.png'
              />
              <h1 className=' font-bold ml-5 text-lg'>Playlists</h1></li>
            <li className=' flex ml-5 mb-1'>
              <img className=' h-9' alt='your videos' src='https://static.vecteezy.com/system/resources/thumbnails/023/986/739/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png'
              />
              <h1 className=' font-bold ml-4 text-lg'>Your videos</h1></li>
            <li className=' flex ml-5 mb-1'>
              <img className=' h-8 ml-0.5' alt='watch later' src='https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp'
              />
              <h1 className=' font-bold ml-5 text-lg'>Watch later</h1></li>
            <li className=' flex ml-5 mb-1'>
              <img className=' h-7' alt='liked videos' src='https://logowik.com/content/uploads/images/940_like_icon.jpg'
              />
              <h1 className=' font-bold ml-4 text-lg'>Liked Videos</h1></li>
          </ul>
        </div>
        <hr className=" ml-6 h-px my-4 bg-gray-400 border-0 dark:bg-gray-700" />
        <div>
          <h1 className='ml-6 font-bold text-xl mb-2'>Explore</h1>
          <li className=' flex ml-6 mb-1'>
            <img className=' h-7' alt='trending' src='https://icon-library.com/images/trending-512.png'
            />
            <h1 className=' font-bold ml-4 text-lg'>Trending</h1></li>
          <li className=' flex ml-4 mb-1'>
            <img className=' h-11' alt='shopping' src='https://static.vecteezy.com/system/resources/previews/007/372/197/non_2x/bag-icon-shopping-bag-icon-bag-logo-bag-illustration-free-vector.jpg'
            />
            <h1 className=' font-bold ml-2 mt-2 text-lg'>Shopping</h1></li>
          <li className=' flex ml-7 mb-1'>
            <img className=' h-8' alt='music' src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMy0xMC9yYXdwaXhlbG9mZmljZTEwX3ZlY3Rvcl9pbGx1c3RyYXRpb25fb2ZfaWNvbl9tdXNpY2FsX2FfYmxhY2tfbm9fODEwOTFmODUtMzA4ZC00Mzk2LTkwZjgtMmQ3ZmY3YzZjNzMyXzEucG5n.png'
            />
            <h1 className=' font-bold ml-5 text-lg'>Music</h1></li>
        </div>
      </div>

    </>


  )
}

export default Sidebody