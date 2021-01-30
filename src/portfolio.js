
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Aparna Vijayakumar",
  title: "Hi. I'm Aparna",
  subTitle: "A Computer Science graduate student at University of Massachusetts, Amherst, pursuing a concentration in Data Science. An AI enthusiast, with experience in building deep learning, machine learning and natural language processing models.",
  resumeLink: "https://drive.google.com/file/d/1g5El0AOfjVOBS3IMIu4CV-TbtgRy06_T/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Aparna-Vijayakumar",
  linkedin: "https://www.linkedin.com/in/aparna-vijayakumar/",
  email: "avijayakumar@umass.edu",
  //instagram : "https://www.instagram.com/aparnavijayakumar/",
  twitter: "https://twitter.com/apstweeting",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/aparna.vijayakumar.562",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'University of Massachusetts, Amherst',
      logo: require('./assets/images/umass.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2019 - May 2021',
      desc: 'GPA : 3.93 / 4.0',
      descBullets: [
        'Coursework : Machine Learning, Natural Language Processing, Neural Networks, Data Visualization, Database Design, Algorithms for Data Science, Applied Information Retrieval, Business Intelligence and Analytics, Statistics'
      ],
    },
    {
      schoolName: 'Anna University',
      logo: require('./assets/images/annauniv.png'),
      subHeader: 'Bachelor of Engingineering in Computer Science',
      duration: 'September 2015 - May 2019',
      desc:
        'GPA : 8.1 / 10.0',
      descBullets: ['Coursework : Programming and Data Structures, Design and Analysis of Algorithms, Operating Systems, Database Management, Computer Networks, Distributed Systems, Artificial Intelligence, Discrete Mathematics, Cloud Computing'],
    },
  ],
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",  //Insert stack or technology you have experience in
      progressPercentage: 5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Machine Learning",  //Insert stack or technology you have experience in
      progressPercentage: 5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Natural Language Processing",  //Insert stack or technology you have experience in
      progressPercentage: 5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Deep Learning",  //Insert stack or technology you have experience in
      progressPercentage: 5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Scikit-Learn",
      progressPercentage: 5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "SQL",
      progressPercentage: 4.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Object Oriented Programming",  //Insert stack or technology you have experience in
      progressPercentage: 4,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Java",
      progressPercentage: 4,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "PyTorch",
      progressPercentage: 4,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Version Control (Git)",
      progressPercentage: 4,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    
    {
      Stack: "Linux",
      progressPercentage: 3.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    
    {
      Stack: "HTML",
      progressPercentage: 3.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "CSS",
      progressPercentage: 3.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "Tableau",
      progressPercentage: 3.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },

    {
      Stack: "C",
      progressPercentage: 3.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    
    {
      Stack: "JavaScript",
      progressPercentage: 3.5,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "C++",
      progressPercentage: 3,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
        {
      Stack: "D3.js",
      progressPercentage: 3,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
    {
      Stack: "MATLAB-Simulink",
      progressPercentage: 2,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",  
      company: "IESL",
      companylogo: require("./assets/images/umass_red.png"),
      date: "Jun 2020 – Sep 2020",
      descBullets: [
        "Worked with Prof. Andrew McCallum on developing sequence aware recommendation system for shopping cart based recommendations using Python and PyTorch.",
        " Used multifacet embeddings instead of traditional embeddings to represent the product space as the possible next product distribution could have multiple modes."

      ]
    },
    {
      role: "Graduate Student Researcher",   
      company: "IBM Research",
      companylogo: require("./assets/images/ibm.png"),
      date: "Jan 2020 – Jun 2020",
      descBullets: ["Converted 4 large-scale Question Answering datasets to an entailment format.",
      "Analyzed performance of RoBERTa trained on converted datasets vs MNLI dataset PyTorch.",
      "Achieved state-of-the-art accuracy of 86.5% on the task of checking summaries for factual correctness.",
      "Submission under review for publication in NAACL."
    ]
    },
    {
      role: "Software Development Intern",  
      company: "Gannet Engineering",
      companylogo: require("./assets/images/gannet.jpg"),
      date: "Jun 2018 – Jul 2018",
      descBullets: ["Predicted the amounts of NOx and particulate matter emitted, from an engine's speed, torque, intake pressure, fuel quantity and pressure using linear regression in Python. Achieved R-squared of 83.2%",
      "Developed a user friendly display using MATLAB - Simulink for indicating speed, engine temperature, and fuel level for automobiles."
    ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Aparna-Vijayakumar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/hackher.png"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/ottertune-full.svg"),
      link: "http://nextu.se/"
    },
    {
      image: require("./assets/images/monalisa.jpg"),
      link: "http://nextu.se/"
    },
    {
      image: require("./assets/images/summary.png"),
      link: "http://nextu.se/"
    },
    {
      image: require("./assets/images/breastcancer.jpeg"),
      link: "http://nextu.se/"
    },
    {
      image: require("./assets/images/google-bert.jpg"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Publications"),
  subtitle: "I have had the opportunity to present some of my research at top conferences!",

  achivementsCards: [
    {
      title: "Reading Comprehension as Natural Language Inference: A Semantic Analysis",
      subtitle: "*Anshuman Mishra, *Dhruvesh Patel , *Aparna Vijayakumar, Xiang Li, Pavan Kapanipathi, and Kartik Talamadupula",
      image: require("./assets/images/coling.png"),
      footerLink: [
        { name: "Paper", url: "https://www.aclweb.org/anthology/2020.starsem-1.2.pdf" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+18825870649",
  email_address: "avijayakumar@umass.edu"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { illustration, greeting, socialMediaLinks, skillsSection, techStack, educationInfo, workExperiences, bigProjects, openSource, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
