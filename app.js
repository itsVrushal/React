


const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div", 
        {id:"child"}, 
        [React.createElement("h1",{}, "i am an H1 tag"),
            React.createElement("h2",{}, "i am an H2 tag")] 
        ),React.createElement(
            "div", 
            {id:"child2"}, 
            [React.createElement("h1",{}, "i am an H1 tag"),
                React.createElement("h2",{}, "i am an H2 tag")] 
            )]
    );


const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)