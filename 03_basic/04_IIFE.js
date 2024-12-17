 //Immedieatly Invoked Function Expression(IIFE)
 (function chai(){// named iife

    console.log(`DB CONNECTED`); // DB CONNECTED
    
 })();

 ((name) => {
    console.log(`DB CONNECTED ${name}`); // DB CONNECTED Mousam
    
 })('Mousam');