import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Frontpage from "./components/Frontpage";     

const App = () => {
  return ( <div>
    
      <Header />
    
        <Outlet /> 
    
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
