import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Offers from "./components/Offers";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import RestrauntMenu from "./components/RestrauntMenu";

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Body /> },
      {
        path: "about",
        element: <About />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "offers", element: <Offers /> },
        ],
      },
      { path: "offers", element: <Offers /> },
      { path: "restraunt/:resId", element: <RestrauntMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
