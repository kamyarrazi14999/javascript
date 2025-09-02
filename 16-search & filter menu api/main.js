const menuItemlist = document.querySelector(".menu");
const loadingText = document.querySelector(".loading-text");



// store menu items api data
let menuItems = null;

// function to fetch menu items from the API
const fetchMenuItems = async () => {

  // Make API request
  try{
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
    const data = await response.data;
  // meals array is stored in the data.meals property of the response object.  We store this data in the menuItems variable.  We then use this data to display the menu items on the
  
    menuItems = data.meals;
    loadingText.style.display = "none"; // hide loading text
    displayMenuItems(menuItems);
}  catch(error){
   menuItemlist.innerHTML = ` <h2 class='not-found-text'>${error.massage}</h2>;`
}
}
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