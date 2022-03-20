import moment from "moment";
import axios from '../plugins/axios';
import store from '../plugins/vuex';

/**
 * Reads the contents of a file after loading
 * @param {object} event Event object
 * @param {function} cb function to update state of component
 */
const readFile = (event, cb) => {
    const file = event.target.files[ 0 ];
    const fr = new FileReader();
    fr.onload = () => { cb(JSON.parse(fr.result)); };
    fr.readAsText(file);
};

/**
 * Opens a file selection dialog
 * @param {function} callback Function to update state of component
 */
function getProof() {
    let inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = '*';
    inputElement.addEventListener("change", e => readFile(e, login));
    inputElement.dispatchEvent(new MouseEvent("click"));
}

const login = proof => {
    axios.defaults.headers = proof;
    axios.post('/auth')
        .then(res => res.status === (200 || 204) && store.commit('login', proof))
        .catch(err => {
            console.error(err);
            alert('Nice try, but you are not me.');
        });
};

/**
 * Converts single datestring to correct format
 * @param {string} date Millisecond date string
 * @returns {string} Date formatted "Month DD, YYYY"
 */
const momentize = date => moment(date, 'x').format('LL');

/**
 * Creates a uniform string for all datestrings in the blog
 * @param {string} created Millisecond date string denoting when the post was created
 * @param {string} edited Millisecond date string denoting the last time the post was edited
 * @returns {string} Formatted date string representing date created and if edited, edited
 */
const editedString = (created, edited) => `Created ${ momentize(created) }${ edited ? ` (edited ${ momentize(edited) })` : '' }`;

export {
    getProof,
    readFile,
    login,
    momentize,
    editedString
};
