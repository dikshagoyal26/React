import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Body from "../../components/Body";
import { RESTRAUNT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESTRAUNT_DATA),
  })
);

test("Shimmer should load on Home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
});

test("Restraunt should load on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const restaurantList = body.getByTestId("restaurant-list");
  console.log(restaurantList);
//   expect(restaurantList.children.length).toBe(10); //TODO : fix this should load restraunts
});

test("search for string(food) on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });
  const searchBtn = body.getByTestId("search-btn")
  fireEvent.click(searchBtn)
  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(1); //TODO : fix this should load restraunts
});
