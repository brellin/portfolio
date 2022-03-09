import ViewImpl from "./ViewImpl.js";

export default class extends ViewImpl {
    constructor() {
        super('Wow');
        this.setTitle('Work');
    }

    getHtml = _ => {
        return `
        <div class="buttons">
            <button>Projects</button>
            <button>Activity</button>
        </div>
        `;
    };

}
