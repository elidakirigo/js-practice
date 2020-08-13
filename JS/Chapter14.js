/**
 * ---------------------------------------
 * UNDERSTANDING THE DOCUMENT OBJECT MODEL
 * ---------------------------------------
 */

/**
 * accessing the root in html file - document.documentElement
 * CHILDNODE- acts like an array, has length properties but does not have methods like slice and map
 * 
 * every node has PARENTNODE , there are FIRSTCHILD and LASTCHILD, PREVIOUSSIBLING, NEXTSIBLING
 * 
 * CHILDREN, nodevalue
 * 
 * using INSERT BEFORE FUNCTION
 */

//  let paragraph = document.body.getElementsByTagName('p')
//  document.body.insertBefore(paragraph[2],paragraph[0])

/**
 * ----------------------------
 * using REPLACECHILD , CREATETEXTNODE
 * ----------------------------
 */

// HTML ON THE INDEX.HTML PAGE
/**
 * -------------------------------------
 * creating a replace function
 * -------------------------------------
 */
// function replaceImages(){
// let images = document.body.getElementsByTagName('p')
// for (let i= images.length - 1; ) {
//     Array.from
// }
// }
/**
 * ------------------------------
 * USING ARRAY.FROM , appendChild
 * ------------------------------
 */

/**
 * -----------------------------------
 * using ATRIBUTES 
 * -----------------------------------
 */
let paras = document.body.getElementsByTagName('p')
for (const para of Array.from(paras)) {
    if (para.getAttribute('data-heading' == 'my-data')) {
        para.remove()
    }
    if (para.setAttribute('data-title' == 'public')) {
        para.outerHTML = 'out';
    }
}

/**
 * ---------------------------------------
 * block elements[take up the whole browser width] : p,h1,div
 * inline elements[take up some browser width] : a,strong
 * ---------------------------------------
 */

/**
 * -------------------------------------------
 * accessing the size and position in JS, 
 * 
 * using offsetWidth $ offsetHeight
 * 
 * clientWidth and clientHeight give the size inside ignoring border width.
 * -------------------------------------------
 */

let para = document.body.getElementsByTagName('p')[0]
console.log('clientHeight : ', para.clientHeight);
console.log('clientWidth : ', para.clientWidth);

/**
 * ------------------------------------------------
 * most precise way of getting the position of an element on the screen
 * -getBoundingClientRect
 * 
 * GETTING PAGE SCROLL POSITIONS
 * -pageXOffset , pageYOffset
 * ------------------------------------------------
 */

/**
 * -------------------------------------------------
 * protraying styles containing hyphens in JS
 * -------------------------------------------------
 */

document.getElementById('someID').style['font-family'];

/**
 * -------------------------------------------------
 * QUERYSELECTORALL method returns all nodelist,
 * NOTE : the method is not live, if you change the document, it wont change
 * -------------------------------------------------
 */

/**
 * -------------------------------------------------
 * static - means you cant move the object unless the position is set.
 * -------------------------------------------------
 */
