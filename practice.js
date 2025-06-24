//Using Js

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello from JS";
// const root = document.getElementById("root");
// root.appendChild(heading)

//Using React

const heading = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "Hello from React tag h1 "),
        React.createElement("h2", {}, "Hello from React tag h2")
    ]),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "Hello from React tag h1 "),
        React.createElement("h2", {}, "Hello from React tag h2")
    ])] )

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)