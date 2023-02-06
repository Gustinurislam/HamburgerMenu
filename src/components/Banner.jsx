import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useState } from "react"
import Sound from 'react-sound'
import { FaVolumeUp, FaVolumeMute, } from "react-icons/fa";

const Banner = (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) => {
    const [play, setPlay] = useState(false)

    return (
        <div className="h-[500px]">
            <lottie-player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/private_files/lf30_fjln45y5.json"
            ></lottie-player>
            <div className="flex justify-center items-center">
                <button className="text-2xl border px-10 py-2 rounded-full font-medium text-indigo-600 bg-white" onClick={() => setPlay(!play)}>{!play ? (<FaVolumeUp/>) : (<FaVolumeMute/>)}</button>
                <Sound
                    url="http://streaming.tdiradio.com:8000/house.mp3"
                    playStatus={!play ?  Sound.status.STOPPED : Sound.status.PLAYING }
                    playFromPosition={300}
                    onLoading={handleSongLoading}
                    onPlaying={handleSongPlaying}
                    onFinishedPlaying={handleSongFinishedPlaying}
                />
            </div>
        </div>
    )
}

export default Banner
