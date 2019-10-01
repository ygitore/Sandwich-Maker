import utilities from '../helpers/utilities.js';
const veggie = [{id: "veggie1", name: "California vaggie", price: 50},
{id: "veggie2", name: "Italian veggie", price: 20},
{id: "veggie3", name: "Ultimate veggie", price: 60},
{id: "veggie4", name: "Roasted veggie", price: 50}
];


const getSelectedVeggies = ()=>{
    const selectedVeggies = [];
    const allVeggies = document.getElementsByClassName('veggies');
    for (let i = 0; i < allVeggies.length; i++) {
        for (let j = 0; j < veggie.length; j++) {
            if(allVeggies[i].checked && allVeggies[i].id === veggie[j].id){
                selectedVeggies.push(veggie[j]);
                allVeggies[i].checked = false;
            }
        }
    }
    return selectedVeggies;
}
const printVeggiesOption = ()=>{
    let veggiesString = '<h4>Veggies</h4>';
    for (let i = 0; i < veggie.length; i++) {        
        veggiesString += `<div class="form-group form-check">
                    <input type="checkbox" class="form-check-input veggies" id="${veggie[i].id}">
                    <label class="form-check-label" for="${veggie[i].id}">${veggie[i].name}</label>
                    </div>`;        
    }
    utilities.printToDom('veggies-container',veggiesString);
};
const addSelectedVeggiesToDom = ()=>{
    const veggieSelected = getSelectedVeggies();
    let veggiesList = '';
    for (let i = 0; i < veggieSelected.length; i++) {
        veggiesList +=`<p>Veggies: ${veggieSelected[i].name}</p>
                    <p>Price: ${veggieSelected[i].price}</p>`
    }    
    utilities.printToDom('veggies-selection', veggiesList);
}
document.body.addEventListener('keyup', addSelectedVeggiesToDom);
export default{ printVeggiesOption,getSelectedVeggies };