import theClan from "../assets/projects/the-clan.png";
import rapidUI from "../assets/projects/rapid-ui.png";
import digihouse from "../assets/projects/digihouse.png";
import rapify from "../assets/projects/rapify.png";
import shopCircuit from "../assets/projects/shop-circuit.png";
import geeksTrivia from "../assets/projects/geeks-trivia.png";
import newsHome from "../assets/projects/news/home.png";
import newsDetailed from "../assets/projects/news/detailed.png";
import newsDrawer from "../assets/projects/news/drawer.png";
import newsNotes from "../assets/projects/news/notes.png";
import newsShare from "../assets/projects/news/share.png";
import newsWeather from "../assets/projects/news/weather.png";
import collegePostHome from "../assets/projects/college-post/home.png";
import collegePostCategory from "../assets/projects/college-post/category.png";
import collegePostEditor from "../assets/projects/college-post/editor.png";
import collegePostPost from "../assets/projects/college-post/post.png";
import collegePostProfile from "../assets/projects/college-post/profile.png";
import collegePostSearch from "../assets/projects/college-post/search.png";
import collegePostSettingsDark from "../assets/projects/college-post/settings-dark.png";
import collegePostSettingsLight from "../assets/projects/college-post/settings-light.png";
import collegePostSignIn from "../assets/projects/college-post/sign-in.png";
import collegePostSplash from "../assets/projects/college-post/splash.png";
import collegePostStat from "../assets/projects/college-post/stat.png";
import languages from './languages';
import tech from './tech';

export const projects = [
    {
        name: 'Rapid UI',
        thumbnail: rapidUI,
        images: [rapidUI],
        description: 'Rapid UI is a CSS Component library developed during the course of neoG camp. With Rapid UI you can develop responsive and polished web apps on the go.',
        techUsed: ['HTML5', 'CSS', 'JavaScript', 'React'],
        liveUrl: 'https://rapid-ui.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/rapid-ui'
    },
    {
        name: 'The Clan',
        thumbnail: theClan,
        images: [theClan],
        description: 'This is a social media app which has features like dark mode, auth persistence, notifications, paginated feed and a lot more.',
        techUsed: ['Node', 'MongoDB', 'Express', 'React', 'Redux-Toolkit'],
        liveUrl: 'https://the-clan.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/the-clan'
    },
    {
        name: 'Digihouse',
        thumbnail: digihouse,
        images: [digihouse],
        description: 'A Clubhouse appllication with text as medium of exchange. Anybody can create room here on any topic and discuss with people around the world. See demo here - https://www.youtube.com/watch?v=PmIFEFUIYBA',
        techUsed: ['Firebase', 'React', 'Material UI'],
        liveUrl: 'https://digi-house.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/digi-house'
    },
    {
        name: 'Rapify',
        thumbnail: rapify,
        images: [rapify],
        description: 'This is a video library which contains curated collection of hip-hop music. It has features like watch later, add to playlist, sign-in with google, email and a lot more.',
        techUsed: ['Node', 'MongoDB', 'Express', 'React'],
        liveUrl: 'http://rapify.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/rapify/tree/new-development'
    },
    {
        name: 'Shop Circuit',
        thumbnail: shopCircuit,
        images: [shopCircuit],
        description: 'This is an ecommerce app which contains music related equipments. It is available is 3 languages - English, Hindi, Spanish.',
        techUsed: ['Node', 'MongoDB', 'Express', 'React'],
        liveUrl: 'https://shop-circuit.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/shopcircuit/tree/new-development'
    },
    {
        name: 'Geeks Trivia',
        thumbnail: geeksTrivia,
        images: [geeksTrivia],
        description: 'This is a quiz app which contains set of quizes based on hip-hop',
        techUsed: ['Node', 'MongoDB', 'Express', 'React', 'Material UI'],
        liveUrl: 'https://geekstrivia.netlify.app/',
        repoUrl: 'https://github.com/grvsharma1810/geekstrivia'
    },
    {
        name: 'News AI',
        thumbnail: newsHome,
        images: [newsHome, newsDetailed, newsDrawer, newsNotes, newsShare, newsWeather],
        description: "An Android app that brigs news articles personalized for each user without sending any user data to server using Machine Learning algo",
        features: [
            'Feed: Get user personalised news articles',
            'Privacy: No data sent to server, no user data stored',
            'Weather: Get weather reports of any city',
            'Notes: Make notes related to articles or anything of your choice',
            'Read Later: Save articles for future readings',
            'Share: Share news articles with others',
            'Category-wise: Get category-wise news articles',
            'Country-wise: Get news articles of specific countries'
        ],
        techUsed: [tech.android, tech.reinforcement, tech.sqlite],
        languages: [languages.java],
        liveUrl: '',
        apk: '',
        repoUrl: 'https://github.com/AVNV2201/News-Feed-App-Using-In-app-ML-',
    },
    {
        name: 'The College Post',
        thumbnail: collegePostHome,
        images: [collegePostHome, collegePostCategory, collegePostEditor, collegePostPost, collegePostProfile, collegePostSearch, collegePostSettingsDark, collegePostSettingsLight, collegePostSignIn, collegePostSplash, collegePostStat],
        description: 'A Flutter app with Node.js backend and MongoDB, developed for college students to share posts, ask problems and answer others problems with the privacy of college only. No hesitation, supportive community',
        features: [
            'Post articles, Ask a Problem, Answer a problem',
            'JWT authentication: Sign in / sign up using your college credentials with independent authentication of our own server',
            'Feed: Get trending posts, latest posts and unanswered problems',
            'Branchwise Feed: Get feed of a particular branch/stream',
            'Theme: Dark mode or Light Mode, its your choice',
            'Actions: Like a post , see its views, see likers and viewwes',
            'Search: Search for a particular topic easily',
            'Profile: See your profile and related data',
            'Stats: See your statistics of likes and views',
            'Search User: Search for a particular user and see their profile details',
            'Cheatsheet: Get a Markdown cheatsheet for effective writing',
            'Settings: Get several settings features including fontsize, clear search history,etc.'
        ],
        techUsed: [tech.nodejs, tech.mongodb, tech.flutter, tech.express],
        languages: [languages.javaScript, languages.dart],
        liveUrl: '',
        apk: '',
        repoUrl: 'https://github.com/the-brain-storm/mnnit-forum-flutter-app'
    },
]