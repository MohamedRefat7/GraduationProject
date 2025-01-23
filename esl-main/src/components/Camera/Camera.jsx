
//////// without microphone
// import React, { useState, useRef } from "react";
// import "./Camera.css";

// function CameraApp() {
//   const [message, setMessage] = useState("");
//   const [cameraOn, setCameraOn] = useState(false);
//   const [showPermissionPopup, setShowPermissionPopup] = useState(false);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);

//   const handlePermissionPopup = (permissionGranted) => {
//     setShowPermissionPopup(false);
//     if (permissionGranted) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((stream) => {
//           videoRef.current.srcObject = stream;
//           streamRef.current = stream;
//           setCameraOn(true);
//         })
//         .catch((error) => {
//           console.error("Error accessing webcam:", error);
//         });
//     }
//   };

//   const toggleWebcam = () => {
//     if (!cameraOn) {
//       setShowPermissionPopup(true);
//     } else {
//       let tracks = streamRef.current.getTracks();
//       tracks.forEach((track) => track.stop());
//       videoRef.current.srcObject = null;
//       setCameraOn(false);
//     }
//   };

//   const captureFrameAndDetect = () => {
//     const context = canvasRef.current.getContext("2d");
//     context.drawImage(
//       videoRef.current,
//       0,
//       0,
//       canvasRef.current.width,
//       canvasRef.current.height
//     );
//     canvasRef.current.toBlob((blob) => {
//       const formData = new FormData();
//       formData.append("frame", blob);

//       fetch("http://localhost:5000/detect", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           const newCharacter = data.predicted_character;
//           setMessage((prevMessage) => prevMessage + newCharacter);
//           //setMessage(prevMessage => `${prevMessage}${newCharacter}`);
//           //setMessage(prevMessage => prevMessage.concat(newCharacter));
//           //setMessage(prevMessage => [prevMessage, newCharacter].join(''));



//         })
//         .catch((error) => console.error("Error:", error));
//     }, "image/jpeg");
//   };

//   const clearMessage = () => {
//     setMessage("");
//   };

//   return (
//     <div className="cont">
//       {showPermissionPopup && (
//         <div className="permission-popup">
//           <div className="popup-content bg-[#DADADA] dark:bg-[#020617]">
//             <p className="dark:text-white">Do you want to allow access to your camera?</p>
//             <button onClick={() => handlePermissionPopup(true)}>Allow</button>
//             <button onClick={() => handlePermissionPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//       <div className="l-section w-[750px] h-[410px]">
//         <div className="camera-container">
//           <video ref={videoRef} autoPlay style={{ display: cameraOn ? 'block' : '' }} />
//           <canvas
//             ref={canvasRef}
//             width="750"
//             height="415"
//             style={{ display: "none" }}
//           />
//         </div>
//       </div>
//       <div className="r-section">
//         <div className="text-area w-[550px] h-[300px] relative border border-gray-300 p-2">
//           <button 
//             onClick={clearMessage} 
//             className="absolute top-2 right-2 text-gray-950 hover:text-red-600 hover:scale-125 font-bold"
//             style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
//           >
//             X
//           </button>
//           {/* Use CSS to ensure correct RTL display */}
//           <p className="translated-text rtl mt-2">{message}</p>
//         </div>
//         <button onClick={captureFrameAndDetect} className="start-btn">
//           Translate
//         </button>
//         <button onClick={toggleWebcam} className="start-btn">
//           {cameraOn ? "Stop Camera" : "Start Camera"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CameraApp;

/////////////////finall

// import React, { useState, useRef } from "react";
// import "./Camera.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

// function CameraApp() {
//   const [message, setMessage] = useState("");
//   const [cameraOn, setCameraOn] = useState(false);
//   const [showPermissionPopup, setShowPermissionPopup] = useState(false);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);

//   const handlePermissionPopup = (permissionGranted) => {
//     setShowPermissionPopup(false);
//     if (permissionGranted) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((stream) => {
//           videoRef.current.srcObject = stream;
//           streamRef.current = stream;
//           setCameraOn(true);
//         })
//         .catch((error) => {
//           console.error("Error accessing webcam:", error);
//         });
//     }
//   };

//   const toggleWebcam = () => {
//     if (!cameraOn) {
//       setShowPermissionPopup(true);
//     } else {
//       let tracks = streamRef.current.getTracks();
//       tracks.forEach((track) => track.stop());
//       videoRef.current.srcObject = null;
//       setCameraOn(false);
//     }
//   };

//   const captureFrameAndDetect = () => {
//     const context = canvasRef.current.getContext("2d");
//     context.drawImage(
//       videoRef.current,
//       0,
//       0,
//       canvasRef.current.width,
//       canvasRef.current.height
//     );
//     canvasRef.current.toBlob((blob) => {
//       const formData = new FormData();
//       formData.append("frame", blob);

//       fetch("http://localhost:5000/detect", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           const newCharacter = data.predicted_character;
//           setMessage((prevMessage) => {
//             const updatedMessage = prevMessage + newCharacter;
//             speakText(updatedMessage);
//             return updatedMessage;
//           });
//         })
//         .catch((error) => console.error("Error:", error));
//     }, "image/jpeg");
//   };

//   const clearMessage = () => {
//     setMessage("");
//   };

//   const speakText = (text, voiceGender = 'male') => {
//     if ('speechSynthesis' in window) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.lang = 'ar-SA';
//       // Get the available voices
//       const voices = window.speechSynthesis.getVoices();
//       // Filter voices based on gender preference
//       const voice = voices.find(v => v.lang === 'ar-SA' && v.name.includes(voiceGender));
//       if (voice) {
//         utterance.voice = voice;
//       }
//       window.speechSynthesis.speak(utterance);
//     } else {
//       console.error("Text-to-speech is not supported in this browser.");
//     }
//   };

//   return (
//     <div className="cont">
//       {showPermissionPopup && (
//         <div className="permission-popup">
//           <div className="popup-content bg-[#DADADA] dark:bg-[#020617]">
//             <p className="dark:text-white">Do you want to allow access to your camera?</p>
//             <button className="bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105" onClick={() => handlePermissionPopup(true)}>Allow</button>
//             <button className="bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105" onClick={() => handlePermissionPopup(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//       <div className="l-section w-[750px] h-[410px]">
//         <div className="camera-container">
//           <video ref={videoRef} autoPlay style={{ display: cameraOn ? 'block' : '' }} />
//           <canvas
//             ref={canvasRef}
//             width="750"
//             height="415"
//             style={{ display: "none" }}
//           />
//         </div>
//       </div>
//       <div className="r-section">
//         <div className="text-area w-[550px] h-[300px] relative border border-gray-300 p-2">
//           <button 
//             onClick={clearMessage} 
//             className="absolute top-2 right-2 text-gray-950 hover:text-red-600 hover:scale-125 font-bold"
//             style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
//           >
//             X
//           </button>
//           {/* Use CSS to ensure correct RTL display */}
//           <p className="translated-text rtl mt-2">{message}</p>
//           <button
//             onClick={() => speakText(message, 'male')}
//             className="absolute  bottom-3 right-3 text-2xl text-gray-950 hover:text-[#419AF5]  hover:scale-125 font-bold"
//             style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
//           >
//             <FontAwesomeIcon icon={faVolumeHigh} />
//           </button>
//         </div>
//         <button onClick={captureFrameAndDetect} className="start-btn  bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105">
//           Translate
//         </button>
//         <button onClick={toggleWebcam} className="start-btn  bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105">
//           {cameraOn ? "Stop Camera" : "Start Camera"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CameraApp;

/////////////

import React, { useState, useRef, useEffect } from "react";
import "./Camera.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

function CameraApp() {
  const [message, setMessage] = useState("");
  const [cameraOn, setCameraOn] = useState(false);
  const [showPermissionPopup, setShowPermissionPopup] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, []);

  const handlePermissionPopup = (permissionGranted) => {
    setShowPermissionPopup(false);
    if (permissionGranted) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
          setCameraOn(true);
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });
    }
  };

  const toggleWebcam = () => {
    if (!cameraOn) {
      setShowPermissionPopup(true);
    } else {
      let tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setCameraOn(false);
    }
  };

  const captureFrameAndDetect = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    canvasRef.current.toBlob((blob) => {
      const formData = new FormData();
      formData.append("frame", blob);

      fetch("http://localhost:5000/detect", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const newCharacter = data.predicted_character;
          setMessage((prevMessage) => prevMessage + newCharacter);
        })
        .catch((error) => console.error("Error:", error));
    }, "image/jpeg");
  };

  const clearMessage = () => {
    setMessage("");
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-EG'; // Ensure the correct language is set
      const voices = window.speechSynthesis.getVoices();
      
      // Log all available voices
      voices.forEach((voice, index) => {
        console.log(`Voice ${index}: ${voice.name} (${voice.lang})`);
      });

      // Select the 'Hoda' voice for Egyptian Arabic
      const selectedVoice = voices.find(voice => voice.lang === 'ar-EG' && voice.name.includes('Hoda'));
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      } else {
        console.warn("The 'Hoda' voice was not found for the selected language.");
      }
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Text-to-speech is not supported in this browser.");
    }
  };

  return (
    <div className="cont">
      {showPermissionPopup && (
        <div className="permission-popup">
          <div className="popup-content bg-[#DADADA] dark:bg-[#020617]">
            <p className="dark:text-white">Do you want to allow access to your camera?</p>
            <button className="bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105" onClick={() => handlePermissionPopup(true)}>Allow</button>
            <button className="bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105" onClick={() => handlePermissionPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="l-section w-[750px] h-[410px]">
        <div className="camera-container">
          <video ref={videoRef} autoPlay style={{ display: cameraOn ? 'block' : '' }} />
          <canvas
            ref={canvasRef}
            width="750"
            height="415"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="r-section">
        <div className="text-area w-[550px] h-[300px] relative border border-gray-300 p-2">
          <button 
            onClick={clearMessage} 
            className="absolute top-2 right-2 text-gray-950 hover:text-red-600 hover:scale-125 font-bold"
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            X
          </button>
          {/* Use CSS to ensure correct RTL display */}
          <p className="translated-text rtl mt-2">{message}</p>
          <button
            onClick={() => speakText(message)}
            className="absolute  bottom-3 right-3 text-2xl text-gray-950 hover:text-[#419AF5]  hover:scale-125 font-bold"
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faVolumeHigh} />
          </button>
        </div>
        <button onClick={captureFrameAndDetect} className="start-btn  bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105">
          Translate
        </button>
        <button onClick={toggleWebcam} className="start-btn  bg-gradient-to-r from-[#419AF5] to-[#8D36C6] hover:scale-105">
          {cameraOn ? "Stop Camera" : "Start Camera"}
        </button>
      </div>
    </div>
  );
}

export default CameraApp;



