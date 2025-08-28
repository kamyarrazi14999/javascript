const menuItemlist = document.querySelector(".menu");



// store menu items api data
let menuItems = null;

// function to fetch menu items from the API
const fetchMenuItems = async () => {
  // Make API request
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
    const data = await response.data;

    menuItems = data.meals;
    displayMenuItems(menuItems);
};

//function to show items on the page
const displayMenuItems = (items) => {
    
    items.map(item => {
        const menulteme = `
        <div class="menu-item">
            <img src="${item.strMealThumb}" alt="${item.strMeal}" class="menu-img">
            <h3>${item.strMeal}</h3>
        </div>
        
        `
        menuItemlist.innerHTML += menulteme;
    
    })
};

fetchMenuItems();