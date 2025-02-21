export const getPortofolioData = () => ([
    {
        id: 1,
        title: "auliaaputrir-Personal Website",
        description: 'A personal website showcasing projects, skills, and experience.',
        projectDate: "Februari 2025",
        imageURL: "/images/auliaaputrir.png",
        link: '#'
    },
    {
        id: 2,
        title: "Wedding Invitation Website",
        description: 'A wedding invitation web app featuring a cover, a countdown to the big day, and music to enhance the celebration (optimized for mobile view only).',
        projectDate: "December 2024",
        imageURL: "/images/wedding.jpeg",
        link: "https://github.com/auliaaputrir/wedding-invitation",
    },
    {
        id: 3,
        title: "News Web App",
        description: 'A front-end web application that retrieves data from a third-party API.',
        projectDate: "October 2024",
        imageURL: "/images/news.png",
        link: "https://github.com/auliaaputrir/news-web-app",
    }
])

export const getEducationData = () => ([
    {
        id: 1,
        institution: "FGA Kominfo - Mitra Hacktiv8 x IBM",
        course: "Web Development Program + React",
        location: "Jakarta, Indonesia",
        time: 'Agustus 2024 – Oktober 2024'
    },
    {
        id: 2,
        institution: "Universitas Muhammadiyah Surakarta",
        course: "Bachelor of Informatics Engineering ",
        location: "Surakarta, Indonesia",
        timeline: '2018 – 2023'
    },
])

export const getExperienceData = () => ([
    {
        id: 1,
        company: "FGA Kominfo - Mitra Hacktiv8 x IBM",
        position: "Web Development & React Trainee",
        description: [
            "Learned fundamental concepts and best practices for building responsive web applications.",
            "Managed application state efficiently using Redux for better scalability.",
            "Integrated APIs to fetch and display dynamic data.",
            "Developed a final project, a news application using React, fetching data from The New York Times API."
        ],
        location: "Jakarta, Indonesia",
        timeline: "Aug 2022 – Aug 2024"
    },
    {
        id: 2,
        company: "PT. Digikidz Indonesia",
        position: "Coach",
        description: [
            "Effectively maintained partnerships with 10+ schools and ensured that the collaborations will continue into the upcoming year through extracurricular programs.",
            "Collaborated with more than 10+ teams in teaching.",
            "Proactively engaged in teaching 250+ students."
        ],
        location: "Surakarta, Indonesia",
        timeline: "Aug 2022 – Aug 2024"
    },
    {
        id: 3,
        company: "Universitas Muhammadiyah Surakarta",
        position: "Assistant Practicum at Information Technology Department",
        description: [
            "Assisted 3 practical course subjects: Algorithms and Data Structures (Python), Dynamic Web Programming (PHP), and Database Systems (MySQL).",
            "Successfully led 10 classes as course coordinator.",
            "Planned and coordinated online & offline meetings with 30+ participants.",
            "Documented attendance, assignments, and grades of 50+ students."
        ],
        location: "Surakarta, Indonesia",
        timeline: "Feb 2021 – Aug 2022"
    },
])