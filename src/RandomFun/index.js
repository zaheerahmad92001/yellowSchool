export function ValidateEmail (email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function convertDateToString(date) {
    date = date.getFullYear() + '-' + (("0" + (date.getMonth() + 1)).slice(-2)) + '-' + ("0"+date.getDate()).slice(-2)
    return date;
}
export function getTime(date) {
    const d = new Date(date);
    return ("0"+d.getHours()).slice(-2) +':'+  ("0"+d.getMinutes()).slice(-2)
}