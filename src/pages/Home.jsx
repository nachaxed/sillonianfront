import React from 'react'
import Explore from '../components/Explore'
import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Socials from '../components/Socials'

const Home = () => {
  return (
     <div className="home">
        <Intro />
        <Latest />
        <Explore />
        <Socials />
     </div>   


  )
}

export default Home
