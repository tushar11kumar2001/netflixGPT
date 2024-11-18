



const VideoBackground = ({ trailerKey }) => {

  console.log("trailer key :- ", trailerKey);
   

  return (
    <div className="overflow-hidden w-screen h-screen ">
      {trailerKey &&<><iframe 
      className="w-full h-[120%] relative top-[-50px]"  
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`} 
      title="YouTube video player"

      ></iframe>

      </>
      }
    </div>
  )
}

export default VideoBackground
