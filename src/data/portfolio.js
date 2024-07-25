import assets from "../assets"

// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Thota Maniram",
    message: "I'm a 4th year Mechanical student at Indian Institute of Technology Dharwad and an aspiring software engineer.",
    // Currently working as a web developer at my university building tools to aid students, educators, and staff.",
    basedLocation: "Dharwad, Karnataka, India",
    resumeLink: assets.resume, // recommended: to upload your own resume in pdf format
    logo: {
        link: assets.logo, // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: assets.portrait
}

const socialMediaLinks = {
    github: "https://github.com/maniram3112",
    linkedin: "https://www.linkedin.com/in/thota-maniram",
    medium: "",
    stackoverflow: "",
    xtwitter: ""
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Thota Maniram and I'm a Mechanial Engineering student at Indian Institute of Technology Dharwad. I have a passion for coding in languages such as Java, Python.",
        // Work in web development and have experience with ReactJsframeworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner.",
        //  Programming for 3+ years and have 4 years of experience in advanced mathematics such as calculus, statistics, and discrete mathematics. Currently working as a web development intern for my university."
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        // "Python",
        "JavaScript",
        "React.js",
        // "MySQL",
        // "Swift"
    ],
    photo1Link: assets.portrait,
    photo2Link: assets.portrait,
    photo3Link: assets.portrait
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        "position": "FrontEnd Web Developer",
        "company": {
        "name": "IIT Dharwad",
        "link": "https://www.iitdh.ac.in/"
        },
        "duration": "June 2024 - July 2024",
        "bulletPoints": [
        "Developed a frontend user interface for a web-based application called Incremental Sheet Forming.",
        "Achieved 100+ GitHub code contributions as an intern on the team.",
        "Collaborated closely with the Faculty in charge of the project and worked with the backend developer to ensure seamless integration."
        ],
        "hashtags": [
        "Python",
        "Flask",
        "JavaScript",
        "HTML",
        "CSS"
        ]
    },
    {
        "position": "FrontEnd Web Developer",
        "company": {
        "name": "Cultural Fest"
        },
        "duration": "Aug 2023 - Oct 2023",
        "bulletPoints": [
        "Collaborated with a team of developers to create engaging and responsive web interfaces for the Cultural Fest.",
        "Enhanced frontend skills by implementing interactive features and ensuring cross-browser compatibility.",
        "Led code reviews and provided feedback to junior developers, fostering a culture of continuous learning and improvement."
        ],
        "hashtags": [
        "ReactJS",
        "TeamWork",
        "JavaScript",
        "WebDevelopment"
        ]
    }
]


// --- 💻 Work Section ---
const works = [
    {
        projectName: "Habit Buddy",
        yearCompleted: "July 2024",
        description: "Habit-Buddy is a React.js application designed to help users track their newly found habits regularly. With Habit-Buddy, users can easily monitor their progress by maintaining a daily streak, ensuring consistency and motivation in their habit-forming journey.",
        techStack: "React.js",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/maniram3112/habit-buddy/"
            },
            {
                label: "",
                type: "external",
                url: "https://habit-buddy.netlify.app/"
            }
        ],
        imageLink: assets.habitBuddy,
        alignLeft: false
    },
    {
        projectName: "Snap Syndicate",
        yearCompleted: "June 2024",
        description: "This is a dummy website for a Photography Club, created to showcase web development skills using React.js. It features a monthly section for the best shots of the year and a section for upcoming events and workshops. Note: This site is purely for demonstration purpose only.",
        techStack: "ReactJs",
        links: [
            {
                label: "",
                type: "external",
                url: "https://snap-syndicate.netlify.app/"
            }
        ],
        imageLink: assets.snapSyndicate,
        alignLeft: true
    },
    // {
    //     projectName: "Sudoku Game & Solver",
    //     yearCompleted: "2021",
    //     description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
    //     techStack: "Java",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/sudokusolver"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://youtu.be/lXOjOrjf5hU"
    //         }
    //     ],
    //     imageLink: "images/sudoku_pic.png",
    //     alignLeft: false
    // },
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/maniram3112?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships in the RTP area for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "maniramthota12@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

const portfolio = {colors, transitions, splashScreen, greeting, socialMediaLinks, about, experiences, works, archiveLink, contact};

export default portfolio;