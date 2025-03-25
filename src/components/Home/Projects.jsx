import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import jsonIcon from '../../assets/jsondb.jpg'
import xCodeImg from '../../assets/x-code.png'
import floatingHippoImg from '../../assets/Floating-hippo2.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import cvLab from '../../assets/cvlab.png'
import filehiderimg from '../../assets/filehider.png'
import fitbuddyimg from '../../assets/fitbuddy.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 "
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <ProjectCard
            title="CV Lab"
            description="CVLab is a LaTeX-powered resume builder with AI-driven ATS score analysis using Google's Gemini API."
            image={cvLab}
            link="https://github.com/akashpratapsing/CVLab-Resume-Builder-And-ATS-Score-Checker"
            delay={1}
          />
          <ProjectCard
            title="Fit Buddy"
            description="Fit Buddy is a Python-based Telegram bot offering BMI, BMR, and body fat calculations with fast responses."
            image={fitbuddyimg}
            link="https://github.com/akashpratapsing/Telegram-Bot-Fit-Buddy"
            delay={1.3}
          />
          <ProjectCard
            title="File Hider"
            description="This project implements a command-line interface (CLI) application for hiding and unhiding files using Java."
            image={filehiderimg}
            link="https://github.com/akashpratapsing/File-Hider"
            delay={1.6}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => navigate('projects')}
            variant="outlined"
            color="primary"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  )
}
