let div = document.getElementById("header");
    div.innerHTML = "Hello JavaScript";
    div.style.color = "blue";
/**JavaScript Functions and Events
    A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
    For example, a function can be called when an event occurs, like when the user clicks a button.
 */
function meFun(){
    text = document.getElementById("demo").innerHTML;
    let newText = text.replace("hero","Hello");
    document.getElementById("demo").innerHTML =newText; //"This is a simple Hello unit.";
}
/**JavaScript Display Possibilities
JavaScript can "display" data in different ways:
    Writing into an HTML element, using innerHTML.
    Writing into the HTML output using document.write().
    Writing into an alert box, using window.alert().
    Writing into the browser console, using console.log()
 
*/
    // document.getElementById("dev").innerHTML = 5+1;
    // //Using document.write() after an HTML document is loaded, will delete all existing HTML:
    // document.write("take a bow");
    // //Using window.alert() You can use an alert box to display data:
    // window.alert("Hello JavaScript");
    // //window.print() to print the whole page
    // window.print();
    // //console.log()
    // console.log("Hello JavaScript")
    //constant Array
    const cars = ["Saad","volvo","BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
    document.getElementById("dev").innerHTML = cars;

    const Cars = {
        type:"BMW", model:"X6", color:"white"
    }
    Cars.color = "blue";
    Cars.owner = "saidmtanzania";
    document.getElementById("devis").innerHTML = Cars.owner;
    
    let text = "what a very";
    text+=" a nice day";
    document.getElementById("df").innerHTML = text;
    const person1 = {
        fullName:function(){
            return this.firstName+" "+this.lastName;
        }
    }
    const person2 ={
        firstName:"John",
        lastName: "Doe",
    }
    let x = person1.fullName.call(person2);
    document.getElementById("neZ").innerHTML = x;
    const Carz = {
        model:"x6",
        brand:"BMW",
        fuel:"Petrol",
        engine:"4000cc",
        door: 5,
        reg:function(){
        return "This car "+this.model+" with engine "+this.engine+" owner by "+this.owner;
        }
    }
    Carz.owner = "salim";
    // let q = Carz.map(Carz).join("");
    // document.getElementById("pop").innerHTML = q;
    let v = Carz.reg.call(Carz);
    document.getElementById("Vz").innerHTML = v;

    //Printing MyList in Array
    let header = ["This is My List this Year"];
    let list = ["Learning","coding","sleeping","attending event","New Technology"];
    let html = `<h2>${header}</h2><ul>`;
    for(const x of list){
        html+=`<li>${x}</li>`;
    }
    html+=`</ul>`;
    document.getElementById("newDemo").innerHTML = html;
    
