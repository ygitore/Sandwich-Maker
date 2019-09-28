import meats from "./components/meat.js";
import cheeses from './components/cheese.js';
import condiments from './components/condiments.js';
import breads from './components/bread.js';
import order from './components/order.js';
const init = ()=>{
    meats.printMeatOptions();
    cheeses.printCheeseOptions();
    condiments.printCondimentsOptions();
    breads.printBreadOptions();
    order.printOrderOption();
}
init();