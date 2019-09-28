
import utilities from '../helpers/utilities.js';
const meats = [{id: "meat1", name: "Ham", price: 90},
    {id: "meat2", name: "Beef", price: 12},
    {id: "meat3", name: "Chicken", price: 89},
    {id: "meat4", name: "Turkey", price: 45}
];

const printMeatOptions = ()=>{
    let domString1 = '<h4>Meat</h4>';
    for (let i = 0; i < meats.length; i++) {        
        domString1 += `<div class="form-group form-check">
                    <input type="checkbox" class="form-check-input cheese" id="${meats[i].id}">
                    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
                    </div>`;        
    }
    utilities.printToDom('meat-container',domString1);
};

export default{ printMeatOptions };