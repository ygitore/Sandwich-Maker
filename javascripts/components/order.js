import selectedCheeses from './cheese.js';
import selectedBreads from './bread.js';
import selectedcondiments from './condiments.js';
import selectedSandwichs from './sandwich.js';
import selectedMeat from './meat.js';
import selectedVeggies from './veggies.js';
import utilities from '../helpers/utilities.js';

const createFinalorder = (items)=>{    
    let domStringResult = '';
    let sum=0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i].price;
        console.log(i+' --> '+sum);
    }
    domStringResult += `<h6 class="order-result">Your total is: $${sum/100}</h6>`;
    utilities.printToDom('final-order', domStringResult);
};
const createOrderButtonEvent = ()=>{
    const cheeses = selectedCheeses.getSelectedCheese();
    const breads = selectedBreads.getSelectedBread();
    const veggies = selectedVeggies.getSelectedVeggies();
    const condiments = selectedcondiments.getSelectedCondiments();
    const meat = selectedMeat.getSelectedMeat();
    const sandwich = selectedSandwichs.getSelectedSandwich();
    const finalPrice = [].concat(cheeses,breads,veggies,condiments,meat,sandwich);
    createFinalorder(finalPrice);
    resetSelection();
}

const resetSelection = () =>{
    //get all of checkboxes 
    const resetCheckbox = document.getElementsByClassName('form-check-input');
    //loop all of them 
    //set checked to false
    for (let i = 0; i < resetCheckbox.length; i++) {
        resetCheckbox[i].checked = false;        
    }    
}
const printOrderOption = ()=>{ 
    const orderString = `<button type="submit" class="btn-info"id = "btn-click-order">Order Now</button>`;
    utilities.printToDom('final-order',orderString)
    document.getElementById('btn-click-order').addEventListener('click', createOrderButtonEvent);
}
export default{ printOrderOption };