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
import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./components/Login";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Diksha Goyal",
    email: "dikshagoyal2612@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Body /> },
      ,
      {
        path: "login",
        element: <Login />
      },
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
      {
        path: "cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
