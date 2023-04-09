const heading = React.createElement(
    "h1",
    // {
    //   id: "title",
    // },
    null,
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h2",
    // {
    //   id: "title",
    // },
    null,
    "Heading2"
  );

  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    // If we have to pass Multiple Childrens then we have to pass them as an array
    [heading, heading2]
  );
  console.log(heading);
  // heading.innerHTML = "Vaibhav Saxena here";
  const root = ReactDOM.createRoot(document.getElementById("root"));

  //Passing a react Element inside a root
  root.render(container);