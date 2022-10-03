import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SocialIcons from './SocialIcons'
import Skills from './Skills'

const Home = () => {

  const [avatar, setAvatar] = useState('/avatar.jpeg')

    const info = {
        'name': 'Christiaan',
        'surname': 'Fourie',
        'title': 'Front End & Visual UX Design',
        'intro': 'Hi! I"m Christiaan, I am a 24 year old guy that loves the world of Technology & User Experience. You"ll always find me out and about looking for inspiration and trying to find the beauty in things.'
    }

    const glitch = () => {
        if (avatar === '/avatar-glitch.png') {
            setAvatar('/avatar.jpeg')
        } else {
            setAvatar('/avatar-glitch.png')
        }        
    }

  return (
    <div className={styles.container}>
      {/* <div className={styles.ImageBox}>
        <Image layout='fill' onClick={glitch} className={styles.logoImage} src={avatar} alt="" /> 
      </div>                */}
      <h1 className={styles.headingName}> { info.name + ' ' + info.surname} </h1>
      <h5 className={styles.title}> {info.title} </h5>
      <p className={styles.intro}> {info.intro} </p>
      <SocialIcons />
      <Skills />
    </div>
  )
}

export default Home
