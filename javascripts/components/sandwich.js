
import utilities from '../helpers/utilities.js';
const sandwich = [{id: "sandwich1", name: "Bacon sandwich", price: 40},
    {id: "sandwich2", name: "Beef sandwich", price: 12},
    {id: "sandwich3", name: "Chicken sandwich", price: 89},
    {id: "sandwich4", name: "Tuna sandwich", price: 45}
];

const getSelectedSandwich = ()=>{
    const selectedSandwich = [];
    const allSandwich = document.getElementsByClassName('meat');
    for (let i = 0; i < allSandwich.length; i++) {
        for (let j = 0; j < sandwich.length; j++) {
            if(allSandwich[i].checked && allSandwich[i].id === sandwich[j].id){
                selectedSandwich.push(sandwich[j]);
                allSandwich[i].checked = false;
            }
        }
    }
    return selectedSandwich;
}
const printSandwichOptions = ()=>{
    let domString1 = '<h4>Sandwich</h4>';
    for (let i = 0; i < sandwich.length; i++) {        
        domString1 += `<div class="form-group form-check">
                    <input type="checkbox" class="form-check-input sandwich" id="${sandwich[i].id}">
                    <label class="form-check-label" for="${sandwich[i].id}">${sandwich[i].name}</label>
                    </div>`;        
    }
    utilities.printToDom('sandwich-container',domString1);
};
const addSelectedSandwichToDom = ()=>{
    const sandwichesSelected = getSelectedSandwich();
    let sandwichList = '<div id = "all-sandwich">';
    for (let i = 0; i < sandwichesSelected.length; i++) {
        sandwichList +=`
            <p>Sandwich: ${sandwichesSelected[i].name}</p>
            <p>Price: ${sandwichesSelected[i].price}</p>`;  
    }    
    sandwichList +='</div>';
    utilities.printToDom('my-sandwich-selection', sandwichList);
}
document.body.addEventListener('keyup', addSelectedSandwichToDom);
export default{ printSandwichOptions };