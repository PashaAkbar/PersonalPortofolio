import React from 'react'
import kawakib from '../assets/kawakib.png';
import { Link } from 'react-scroll'
import awan from '../assets/awan.png'

const Porto = () => {
  return (
    <div name ="portofolio" className='justify-center items-center w-full' id='2'>
        <h1 className='text-center text-2xl font-bold cursor-pointer my-4 hover:scale-105 duration-200 text-biru'>Portofolio</h1>
        <div class="flex flex-wrap text-center justify-around">
            <div class="max-w-sm rounded cursor-pointer overflow-hidden shadow-lg hover:scale-105 duration-200 rounded-[10px]">
                <a href="https://main--kawakibpashadev.netlify.app" smooth duration={400}>
                <img class="w-full" src={kawakib} alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Kawakib</div>
                    <p class="text-gray-700 text-base">An astronomy platform for casual enthusiasts is a platform that provides information, knowledge, and fun features related to astronomy. This platform is designed to satisfy the curiosity and interests of casual enthusiasts who are intrigued by the world of astronomy, without requiring in-depth knowledge of the subject.</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#astronomy</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nasa</span>
                </div>
                </a>
            </div>
            <div class="max-w-sm rounded cursor-pointer overflow-hidden shadow-lg hover:scale-105 duration-200 rounded-[10px]">
                <img class="w-full" src={awan} alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Awan</div>
                    <p class="text-gray-700 text-base">A weather forecasting web application is a platform that provides users with up-to-date weather information for various locations. It utilizes weather data obtained from meteorological sources or weather APIs to deliver accurate forecasts and current conditions.</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#weather</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#forecast</span>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg rounded-[10px]">
                <img class="w-full" src="https://cdn.catboys.com/images/image_134.jpg" alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nasa</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Porto