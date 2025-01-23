// import React from 'react'
// import "./Videos.css"
// import Footer from '../Footer/Footer'
// import vid1 from "../../assets/Rectangle 25.png"
// import vid2 from "../../assets/Rectangle 25 (1).png"
// import vid3 from "../../assets/Rectangle 25 (2).png"
// import vid4 from "../../assets/Rectangle 25 (3).png"
// import vid5 from "../../assets/Rectangle 25 (4).png"
// import vid6 from "../../assets/Rectangle 25 (5).png"
// import Nav from "../Nav/Nav.jsx";
// import { Link } from 'react-router-dom'




// function Videos() {
//   return (
//     <>
//     <Nav/>
//      <div className='mb-4'>
//       <h2 className='intro text-center mt-4 text-3xl font-bold dark:text-white'>ESL Videos</h2>
//       {/*first*/}
//      <div className='intro videos flex justify-evenly  mt-5'> 
//       <Link to="https://youtu.be/J9yAMPxFQUQ?si=_GLkAFQx45vaPKtx" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid1} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>08:02</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">The Future of Technology and Sign Language Interpretation – Youtube
//          </p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/OUbqytVF-F0?si=IoZBV7720CPop2ma" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid2} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>09:06</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">Modified Sign Language For Autism  | Nonverbal Autism and Sign - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/rutCcQLsi5Y?si=JXKeie-fcLPG6-6e" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid3} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>03:32</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">Use of Sign Language & Children With Autism | Dr. Vincent Carbone - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//      </div>

//      {/*sec*/}
//      <div className='intro videos flex justify-evenly  mt-5'> 
//      <Link to="https://youtu.be/HzpXs6luzf4?si=AozhfZ6teU26Hehd" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid4} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>03:39</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">How Sign Language Can Help Students with Dyslexia - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/boJ7q5n8n70?si=zJptZ6SsfpcZrcUj" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid5} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>01:00</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">ASL vs International Sign Language (IL) - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/_xId8cP7rXg?si=FFcS5hDsd9Mcwye2" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid6} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>06:22</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white"> 100 International Sign  - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//      </div>

//     {/*third*/}
//     <div className='intro videos flex justify-evenly  mt-5'> 
//     <Link to="https://youtu.be/DwSh_wvxPKs?si=NyqK98nUtKKdP6gF" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid1} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>06:49</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">Tech for the deaf: How to search for words in sign language - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/viRVFxvXSss?si=p9_znKNGEc19PK8X" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid2} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>04:31</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white"> Sign Language Isn't Universal - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/U_Q7axl4oXY?si=TwkANcUl4Hddq6kd" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid3} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>14:27</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white"> Making Education Accessible to Deaf Children | Nyle DiMarco - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//      </div>

//      {/*4*/}
//      <div className='intro videos flex justify-evenly  mt-5'> 
//      <Link to="https://youtu.be/ou1Me-4GzuE?si=2y5-eTSPnoXWlIS6" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid4} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>11:48</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">Deaf children need sign language | Drisana Levitzke-Gray - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/io7z5PftOU4?si=oalu8rDfl7mXGgoF" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid5} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>16:22</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">Protecting and Interpreting Deaf Culture | Glenna Cooper | TEDxTulsaCC - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//         <Link to="https://youtu.be/OFlZdH2xEe8?si=TEyYEsizaVd4XSvO" target='_blank'> 
//      <div className="card dark:border-gray-800 hover:scale-105 h-100 w-[430px] flex justify-center align-items-center dark:bg-slate-900 dark:hover:bg-slate-950">
//         <img src={vid6} className="left-two card-img-top w-[410px] mt-1 " alt="img1"/>
//         <div className=' translate-x-44 -translate-y-6 flex justify-end  h-[20px] bg-black opacity-65  w-[45px]'><div className='text-white text-center w-[43px] text-sm opacity-100'>08:55</div></div>
//         <div className="card-body">
//          <p className="left-two card-text font-bold dark:text-white">Sign language is my superpower | Austin Vaday | TEDxUCLA - Youtube</p>
//         </div>
//         </div>
//         </Link> 
//      </div>





//     </div>
//      <Footer/>
//     </>
//   )
// }

// export default Videos
////////////////

import React from 'react';
import "./Videos.css";
import Footer from '../Footer/Footer';
import Nav from "../Nav/Nav.jsx";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';

function Videos() {
  const videos = [
    {
      url: "https://youtu.be/J9yAMPxFQUQ?si=_GLkAFQx45vaPKtx",
      duration: "08:02",
      title: "The Future of Technology and Sign Language Interpretation – Youtube"
    },
    {
      url: "https://youtu.be/OUbqytVF-F0?si=IoZBV7720CPop2ma",
      duration: "09:06",
      title: "Modified Sign Language For Autism  | Nonverbal Autism and Sign - Youtube"
    },
    {
      url: "https://youtu.be/rutCcQLsi5Y?si=JXKeie-fcLPG6-6e",
      duration: "03:32",
      title: "Use of Sign Language & Children With Autism | Dr. Vincent Carbone - Youtube"
    },
    {
      url: "https://youtu.be/HzpXs6luzf4?si=AozhfZ6teU26Hehd",
      duration: "03:39",
      title: "How Sign Language Can Help Students with Dyslexia - Youtube"
    },
    {
      url: "https://youtu.be/boJ7q5n8n70?si=zJptZ6SsfpcZrcUj",
      duration: "01:00",
      title: "ASL vs International Sign Language (IL) - Youtube"
    },
    {
      url: "https://youtu.be/_xId8cP7rXg?si=FFcS5hDsd9Mcwye2",
      duration: "06:22",
      title: "100 International Sign  - Youtube"
    },
    {
      url: "https://youtu.be/DwSh_wvxPKs?si=NyqK98nUtKKdP6gF",
      duration: "06:49",
      title: "Tech for the deaf: How to search for words in sign language - Youtube"
    },
    {
      url: "https://youtu.be/viRVFxvXSss?si=p9_znKNGEc19PK8X",
      duration: "04:31",
      title: "Sign Language Isn't Universal - Youtube"
    },
    {
      url: "https://youtu.be/U_Q7axl4oXY?si=TwkANcUl4Hddq6kd",
      duration: "14:27",
      title: "Making Education Accessible to Deaf Children | Nyle DiMarco - Youtube"
    },
    {
      url: "https://youtu.be/ou1Me-4GzuE?si=2y5-eTSPnoXWlIS6",
      duration: "11:48",
      title: "Deaf children need sign language | Drisana Levitzke-Gray - Youtube"
    },
    {
      url: "https://youtu.be/io7z5PftOU4?si=oalu8rDfl7mXGgoF",
      duration: "16:22",
      title: "Protecting and Interpreting Deaf Culture | Glenna Cooper | TEDxTulsaCC - Youtube"
    },
    {
      url: "https://youtu.be/OFlZdH2xEe8?si=TEyYEsizaVd4XSvO",
      duration: "08:55",
      title: "Sign language is my superpower | Austin Vaday | TEDxUCLA - Youtube"
    }
  ];

  return (
    <>
      <Nav />
      <div className='mb-4 ml-1 mr-1'>
        <h2 className='intro text-center mt-4 text-3xl font-bold dark:text-white'>ESL Videos</h2>
        <div className='videos mt-5'>
          {videos.map((video, index) => (
            <div key={index} className="card  dark:border-gray-800 dark:bg-slate-950">
              <div className="video-container ">
                <ReactPlayer className="react-player" url={video.url} width="100%" height="100%" />
                <div className="duration">{video.duration}</div>
              </div>
              <div className="card-body">
                <p className="card-text left font-bold  dark:text-white">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Videos;
