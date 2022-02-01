let div = document.getElementById("header");
    div.innerHTML = "Hello JavaScript";
    div.style.color = "blue";
/**JavaScript Functions and Events
    A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
    For example, a function can be called when an event occurs, like when the user clicks a button.
 */
function meFun(){
    document.getElementById("demo").innerHTML = "This is a simple Hello unit.";
}
/**JavaScript Display Possibilities
JavaScript can "display" data in different ways:
    Writing into an HTML element, using innerHTML.
    Writing into the HTML output using document.write().
    Writing into an alert box, using window.alert().
    Writing into the browser console, using console.log()
 */

    document.getElementById("dev").innerHTML = 5+1;
    //Using document.write() after an HTML document is loaded, will delete all existing HTML:
    document.write("take a bow");
    //Using window.alert() You can use an alert box to display data:
    window.alert("Hello JavaScript");
    //window.print() to print the whole page
    window.print();