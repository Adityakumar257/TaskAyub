/* eslint-disable no-unused-vars */
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const images = [
        {
          url: "https://imgs.search.brave.com/sxIjKwXdMESmIKdKFesZ6Cp7o2ZiMAFzaW4Cd5Nop8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIz/MjM3ODA4L3Bob3Rv/L3N1bi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VjlBbFNN/Y2dEWEFYR2V3N0pX/ZGw3OFNCT1I3Wllz/cUJqVWZnbVdYWDlV/RT0",
          label: "STRENGTH",
        },
        {
          url: "https://imgs.search.brave.com/4Uwe_eTLgVfmxSFs4OyDWMVmwCO9hPw6_wfFxSxONTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS52b3guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8yL2Nob3J1cy91/cGxvYWRzL2Nob3J1/c19hc3NldC9maWxl/Lzk3OTAyODEvREFS/S18xMDJfVW5pdF8w/MTM5MlIuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJmNyb3A9/MCwwLDEwMCwxMDAm/dz0yNDAw",
          label: "MOBILITY",
        },
        {
          url: "https://imgs.search.brave.com/BjUkVgxdk0zAvvsJFSZwERAlvsj9Hie5TDq8rb6Imy8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIx/MDExNjUyL3Bob3Rv/L25pZ2h0LXNjZW5l/LW1pbGt5LXdheS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1H/MllvSEJCc3dWdEhn/eWNxbHRyYmdzWjll/bHR4dDA2WW04NUpw/NW5mZDV3PQ",
          label: "DRILLS",
        },
      ];
    
  return (
    <>

   


    
    <div className="w-full p-6 bg-gray-100 mt-44 border-black flex justify-center">
  <div className="gallery">
    {images.map((image, index) => (
      <div key={index} className="card">
        <img
          src={image.url}
          alt={image.label}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded w-14">
          {image.label}
        </div>
      </div>
    ))}
  </div>
</div>

    
    
    </>
  )
}

export default Slider