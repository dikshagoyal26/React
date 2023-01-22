export const filterData = (searchText, restaurants) =>
restaurants.filter((restaurant) =>
  restaurant?.data?.name
    ?.toLowerCase()
    ?.includes(searchText?.trim().toLowerCase())
);