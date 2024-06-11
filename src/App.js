
import React  from "react";
import ReactDom from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./shared/Error";
import About
 from "./component/About";


const App = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(<App/>);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About></About>,
        errorElement:<Error/>
    }
]);


root.render(<RouterProvider router={appRouter}/>)
