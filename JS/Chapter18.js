/**
 * --------------------------------------------
 * HTTP
 * ---------------------------------------------
 */

encodeURIComponent('yes?')
decodeURIComponent('yes%3F')
/**
 * ----------------------------------------------
 * using FETCH with PROMISES
 * ----------------------------------------------
 */

fetch('example/data.txt')
    .then(res => {

        console.log(res.status);
        console.log(res.headers.get('Content-Type'));
        return res.text()
    }).then(text => console.log(text))

/**
 * ----------------------------------------------
 * access-control-allow-origin allows the browser to accept requests from onother domain
 * ----------------------------------------------
 */

 