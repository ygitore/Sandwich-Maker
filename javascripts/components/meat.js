
import utilities from '../helpers/utilities.js';
const meats = [{id: "meat1", name: "Ham", price: 90},
    {id: "meat2", name: "Beef", price: 12},
    {id: "meat3", name: "Chicken", price: 89},
    {id: "meat4", name: "Turkey", price: 45}
];

const getSelectedMeat = ()=>{
    const selectedMeat = [];
    const allMeat = document.getElementsByClassName('meat');
    for (let i = 0; i < allMeat.length; i++) {
        for (let j = 0; j < meats.length; j++) {
            if(allMeat[i].checked && allMeat[i].id === meats[j].id){
                selectedMeat.push(meats[j]);
                allMeat[i].checked = false;
            }
        }
    }
    return selectedMeat;
}
const printMeatOptions = ()=>{
    let domString1 = '<h4>Meat</h4>';
    for (let i = 0; i < meats.length; i++) {        
        domString1 += `<div class="form-group form-check">
                    <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
                    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
                    </div>`;        
    }
    utilities.printToDom('meat-container',domString1);
};
const addSelectedMeatToDom = ()=>{
    const meatsSelected = getSelectedMeat();
    let meatList = '<div id = "all-meat">';
    for (let i = 0; i < meatsSelected.length; i++) {
        meatList +=`
            <p>Meat: ${meatsSelected[i].name}</p>
            <p>Price: ${meatsSelected[i].price}</p>`;  
    }    
    meatList +='</div>';
    utilities.printToDom('my-meat-selection', meatList);
}
document.body.addEventListener('keyup', addSelectedMeatToDom);
export default{ printMeatOptions };