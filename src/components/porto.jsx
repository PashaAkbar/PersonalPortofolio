import React from 'react'
import kawakib from '../assets/kawakib.png';
import { Link } from 'react-scroll'
import awan from '../assets/awan.png'
import keseharianku from '../assets/keseharianku.png'
import akbar from '../assets/akbar.png'

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
                <a href="https://akbarpicture.netlify.app" smooth duration={400}>
                    <img class="w-full" src={akbar} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Akbar Picture</div>
                        <p class="text-gray-700 text-base">A website for promoting and branding my wedding photography business to increase customer reach.</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#videography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wedding</span>
                    </div>
                </a>

            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 duration-200 rounded-[10px]">
                <a href="https://super-cajeta-dea8b9.netlify.app" smooth duration={400}>
                    <img class="w-full" src={keseharianku} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">KeseharianKu</div>
                        <p class="text-gray-700 text-base">A Simple To Do List Website</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#todo</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#task</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#activity</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Porto