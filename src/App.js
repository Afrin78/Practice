import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About"
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

/* { Using Js

const heading = document.createElement("h1");
heading.innerHTML = "Hello from JS";
const root = document.getElementById("root");
root.appendChild(heading)

Using React

const  heading = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "Hello from React tag h1 "),
        React.createElement("h2", {}, "Hello from React tag h2")
    ]),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "Hello from React tag h1 "),
        React.createElement("h2", {}, "Hello from React tag h2")
    ])] )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)

const Title = () => (
    <h1>Hello world from react</h1>
)

const footer = "jsx is amazing"

const Heading = () => (
    <>
        <Title />
        <h1>Namaste React😊</h1>
        {footer}
    </>
}*/


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Body /> 
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

                                                                                                 