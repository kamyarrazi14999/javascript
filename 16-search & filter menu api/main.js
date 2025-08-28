let menuItems = null;

// Load menu items from API
const fetchMenuItems = async () => {
  // Make API request
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
    const data = await response.data;

    menuItems = data.meals;
    displayMenuItems(menuItems);
};

// Display menu items in the DOM
const displayMenuItems = (items) => {

}

fetchMenuItems();