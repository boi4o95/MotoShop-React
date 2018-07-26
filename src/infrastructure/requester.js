import $ from 'jquery'
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_SJq8gX2MQ";
const kinveyAppSecret = "a3ac3861663f4e0fa67d1fb95efea929";

// Creates the authentication header
function makeAuth(type) {
    return type === 'basic'
        ? 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        : 'Kinvey ' + sessionStorage.getItem('authtoken');
}

// Creates request object to kinvey
function makeRequest(method, module, endpoint, auth, query) {
    let url = kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint;
    if (query) {
        url += '?query=' + JSON.stringify(query);
    }

    return {
        method,
        url: url,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };
}

// Function to return GET promise
function get(module, endpoint, auth, query) {
    return $.ajax(makeRequest('GET', module, endpoint, auth, query));
}

// Function to return POST promise
function post(module, endpoint, auth, data) {
    let req = makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

// Function to return PUT promise
function update(module, endpoint, auth, query,  data) {
    let req = makeRequest('PUT', module, endpoint, auth, query);
    req.data = data;
    return $.ajax(req);
}

// Function to return DELETE promise
function remove(module, endpoint, auth, query) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth, query));
}

export default {
    get,
    post,
    update,
    remove
}