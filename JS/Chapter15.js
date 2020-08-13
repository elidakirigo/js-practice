/**
 * --------------------------------------------
 * HANDLING EVENTS IN THE DOM with JS,
 *event handlers can be called on the window, or locally using document function
 * --------------------------------------------
 */

/**
 * --------------------------------------------
 * check on polling
 * --------------------------------------------
 */

/**
 * --------------------------------------------
 * event handlers --
 * addEventListener, removeEvenListener
 */
let button = document.querySelector('button')

function once() {
    console.log('done');
    button.removeEventListener('click', once)
}
button.addEventListener('click', once)

/**
 * ------------------------------------
 * mouse buttons
 * left buttons - 0
 * middle buttons - 1
 * right buttons - 2
 * ------------------------------------
 */

/**
 * -------------------------------------
 * using the stop propagation method
 * event.stopPropagation()
 * 
 * event.target.nodeName
 * event.target.textContext
 * 
 * DEFAULT ACTIONS
 * event.preventDefauult()
 * -------------------------------------
 */