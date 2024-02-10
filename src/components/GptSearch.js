import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG} from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
        className="h-screen w-screen"
          src= {BG_IMG}
          alt="backgroundimage"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch