import ViewImpl from './ViewImpl.js';

const imgs = [ { src: 'js.png', title: 'JavaScript' }, { src: 'python.png', title: 'Python' }, { src: 'php.png', title: 'PHP' }, { src: 'mysql.png', title: 'SQL' }, { src: 'sass.svg', title: 'SASS' }, { src: 'react.png', title: 'React' }, { src: 'redux.png', title: 'Redux' }, { src: 'node.png', title: 'Node.js' }, { src: 'mongo.png', title: 'MongoDB' }, { src: 'graphql.png', title: 'GraphQL' } ];

const imgStr = imgObj => `<img src="../../assets/images/${ imgObj.src }" title="${ imgObj.title }" />`;

export default class extends ViewImpl {
    constructor() {
        super();
        setTimeout(_ => document.querySelector('.intro').classList.remove('not-loaded'), 100);
    }

    getHtml() {
        return `
        <div class="homepage">
            <div class="intro${ this.loaded ? "" : " not-loaded" }">
                <h3>Hi, my name is</h3>
                <h1>William Charles Umstead Junior</h1>
                <h4>Full Stack Web Developer</h4>
            </div>
        
            <div class="specs">
                <h2>Specializing in:</h2>
                ${ imgs.map(img => imgStr(img)).join(',').replaceAll(',', '\n') }
            </div>
        </div>
        `;
    }

}
