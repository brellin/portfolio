import moment from "moment";

const momentize = date => moment(date, 'x').format('LL');

const editedString = (created, edited) => `Created ${ momentize(created) }${ edited ? ` (edited ${ momentize(edited) })` : '' }`;

export {
    editedString
};
