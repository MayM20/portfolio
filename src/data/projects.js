import screenshot_qube from "../images/screenshot_qube.png";
import screenshot_qube2 from "../images/screenshot_qube2.png";
import screenshot_qube3 from "../images/screenshot_qube3.png";
import screenshot_qube4 from "../images/screenshot_qube4.png";
import living_through from "../images/logo_adv-studio.png";
import screenshot_chat from "../images/screenshot_chat.png";
import screenshot_chat2 from "../images/screenshot_chat2.png";
import screenshot_todo4 from "../images/screenshot_todolist4.png";

const ProjectsList = [
  {
    projectName: "Qube Kaffeine & Kitchen",
    typeOfProject: "Web Design & Development",
    projectUrl: "https://maym20.github.io/qube-v2/",
    url: "Qube-Kaffeine",
    shortProjectDescription:
      "A brochure website to help promote the business and services of the coffee shop by offering an overview of the best prepared coffee in the area, complemented with mediterranean fusion cuisine.",
    longProjectDescription: {
      projectBrief:
        "Having a website for it will serve to help brand and market the company by offering an overview of the best prepared coffee in the area, complemented with mediterranean fusion cuisine. <br />  <br /> The brief was to create an online presence and work as a marketing tool to attract potential customers. Therefore, increasing sales.",
      projectResult:
        "Pulling inspiration from the coffee shop style, alongside enticing visuals, a website is constructed, which improved the user experience increasing the retention rate and general enquiries across the board. <br /> <br /> Using CSS Media Queries, the website structure is fully responsive, compatible on a large variety of platforms and increasing the customer reach.",
      projectTechs: ["HTML", " CSS", " JavaScript"]
    },
    projectDisplay: {
      url: screenshot_qube,
      type: "image"
    },
    projectImages: [
      require("../images/screenshot_qube.png"),
      screenshot_qube2,
      screenshot_qube3,
      screenshot_qube4
    ]
  },
  {
    projectName: "Meet ~ Talk: Chat App",
    typeOfProject: "App Design & Development",
    projectUrl: "https://github.com/MayM20/IonicProject",
    url: "Meet-Talk",
    shortProjectDescription:
      "A one-on-one chat application for people all around the world. Helping to meet new people and make new friends.",
    longProjectDescription: {
      projectBrief:
        "The app would need to solve a problem based on analysis. In this case, misscomunication. A simple, compelling and functional cross platforms application that can be built once and run anywhere, providing the same functionality as the website currently did but in a more mobile friendly fashion. As it was a cross platforms app it would also open on Android and iOS devices. ",
      projectResult:
        "Using provided designs, an app was built using hybrid technologies. Meaning that can be built once and run anywhere. An integration with one of the BaaS providers to provide a backend service, in this case Firebase. <br /> Users can register, login, search for friends based on their email address, send request, receive and delete them as well as switching between the most common visited areas: chats and user profile",
      projectTechs: ["Ionic", " Typescript", " Firebase", " SASS"]
    },
    projectDisplay: {
      url:
        "https://camo.githubusercontent.com/ab8fd0b4a5966158ba22648de8ab605085821c32/687474703a2f2f672e7265636f726469742e636f2f437034487061497a4e542e676966",
      type: "gif"
    },
    projectImages: [screenshot_chat, screenshot_chat2]
  },
  {
    projectName: "Maylen 2-DO List",
    typeOfProject: "App Design & Development",
    projectUrl: "",
    url: "Maylen-2-DO-List",
    shortProjectDescription:
      "A simple To Do application that helps people feel more in control of their lives, get organised, achieve goals and never forget a thing. Making it easier to monitor your to-dos.",
    longProjectDescription: {
      projectBrief:
        "No matter how you decide to organize your life, whether you are at school, work, family, meetings, assignments, Productivity Apps, specially To Do List apps, help you organize your life by keeping track and monitoring. <br /> <br />Finding an easy one that does not ask you for too much information is a bit complicated. Maylen 2-DO List helps you to see your activities right away.",
      projectResult:
        "No more wasting time on making the list itself, with very simple input to add a new task, establish the status whether or not the activity is completed, the app gives you the opportunity to add a note inside your task. Making it easier to personalise it with extra details. You are able to see it on your phone and also your mobile devices.",
      projectTechs: ["Gulp", "Typescript", "Pug", "SASS"]
    },
    projectDisplay: {
      url: require("../images/todo_gif.gif"),
      type: "image"
    },
    projectImages: [screenshot_todo4]
  },
  {
    projectName: "Living Through",
    typeOfProject: "Wep/App Design & Development",
    projectUrl: "https://livingthrough.info/",
    url: "Living-Through",
    shortProjectDescription:
      " The project is developed for people to have a basic understanding about suicide, identify the warning signs and how to start a conversation if worried about someone, in order to prevent it or even help themselves.",
    longProjectDescription: {
      projectBrief:
        "The idea of the platform was initially implemented by the fact of suicide being an undoubted reality, currently present in the Australian community. <br /> <br />A group of students who were coursing a Bachelor of IT decided to propose a software that can make a difference in people’s lives, especially in young people since there was no such program that involves training for students. <br /> <br /> The proposed platform intends to solve: misconception about suicide, lack of awareness in suicide prevention to help others.",
      projectResult:
        "In order to make it more convenient and accessible for users, the app was created using the Hybrid approach. Meaning that by building a single product, the platform can work on many operating systems like iOS, Android and Windows, providing live chat, safety plans and helpful resources to make sure that the users are staying healthy and helping others.",
      projectTechs: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Typescript",
        "Ionic",
        "Firebase"
      ]
    },
    projectDisplay: {
      url: living_through,
      type: "image"
    },
    projectImages: [
      require("../images/living_1.png"),
      require("../images/living_2.png"),
      require("../images/living_4.png"),
      require("../images/living_3.png")
    ]
  }
];

export default ProjectsList;
