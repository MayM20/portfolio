import screenshot_qube from '../images/screenshot_qube.png';
import living_through from '../images/logo_adv-studio.png';
// import screenshot_todo from '../images/screenshot_todolist1.png';
import screenshot_todo2 from '../images/screenshot_todolist3.png';
const ProjectsList = [
    {
        projectName: 'Qube Kaffeine & Kitchen',
        typeOfProject: 'Web Design & Development',
        projectUrl: 'https://maym20.github.io/qube-v2/', 
        url: "Qube-Kaffeine",
        shortProjectDescription: 'Brochure website to help brand and market the coffee shop by offering an overview of the best prepared coffee in the area, complemented with mediterranean fusion cuisine. As well as portraying an image of the business, giving visitors an idea of the atmosphere before even stepping a foot inside.',
        longProjectDescription: {
            projectBrief: 'Having a website for it will serve to help brand and market the company by offering an overview of the best prepared coffee in the area, complemented with mediterranean fusion cuisine. <br />  <br /> The brief was to create an online presence and work as a marketing tool to attract potential customers. Therefore, increasing sales.',
            projectResult: 'Pulling inspiration from the coffee shop colours, alongside enticing visuals, a website is constructed, which improved the user experience increasing the retention rate and general enquiries across the board. <br /> <br /> Using CSS Media Queries, the website structure is fully responsive, compatible on a large variety of platforms and increasing the customer reach.',
            projectTechs: ['HTML', ' CSS', ' JavaScript']
        },
        projectDisplay:{
            url: screenshot_qube,
            type: "image",
        },
        projectImages: screenshot_qube
    },
    {
        projectName: 'Meet ~ Talk: Chat App',
        typeOfProject: 'App Design & Development',
        projectUrl: 'https://github.com/MayM20/IonicProject',
        url: "Meet-Talk",
        shortProjectDescription: 'One-on-one chat application where travelers, international students and people who just recently met, connect to talk with each other by creating an account and adding their email address.',
        longProjectDescription: {
            projectBrief: '',
            projectResult: '',
            projectTechs: ['', '', '']
        },
        projectDisplay:{
            url: "https://camo.githubusercontent.com/ab8fd0b4a5966158ba22648de8ab605085821c32/687474703a2f2f672e7265636f726469742e636f2f437034487061497a4e542e676966",
            type: "gif",
        },
        projectImages: ['', '', '']
    },
    {
        projectName: 'Maylen 2-DO List',
        typeOfProject: 'App Design & Development',
        projectUrl: '',
        url: "Maylen-2-DO-List", 
        shortProjectDescription: 'Is a simple to-do cross platforms application that helps you to get stuff done. Making it easier to monitor your to-dos.',
        longProjectDescription: {
            projectBrief: '',
            projectResult: '',
            projectTechs: ['', '', '']
        },
        projectDisplay:{
            url: screenshot_todo2,
            type: "image",
        },
        projectImages: ['', '', '']
    },
    {
        projectName: 'Living Through',
        typeOfProject: 'Web Design & Development',
        projectUrl: 'https://livingthrough.info/',
        url: "Living-Through", 
        shortProjectDescription: ' The project is developed in the hope of bringing more meanings to life by helping young people having a basic understanding about suicide,  identify the warning signs and how to start a conversation in order to prevent it or even help themselves.',
        longProjectDescription: {
            projectBrief: '',
            projectResult: '',
            projectTechs: ['', '', '']
        },
        projectDisplay:{
            url: living_through,
            type: "image",
        },
        projectImages: ['', '', '']
    }
];

export default ProjectsList;
    