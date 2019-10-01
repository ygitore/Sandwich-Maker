import selectedCheeses from './cheese.js';
import selectedBreads from './bread.js';
import selectedcondiments from './condiments.js';
import selectedSandwichs from './sandwich.js';
import selectedMeat from './meat.js';
import selectedVeggies from './veggies.js';
import utilities from '../helpers/utilities.js';
const createOrderButtonEvent = ()=>{
    const cheeses = selectedCheeses.getSelectedCheese();
    const breads = selectedBreads.getSelectedBread();
    const veggies = selectedVeggies.getSelectedVeggies();
    
    console.log('veggies is working',veggies);
    const condiments = selectedcondiments.getSelectedCondiments();
    console.log(condiments.name);
    const meat = selectedMeat.getSelectedMeat();
    const sandwich = selectedSandwichs.getSelectedSandwich();
    const finalPrice = [].concat(cheeses,breads,veggies,condiments,meat,sandwich);
    console.log(finalPrice.length);
    createFinalorder(finalPrice);
}

const createFinalorder = (items)=>{
    console.log('is working',items);
    let domStringResult = '';
    let sum=0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i].price;
    }
    domStringResult += `<h6>$ ${sum/100}</h6>`;
    utilities.printToDom('final-order', domStringResult);
};
  
const printOrderOption = ()=>{ 
    const orderString = `<button type="submit" class="btn-info"id = "btn-click-order">Order Now</button>`;
    utilities.printToDom('final-order',orderString)
    document.getElementById('btn-click-order').addEventListener('click', createOrderButtonEvent);
}
export default{ printOrderOption };