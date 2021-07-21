function economiaApi() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
    .then(result => result.ok 
    ? result.json()
    : Promise.reject(new Error('API Error!')));    
}

export default economiaApi;