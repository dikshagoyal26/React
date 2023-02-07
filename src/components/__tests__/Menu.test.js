import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import RestrauntMenu from "../../components/RestrauntMenu";
import Header from "../../components/Header";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  })
);

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestrauntMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));
  const menu = body.getByTestId("menu");
  const addBtn = body.getAllByTestId("add-btn");
  fireEvent.click(addBtn[0]);
  const cart = body.getByTestId("cart-items");
  expect(cart.innerHTML).toBe("1"); 
});

//can also load cart component over here & check how many cards have been loaded into the cart