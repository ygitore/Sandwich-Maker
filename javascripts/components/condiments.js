import utilities from '../helpers/utilities.js';
const condiment = [{id: "condiment1", name: "Chipotle Mayonnaise", price: 50},
{id: "condiment2", name: "Wasabi Mayonnaise", price: 12},
{id: "condiment3", name: "Hoisin Sauce", price: 67},
{id: "condiment4", name: "Tonkatsu Sauce", price: 35}
];

const printCondimentsOptions = ()=>{
    let domString = '<h4>Condiments</h4>';
    for (let i = 0; i < condiment.length; i++) {
        domString += `
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input cheese" id="${condiment[i].id}">
                <label class="form-check-label" for="${condiment[i].id}">${condiment[i].name}</label>
            </div>`;
        
    }    
    utilities.printToDom('condiments-container',domString);
};

export default{ printCondimentsOptions };