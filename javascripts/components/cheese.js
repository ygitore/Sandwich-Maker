import utilities from '../helpers/utilities.js';
const cheeses = [{id: "cheese1", name: "Swiss", price: 50},
{id: "cheese2", name: "Yellow", price: 12},
{id: "cheese3", name: "American", price: 67},
{id: "cheese4", name: "Muenester", price: 35}
];
const printCheeseOptions = ()=>{
    let domString = '<h4>Cheese</h4>';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
                <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
            </div>`;        
    }    
    utilities.printToDom('cheese-container',domString);
};
const getSelectedCheese = ()=>{
    const selectedCheese = [];
    const selectedCheckBoxes = document.getElementsByClassName('cheese');
    for (let i = 0; i < selectedCheckBoxes.length; i++) {
       for (let j = 0; j < cheeses.length; j++) {
           if(selectedCheckBoxes[i].checked && selectedCheckBoxes[i].id === cheeses[j].id){
               selectedCheese.push(cheeses[j]);
            }           
       }        
    }  
    return selectedCheese;
}
const addSelectedCheesesToDom = ()=>{
    const cheesesSelected = getSelectedCheese();
    let cheesesList = '<div id = "all-Cheeses">';
    for (let i = 0; i < cheesesSelected.length; i++) {
        cheesesList +=`
            <p>Cheese: ${cheesesSelected[i].name}</p>
            <p>Price: ${cheesesSelected[i].price}</p>
        `;  
    }    
    cheesesList +='</div>';
    utilities.printToDom('cheese-selection', cheesesList);
}
document.body.addEventListener('keyup', addSelectedCheesesToDom);
export default{ printCheeseOptions, getSelectedCheese };