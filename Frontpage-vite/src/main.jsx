import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import Footer from "./components/Footer"; 
import About from "./components/About";     

const App = () => {
  return ( <div>
    
      <Header />
    
        <Outlet /> 
      
      <Footer /> 
    
    </div>);
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      {
        index: true,    
        element: <Frontpage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
