import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
import store from "../../utils/store";

test("Logo should load on rendering Header", () => {
  // load header
  // check if loader is headed
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.png")
});

test("if user is online", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("Online")
});

test("cart should have 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartItems = header.getByTestId("cart-items");
  expect(cartItems.innerHTML).toBe("0")
});