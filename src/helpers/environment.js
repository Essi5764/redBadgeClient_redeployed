let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1' :
    
        APIURL = 'http://localhost:4000';
        break;

    case 'enam-learningapp.herokuapp.com':

        APIURL='https://enam-learningapp.herokuapp.com'

}

export default APIURL;