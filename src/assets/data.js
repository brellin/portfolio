
import {
    hooks,
    redux,
    node,
    python,
    js,
    mdb,
    gql,
    php,
    sass,
    sql,
    gg,
    bh,
    cf
} from "./images";

const homeImgs = [
    {
        img: js,
        title: "JavaScript",
    },
    {
        img: python,
        title: "Python",
    },
    {
        img: php,
        title: "PHP",
    },
    {
        img: sql,
        title: "SQL",
    },
    {
        img: sass,
        title: "SASS",
    },
    {
        img: hooks,
        title: "React",
    },
    {
        img: redux,
        title: "Redux",
    },
    {
        img: node,
        title: "Node",
    },
    {
        img: mdb,
        title: "MongoDB",
    },
    {
        img: gql,
        title: "GraphQL",
    },
];

const projects = [
    {
        title: "Chao Fever",
        description: 'My first maserpiece, made at 15 years of age - 2008. Originally composed using HTML, CSS, and PHP. This iteration was refactored to use HTML and LESS.\n\nThe website is focused on a side-story of the Sonic Adventure series...Chao!',
        github: 'https://github.com/brellin/chaofever',
        img: cf,
        url: 'https://chaofever.willumstead.com'
    },
    {
        title: 'Golden Glories',
        description: 'A website made for the purpose of extending the knowledge of English Cream Golden Retrievers, while advertising the puppies for my mother to sell!\n\nI\'m happy to have the ability to help my family with their business ideas and plans.',
        github: 'https://github.com/brellin/goldenglories',
        img: gg,
        url: 'https://goldenglories.com'
    },
    {
        title: "Black Hole",
        description: 'A web app using React for the front-end and Node for the back-end. This project allows the user to vent into a “black hole” - without the worry of anybody hearing what was said.\n\nI was responsible for the front end of this project.',
        github: 'https://github.com/black-hole-lambda-build-week/front-end',
        img: bh,
        url: 'https://blackhole.willumstead.com'
    },
];

export {
    homeImgs,
    projects
};
