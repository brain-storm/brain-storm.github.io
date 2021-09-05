import theClan from "../assets/projects/the-clan.png";
import rapidUI from "../assets/projects/rapid-ui.png";
import digihouse from "../assets/projects/digihouse.png";
import rapify from "../assets/projects/rapify.png";
import shopCircuit from "../assets/projects/shop-circuit.png";
import geeksTrivia from "../assets/projects/geeks-trivia.png";
import languages from './languages';
import tech from './tech';

export const projects = [
    {
        name: 'Rapid UI',
        thumbnail: rapidUI,
        description: 'Rapid UI is a CSS Component library developed during the course of neoG camp. With Rapid UI you can develop responsive and polished web apps on the go.',
        techUsed: ['HTML5', 'CSS', 'JavaScript', 'React'],
        liveUrl: 'https://rapid-ui.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/rapid-ui'
    },
    {
        name: 'The Clan',
        thumbnail: theClan,
        description: 'This is a social media app which has features like dark mode, auth persistence, notifications, paginated feed and a lot more.',
        techUsed: ['Node', 'MongoDB', 'Express', 'React', 'Redux-Toolkit'],
        liveUrl: 'https://the-clan.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/the-clan'
    },
    {
        name: 'Digihouse',
        thumbnail: digihouse,
        description: 'A Clubhouse appllication with text as medium of exchange. Anybody can create room here on any topic and discuss with people around the world. See demo here - https://www.youtube.com/watch?v=PmIFEFUIYBA',
        techUsed: ['Firebase', 'React', 'Material UI'],
        liveUrl: 'https://digi-house.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/digi-house'
    },
    {
        name: 'Rapify',
        thumbnail: rapify,
        description: 'This is a video library which contains curated collection of hip-hop music. It has features like watch later, add to playlist, sign-in with google, email and a lot more.',
        techUsed: ['Node', 'MongoDB', 'Express', 'React'],
        liveUrl: 'http://rapify.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/rapify/tree/new-development'
    },
    {
        name: 'Shop Circuit',
        thumbnail: shopCircuit,
        description: 'This is an ecommerce app which contains music related equipments. It is available is 3 languages - English, Hindi, Spanish.',
        techUsed: ['Node', 'MongoDB', 'Express', 'React'],
        liveUrl: 'https://shop-circuit.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/shopcircuit/tree/new-development'
    },
    {
        name: 'Geeks Trivia',
        thumbnail: geeksTrivia,
        description: 'This is a quiz app which contains set of quizes based on hip-hop',
        techUsed: ['Node', 'MongoDB', 'Express', 'React', 'Material UI'],
        liveUrl: 'https://geekstrivia.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/geekstrivia'
    },
    // {
    //     name: 'News AI',
    //     thumbnail: theClan,
    //     description: 'This is a dummy description This is a dummy description This is a dummy description This is a dummy description This is a dummy description This is a dummy description This is a dummy description',
    //     techUsed: ['Android', 'Reinforcement Learning', 'SQLite DB'],
    //     languages: [languages.java],
    //     liveUrl: 'https://the-clan.netlify.app/',
    //     repoUrl: 'https://github.com/grvsharma1810/the-clan'
    // },
    // {
    //     name: 'The College Post',
    //     thumbnail: theClan,
    //     description: 'This is a dummy description This is a dummy description This is a dummy description This is a dummy description This is a dummy description This is a dummy description This is a dummy description',
    //     techUsed: [tech.nodejs, tech.mongodb, tech.flutter, tech.express],
    //     languages: [languages.javaScript, languages.dart],
    //     liveUrl: 'https://the-clan.netlify.app/',
    //     repoUrl: 'https://github.com/grvsharma1810/the-clan'
    // },
]