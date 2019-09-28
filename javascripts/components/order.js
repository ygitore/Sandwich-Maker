import selectedCheeses from './cheese.js';
import utilities from '../helpers/utilities.js';
const createOrderButtonEvent = ()=>{
    const mySelections = selectedCheeses.getSelectedCheese();
    const createFinalorder = ()=>{
        let domString2 = '';
        for (let i = 0; i < mySelections.length; i++) {
          domString2+= `<div class="card">
                            <div class="card-header">
                                Your selection for cheese
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Name: ${mySelections[i].name}</li>
                                <li class="list-group-item">${mySelections[i].price}</li>
                            </ul>
                        </div>`;
        }
        utilities.printToDom('sandwichs', domString2);
    };

    createFinalorder();
};
const printOrderOption = ()=>{ 
    const orderString = `<button type="submit" id = "btn-click-order">Order Now</button>`;
    utilities.printToDom('final-order',orderString)
    document.getElementById('btn-click-order').addEventListener('click', createOrderButtonEvent);
}
export default{ printOrderOption };