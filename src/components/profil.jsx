import React from 'react'

const Profil = () => {
    return (
        <div name ="about me" className='justify-center items-center w-3/4 mx-auto mt-10' id='2'>
            <div className='flex flex-wrap container mx-auto my-auto justify-around text-center'>
            <h1 className='text-center text-2xl font-bold cursor-pointer my-auto hover:scale-105 duration-200 text-biru'>About Me</h1>

            <p className='py-4 hover:scale-105 duration-200'>A front-end enthusiast student is someone who possesses a deep passion and enthusiasm for the field of front-end development. This individual is committed to mastering the art of creating captivating and user-friendly user interfaces for websites and applications. With an insatiable curiosity and drive to stay up-to-date with the latest front-end technologies and trends, this student is constantly seeking new opportunities to enhance their skills. They are motivated to learn and experiment with various programming languages, such as HTML, CSS, and JavaScript, to craft visually stunning and interactive web experiences.</p>
            </div>
            <div className='flex flex-wrap justify-around my-4 '>
                <div className='flex flex-col max-w-sm w-40 my-auto hover:scale-105 duration-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={'30px'} className='fill-orange-500'><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/></svg>
                    <p className='pt-3 text-center'>Universitas Sriwijaya</p>
                </div>
                <div className='flex flex-col max-w-sm w-40 my-auto hover:scale-105 duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={'30px'} className='fill-orange-500'><path d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"/></svg>
                <p className='pt-3 text-center'>Indralaya</p>
                </div>
                <div className='flex flex-col max-w-sm w-40 my-auto hover:scale-105 duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'30px'} className='fill-orange-500'><path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/></svg>
                <p className='pt-3 text-center'>Informatic Engineering</p>
                </div>

            </div>
        </div>
      )
    }


export default Profil