import React, { useRef, useState } from 'react'
import './Imagegenerator.css'
import cover from '../../assets/cover.jpg'

const Imagegenerator = () => {

  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);


  const imageGenerator = async () => {
    if (inputRef.current.value === "") return ;
    setLoading(true);

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(inputRef.current.value)}`;

    setImage_url(url);

  }
  return (
    <div className='ai-image-generator'>
      <div className="header">
        Ai image <span>generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
            <img src={image_url === "/" ? cover : image_url} alt=""
            style={{ display: loading ? "none" : "block" }}
             onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                 alert("Image not available for this prompt.");
                setImage_url("/");
              }}
            />
          {loading && <p>Generating image, please wait...</p>}
        </div>
      </div>
      <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' 
         onKeyDown={(e) => {
    if (e.key === "Enter") imageGenerator();
  }} />
        <div className="generate-btn" onClick={() => {
          imageGenerator()
        }}>Generate</div>
      </div>
    </div>
  )
}

export default Imagegenerator