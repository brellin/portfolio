import axios from 'axios';
import moment from 'moment';

axios.defaults.baseURL = process.env.REACT_APP_ENV === 'DEVELOPMENT' ? 'http://localhost:5000' : 'https://pfl-be.herokuapp.com';

const readFile = (event, cb) => {
    const file = event.target.files[ 0 ];
    const fr = new FileReader();
    fr.onload = _ => { cb(JSON.parse(fr.result)); };
    fr.readAsText(file);
};

const openFileDialog = callback => {
    let inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = '*';
    inputElement.addEventListener("change", e => readFile(e, callback));
    inputElement.dispatchEvent(new MouseEvent("click"));
};

const momentize = date => moment(date, 'x').format('LL');

export {
    axios,
    openFileDialog,
    readFile,
    momentize
};
