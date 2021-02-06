
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
  subTitle: "An ardent developer, passionate about using technology to solve real-world problems. An AI enthusiast, with experience in building deep learning, machine learning and natural language processing models.",
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
      Stack: "OOP",  //Insert stack or technology you have experience in
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
      Stack: "HTML",
      progressPercentage: 4,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },

    {
      Stack: "CSS",
      progressPercentage: 4,  //Insert relative proficiency in percentage
      bgcolor : "#aaa5ff"
    },

    {
      Stack: "ReactJS",
      progressPercentage: 3.5,
      bgcolor : "#aaa5ff"
    },
    
    {
      Stack: "Linux",
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
const projectInfo = {
  display: true, // Set false to hide this section, defaults to true
  projects: [[{
      projectName: 'Sentiment Analysis',
      image: require('./assets/images/sentiment-analysis.jpg'),
      description: 'Cleaned and tokenized the Amazon Review dataset. Used Logistic Regression to predict the sentiment of reviews. \
      Achieved an accuracy of 99.7% and F-1 Score of 0.99.',
      technologies: ['Machine Learning', 'Data Cleaning', 'Sci-kit Learn', 'Pandas', 'Logistic Regression'],
      report: 'https://drive.google.com/file/d/1XhVg1uKICDI8qX42hdl600PWD7SQTphB/view?usp=sharing',
      github: 'https://github.com/Aparna-Vijayakumar/Sentiment-Analysis'
    },
    {
      projectName: 'Automatic Database Management through Machine Learning',
      image: require('./assets/images/dbms.png'),
      description: 'Automated the tuning of configuration knobs of DBMS. Used Factor Analysis and K-Means clustering \
      to retain useful metrics. Predicted latency using Gaussian Process Regression and obtained Mean \
      Absolute Percentage Error of 36.14%.',
      technologies: ['DBMS', 'Machine Learning', 'Clustering', 'Dimensionality Reduction'],
      report: 'https://drive.google.com/file/d/1_CQvGyMrrjRFVkLOCEjStyQX9IXNS81H/view?usp=sharing',
      github: 'https://github.com/Aparna-Vijayakumar/Automatic-Database-Tuning-Through-Large-scale-Machine-Learning'
    },
    {
      projectName: 'Analysis of Seq2Seq Models for Abstractive Text Summarization',
      image: require('./assets/images/summary.jpg'),
      description: 'Compared the performance of LSTM, Transformer Networks and Pointer Generator Networks for \
      Abstractive text summarization. Obtained best ROUGE score of 0.34.',
      technologies: ['Natural Language Processing', 'Deep Learning', 'PyTorch', 'HuggingFace', 'Python'],
      report: 'https://drive.google.com/file/d/1xKRarTysg_JYk7B5mmazdRAiL8huSe-4/view?usp=sharing',
      github: 'https://github.com/Aparna-Vijayakumar/Text-Summarization'
    }],
    [{
      projectName: 'Analysis of College Donations',
      image: require('./assets/images/donation.jpg'),
      description: 'Analysed the donations made by students to universities across the US. Gained insight about the distribution of \
      donations by location, college type, academic major, and donation trends over the years using data visualization in Tablaeu.',
      technologies: ['Tableau', 'Microsoft Excel', 'Data Analysis'],
      report: 'https://drive.google.com/file/d/1QZTqrDlKE9Iwn6YYzpejz4cG8chJbvap/view?usp=sharing',
      github: 'https://github.com/Aparna-Vijayakumar/College-Donations-Analysis'
    },
    {projectName: 'Hackathon Visualization Dashboard',
      image: require('./assets/images/hack.jfif'),
      description: 'An infographic dashboard representing different characteristics of the hackathon participants such \
      as their major, skills, and university. This dashboard was used by the organizing committee to decide which workshops to host so as \
      to benefit the most number of students.',
      technologies: ['Data Visualization', 'Web Dev', 'D3.js'],
      report: 'https://docs.google.com/presentation/d/1aUrqlWwyT53WEFztIe7fQPG7D2Yao1qdA5CmlNoTqGU/edit?usp=sharing',
      github: 'https://github.com/nilarami/590V-HackHer413'
    },
    {
      projectName: 'Neural Style Transfer',
      image: require('./assets/images/monalisa.jpg'),
      description: 'Used cycle-consistent Generative Adevrsarial Network and Convolutional Neural Network to transfer the unique style of Pablo Picasso onto a set of day-to-day images.',
      technologies: ['Deep Learning', 'Convolutional Neural Networks','Generative Adversarial Networks', 'TensorFLow'],
      report: 'https://drive.google.com/file/d/1XfKVQbthy29IhTMTEsHXB5Vy5IEPuiz2/view?usp=sharing',
      github: 'https://github.com/Aparna-Vijayakumar/Neural-Style-Transfer'
    },
    ],
    [{
      projectName: 'Classification of Breast Cancer using Convolutional Neural Networks',
      image: require('./assets/images/breast.jpg'),
      description: 'Compared the image classification performance of two CNN architectures Inception v3 and \
      Inception-Resnet on BreaKHis data. Best accuracy of 95.6% was obtained.',
      technologies: ['Python', 'Keras', 'Convolutional Neural Networks'],
      report: 'https://docs.google.com/presentation/d/1ySOCoE9io7Dk6cdkzraU8J-8eWnJ_5_5LDwqI6H4XCc/edit?usp=sharing',
      github: 'https://github.com/Aparna-Vijayakumar/Classification-of-Breast-Cancer'
    }]]
}

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
      image: require("./assets/images/summary.jpg"),
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
      abstract: "In the recent past, Natural language Inference (NLI) has gained significant attention, \
      particularly given its promise for downstream NLP tasks. However, its true impact is limited and \
      has not been well studied. Therefore, in this paper, we explore the utility of NLI for one \
      of the most prominent downstream tasks, viz. Question Answering (QA). We transform one of the largest \
      available MRC dataset (RACE) to an NLI form, and compare the performances \
      of a state-of-the-art model (RoBERTa) on both these forms. We propose new characterizations of questions, \
      and evaluate the performance of QA and NLI models on these categories. We highlight clear categories for which \
      the model is able to perform better when the data is presented in a coherent entailment form, \
      and a structured question-answer concatenation form, respectively.",
      footerLink: [
        { name: "Paper", url: "https://www.aclweb.org/anthology/2020.starsem-1.2.pdf" }
      ]
    },
    {
      title: "Looking Beyond Sentence-Level Natural Language Inference for Downstream Tasks",
      subtitle: "Anshuman Mishra, Dhruvesh Patel , Aparna Vijayakumar, Xiang Li, Pavan Kapanipathi, and Kartik Talamadupula",
      image: require("./assets/images/naacl.jpg"),
      abstract: "In recent years, the Natural Language Inference (NLI) task has garnered significant attention, with new datasets \
      and models achieving near human-level performance on it. However, the full promise of NLI -- particularly that it learns \
      knowledge that should be generalizable to other downstream NLP tasks -- has not been realized. In this paper, we study this \
      unfulfilled promise from the lens of two downstream tasks: question answering (QA), and text summarization. We conjecture that a \
      key difference between the NLI datasets and these downstream tasks concerns the length of the premise; and that creating new long \
      premise NLI datasets out of existing QA datasets is a promising avenue for training a truly generalizable NLI model. We validate \
      our conjecture by showing competitive results on the task of QA and obtaining the best reported results on the task of Checking \
      Factual Correctness of Summaries.",
      footerLink: [
        { name: "Paper", url: "https://arxiv.org/abs/2009.09099" }
      ]
    },
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
  number: "+1(857)800-2756",
  email_address: "avijayakumar@umass.edu"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { illustration, greeting, socialMediaLinks, projectInfo, skillsSection, techStack, educationInfo, workExperiences, bigProjects, openSource, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
