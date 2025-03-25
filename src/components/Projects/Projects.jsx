import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import testGif from '../../assets/teminal_test_your_luck2-min.gif'
import morseWeb from '../../assets/morse-in-one-web.png'
import morseCodeGen from '../../assets/morse-code-generator.png'
import myBlogImg from '../../assets/my-blog.jpeg'
import cvLab from '../../assets/cvlab.png'
import filehiderimg from '../../assets/filehider.png'
import fitbuddyimg from '../../assets/fitbuddy.png'
import airesumebuilderimg from '../../assets/AIResumeBuilder.png' 
import emailsenderimg from '../../assets/emailSender.png'
import ticTacToeimg from '../../assets/ticTacToe.png'
import textUtilimg from '../../assets/textUtilx.png'
import blogApisimg from '../../assets/BlogAPIs.png'
import carRentalimg from '../../assets/carRental.png'
import urlShortnerimg from '../../assets/urlShortner.png'
import rpsImg from '../../assets/rockPaper.png'


export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="flex flex-col justify-center items-center gap-4  w-full min-h-screen text-center my-8 "
    >
      <h1 className="text-3xl text-center font-bold max-w-[800]">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        <ProjectCard
          title="CV Lab"
          description="CVLab is a LaTeX-powered resume builder with AI-driven ATS score analysis using Google's Gemini API."
          image={cvLab}
          link="https://github.com/akashpratapsing/CVLab-Resume-Builder-And-ATS-Score-Checker"
          delay={1}
        />
        <ProjectCard
          title="Email Sender"
          description="Easily send emails with support for HTML content using a Spring Boot backend and React + Vite + Tailwind frontend."
          image={emailsenderimg}
          link="https://github.com/akashpratapsing/Email-Sender"
          delay={0.8}
        />
        <ProjectCard
          title="File Hider"
          description="This project implements a command-line interface (CLI) application for hiding and unhiding files using Java."
          image={filehiderimg}
          link="https://github.com/akashpratapsing/File-Hider"
          delay={1.6}
        />
        <ProjectCard
          title="Fit Buddy"
          description="Fit Buddy is a Python-based Telegram bot offering BMI, BMR, and body fat calculations with fast responses."
          image={fitbuddyimg}
          link="https://github.com/akashpratapsing/Telegram-Bot-Fit-Buddy"
          delay={1.3}
        />
        <ProjectCard
          title="AI Resume Builder"
          description="AI-based resume builder that generates resumes from prompts and allows users to edit content via forms. Built with Spring Boot and Ollama."
          image={airesumebuilderimg}
          link="https://github.com/akashpratapsing/AI-Resume-Builder"
          delay={1}
        />
        <ProjectCard
          title="Tic Tac Toe"
          description="Desktop Java Tic Tac Toe game featuring an intelligent AI using Minimax with Alpha-Beta pruning for optimal moves."
          image={ticTacToeimg}
          link="https://github.com/akashpratapsing/Tic-Tac-Toe"
          delay={0.2}
        />
        <ProjectCard
          title="TextUtilx"
          description="TextUtilx is a free, user-friendly web application designed to streamline your text manipulation needs."
          image={textUtilimg}
          link="https://github.com/akashpratapsing/Textutilx"
          delay={0.6}
        />
        <ProjectCard
          title="Blog Apis"
          description="RESTful blog API built with Java, Spring Boot, and Spring Security, for developers to create and manage their blog functionalities."
          image={blogApisimg}
          link="https://github.com/akashpratapsing/Blog-APIs"
          delay={0.6}
        />
        <ProjectCard
          title="Car Rental "
          description="This Java project implements a simple car rental system using Object-Oriented Programming (OOP) concepts."
          image={carRentalimg}
          link="https://github.com/akashpratapsing/Car-Rental-Using-OOPs"
          delay={1.2}
        />
        <ProjectCard
          title="Url Shortner "
          description="A simple URL shortener with user authentication, link tracking, and an interactive dashboard built with Spring Boot and React. "
          image={urlShortnerimg}
          link="https://github.com/akashpratapsing/URL-Shortner"
          delay={1.4}
        />
        <ProjectCard
          title="Rock Paper Scissors "
          description="A simple and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript for fun user experience."
          image={rpsImg}
          link="https://github.com/akashpratapsing/Rock-Paper-Scissors"
          delay={1.6}
        />
      </div>
    </div>
  )
}
