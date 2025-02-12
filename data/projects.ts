import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "Attendance system",
    description: "A full-stack Attendance managemetn system  platform built with Flutter, Javascribt, php,and Tailwind CSS",
    image: "/images/capital.png",
    technologies: ["Php.js", "Flutter", "Tailwind CSS", "Api","Firebase"],
    githubLink: "http://attendanceproject1.acf.com.so/",
    liveLink: "https://project1.com"
  },
  {
    id: 2,
    title: "Election Management System",
    description: "Election Union management system",
    image: "/images/codeen.png",
    technologies: ["Php", "Api", "Socket.io", "Mysql"],
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2.com"
  },
  // Add more projects as needed
] 