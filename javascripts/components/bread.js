import utilities from '../helpers/utilities.js';
const breads = [{id: "bread1", name: "Potato-bread", price: 90},
    {id: "bread2", name: "Brown bread", price: 12},
    {id: "bread3", name: "Banana bread", price: 89},
    {id: "bread4", name: "Whole wheat bread", price: 45}
];

const printBreadOptions = ()=>{
    let domString = '<h4>breads</h4>';
    for (let i = 0; i < breads.length; i++) {
        domString += `
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input cheese" id="${breads[i].id}">
                <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
            </div>`;
        
    }    
    utilities.printToDom('bread-container',domString);
};

export default{ printBreadOptions };