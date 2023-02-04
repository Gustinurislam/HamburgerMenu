import * as LottiePlayer from "@lottiefiles/lottie-player";
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div className="bg-indigo-600 w-full h-screen">
      <Navbar />
      <div className="h-[500px]">
        <lottie-player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/private_files/lf30_fjln45y5.json"
        ></lottie-player>
      </div>
    </div>
  )
}

export default App
