let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1' :
    
        APIURL = 'http://localhost:4000';
        break;

    case 'kplanuapp.herokuapp.com':

        APIURL='https://kplanuapp.herokuapp.com'

}

export default APIURL;