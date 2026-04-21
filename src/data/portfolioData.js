import { Github, Mail, Phone, ExternalLink } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Uttam Kumar",
        headline: "B.Tech CSE Student | Full Stack Developer | MERN Stack Enthusiast",
        location: "Punjab, India",
        email: "me.uttam222@gmail.com",
        phone: "+91 9708004242",
        github: "https://github.com/Uttam222",
        linkedin: "https://www.linkedin.com/in/uttam1-kumar/",
        resume: "/Nikeshconfirmcv12.pdf",

        // resume: "/Uttamconfirmcv12.pdf", // Link to the provided CV in root directory
        stats: {
            cgpa: "7.35",
            projects: "2",
            skills: "React | Node.js | MongoDB | Express | JavaScript"
        }
    },
    hero: {
        title: "Hi, I'm Uttam Kumar",
        subtitle: "Full Stack Developer | MERN Stack | Building Scalable Web Apps",
        rotatingText: [
            "Full Stack Developer",
            "MERN Stack Developer",
            "Frontend + Backend Engineer",
            "React Developer"
        ]

    },
    about: "I am a B.Tech Computer Science and Engineering student at Lovely Professional University, passionate about Full Stack Development and building modern web applications.I specialize in creating scalable and responsive applications using technologies like React, Node.js, Express, and MongoDB.I enjoy solving real-world problems, building user-friendly interfaces, and continuously learning new technologies to become a highly skilled Full Stack Developer.",
    skills: {
        categories: [
            {
                name: "Programming Languages",
                color: "from-[#22c55e] to-[#eab308]",
                glow: "rgba(34,197,94,0.4)",
                skills: [
                    { name: "JavaScript", icon: "javascript", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                    { name: "C++", icon: "cpp", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
                    { name: "C", icon: "c", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
                    { name: "HTML", icon: "html", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                    { name: "CSS", icon: "css", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                ]
            },
            {
                name: "Frameworks / Libraries",
                color: "from-[#06b6d4] to-[#06b6d4]",
                glow: "rgba(6,182,212,0.4)",
                skills: [
                    { name: "React", icon: "react", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Node.js", icon: "nodejs", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                    { name: "Express.js", icon: "express", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                    { name: "Tailwind CSS", icon: "tailwindcss", isImage: true, url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
                ]
            },
            {
                name: "Backend & Database",
                color: "from-[#38bdf8] to-[#0ea5e9]",
                glow: "rgba(56,189,248,0.4)",
                skills: [
                    { name: "MongoDB", icon: "mongodb", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                    { name: "MySQL", icon: "mysql", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                    { name: "REST APIs", icon: "Network" },
                    { name: "JWT Auth", icon: "Shield" },
                ]

            },
            {
                name: "Tools / Technologies",
                color: "from-[#0ea5e9] to-[#c026d3]",
                glow: "rgba(14,165,233,0.4)",
                skills: [
                    { name: "Git", icon: "git", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                    { name: "GitHub", icon: "Github" }, 
                    { name: "MySQL", icon: "mysql", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                    { name: "VS Code", icon: "vscode", isImage: true, url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
                    { name: "Postman", icon: "postman", isImage: true, url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
                ]
            },
            {
                name: "Soft Skills",
                color: "from-[#38bdf8] to-[#22c55e]",
                glow: "rgba(56,189,248,0.4)",
                skills: [
                    { name: "Problem Solving", icon: "Lightbulb" },
                    { name: "Teamwork", icon: "Users" },
                    { name: "Communication", icon: "MessageSquare" },
                    { name: "Adaptability", icon: "Shuffle" },
                    { name: "Quick Learning", icon: "Zap" },
                ]
            },
        ]
    },
    projects: [
        {
            id: 1,
            title: "Cafe Menu Webpage",
            category: "WEB",
            date: "Project 1",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
            summary: "A responsive cafe menu webpage using HTML and CSS, improving layout responsiveness by 65%.",
            details: "Developed a responsive cafe menu webpage using HTML and CSS. Designed structured layout with sections for coffee and desserts, implemented styled pricing display, headers, and footer with contact information increasing navigation efficiency by 55%. Applied background images, typography, and alignment techniques to create a visually appealing, user-friendly menu.",
            tech: ["HTML", "CSS"],
            links: {
                github: "https://github.com/Uttam222/",
                live: null,
            }
        },
        {
            id: 2,
            title: "Hospital Appointment Scheduling",
            category: "Web",
            date: "Project 2",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
            summary: "A functional web platform for patients to submit appointment requests online, reducing manual registrations by 70%.",
            details: "Built a functional web platform allowing patients to submit appointment requests online, reducing manual hospital registrations by 70%. Designed a clean UI, added form validation, and ensured responsive layouts for better usability",
            tech: ["HTML", "CSS", "PHP", "JavaScript"],
            links: {
                github: "https://github.com/Uttam222/Hospital-Management-System",
                live: null
            }
        },
        
    ],
    education: [
        {
            school: "Lovely Professional University, Punjab",
            degree: "B.Tech CSE (Full Stack)",
            grade: "CGPA: 7.35",
            year: "2023 - Present",
            status: "current",
            number: "01",
            color: "from-[#06b6d4] to-[#06b6d4]",
            glow: "rgba(6,182,212,0.5)",
            image: "https://www.lpu.in/lpu-assets/images/why-lpu/hero.jpg"
        },
        {
            school: "S.N S. College, Hajipur",
            degree: "Intermediate",
            grade: "65.2%",
            year: "2021 - 2022",
            status: "completed",
            number: "02",
            color: "from-[#38bdf8] to-[#0ea5e9]",
            glow: "rgba(56,189,248,0.5)",
            image: "https://tse1.mm.bing.net/th/id/OIP.Fi82uAWgEXSfHNuu6ZwjzAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            school: "St. John's Academy, Vaishali",
            degree: "Matriculation",
            grade: "73.2%",
            year: "2019 - 2020",
            status: "completed",
            number: "03",
            color: "from-[#22c55e] to-[#eab308]",
            glow: "rgba(34,197,94,0.5)",
            image: "https://stjohnsacademyvaishali.com/adminpanel/upload/d-1662637856.jpg"
        }
    ],
    certifications: [
        {
            title: "What is Data Science?",
            issuer: "IBM (Coursera)",
            desc: "Earned in 2024 by Uttam Kumar. Completed IBM Data Science certification covering data science methodology, tools, and practical applications.",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            link: "https://drive.google.com/file/d/16KWaUWFhTz-YyKOsQ1NbeLMctZmsSLkn/view?usp=drive_link",
            year: "2024"
        },
        {
            title: "NPTEL Certificate",
            issuer: "NPTEL",
            desc: "Completed an NPTEL certified course covering core Computer Science concepts.",
            image: "/cert_nptel.png",
            link: "https://drive.google.com/file/d/1PPeJnX-8XbYxEw3i0BaFAVuoDEtnKUpI/view"
        },
        {
            title: "Software Implementation Certificate",
            issuer: "Training Program",
            desc: "Completed Software Implementation training covering real-world software development practices.",
            image: "/cert_software.png",
            link: "https://drive.google.com/file/d/17i1aK_-XXbFHxJl5HRXTfUHL_qAMq-xg/view"
        },
        {
            title: "Data Structure Training Certificate",
            issuer: "Cipher Schools",
            desc: "Completed training in Java, Data Structures, Algorithms, and Problem Solving.",
            image: "/cert_dsa.png",
            link: "https://drive.google.com/file/d/1GKGNPSnFLRcaW06hJ_yjU6S_woJ9qkhe/view?usp=drive_link"
        },
        {
            title: "Udemy Certificate",
            issuer: "Udemy",
            desc: "Completed a Udemy online course covering key programming and technology skills.",
            image: "/cert_udemy.png",
            link: "https://drive.google.com/file/d/1hEzrYFE8GRizQXMTZEF3ugMT6pllxvyo/view"
        }
    ],
    training: [
        {
            title: "Data Structures & Algorithms Training",
            company: "Cipher Schools",
            duration: "6 Weeks",
            number: "01",
            color: "from-[#06b6d4] to-[#38bdf8]",
            glow: "rgba(6,182,212,0.5)",
            icon: "Code2",
            desc: "Completed training in Java, Data Structures, Algorithms, and Problem Solving. Solved coding problems and learned core programming concepts.",
            skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
            link: "https://drive.google.com/file/d/1GKGNPSnFLRcaW06hJ_yjU6S_woJ9qkhe/view?usp=drive_link"
        }
    ],
    extracurricular: [
        {
            role: "Volunteer Work",
            org: "Social Service",
            icon: "Heart",
            color: "from-[#38bdf8] to-[#0ea5e9]",
            glow: "rgba(56,189,248,0.5)",
            desc: "Actively participated in social work activities and community initiatives, helping organize events and support social causes."
        },
        {
            role: "Cyber Security Symposium",
            org: "Participant",
            icon: "Shield",
            color: "from-[#06b6d4] to-[#06b6d4]",
            glow: "rgba(6,182,212,0.5)",
            desc: "Participated in Cyber Security Symposium and learned about modern security technologies and cyber safety concepts."
        },
        {
            role: "Technical Events Participation",
            org: "College Events",
            icon: "Trophy",
            color: "from-[#22c55e] to-[#eab308]",
            glow: "rgba(34,197,94,0.5)",
            desc: "Participated in technical events, coding activities, and workshops to improve programming and problem solving skills."
        }
    ]
};
