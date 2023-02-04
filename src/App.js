import React, { lazy, Suspense, useState } from "react";
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
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Diksha Goyal",
    email: "dikshagoyal2612@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
