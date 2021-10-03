import ViewImpl from "./ViewImpl.js";

export default class extends ViewImpl {
    constructor() {
        super();
        this.setTitle('About');
    }

    getHtml = _ => `
        <h1>About</h1>
        <div title="Will Umstead" class="me"></div>
        <p>Hi! My name is Will.I started working with HTML, CSS, and PHP in 2008 during the summer of my sophomore year when I was in high school.

        I taught my webmastering class the following two years, made a website, and never did anything with it. Shortly after, I joined the army, went to South Korea, and realized that computer languages aren't the only type that I'm good at learning.

        내가 한국말 좋금 알아요. (Korean)

        私は日本語を話します。(Japanese)

        Ich spreche ein Wenig Deutsch. (German)

        J'apprends le françias maintenant. (French)

        I decided to go to college to pursue this new world of interests, just to find that the school that I was accepted to made the executive decision to drop all of the non - basic language classes that I was wishing to pursue.

        After all of that, I re - discovered my passion for coding and decided to pursue that skill at a school known as <a target='_blank' href="https://lambdaschool.com">Lambda</a>!
        During my time at Lambda, I was able to research, learn, and develop my coding skills.
        
        Along the journey of finding income within the realm of programming, I am working a local job to sustain myself.
        
        Thank you for taking the time to read this. Have a good one!</p>`;

}
