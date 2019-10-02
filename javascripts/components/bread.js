import utilities from '../helpers/utilities.js';
const breads = [{id: "bread1", name: "Potato", price: 90},
    {id: "bread2", name: "Brown", price: 12},
    {id: "bread3", name: "Banana", price: 89},
    {id: "bread4", name: "Wheat", price: 45}
];

const printBreadOptions = ()=>{
    let domString = '<h4>breads</h4>';
    for (let i = 0; i < breads.length; i++) {
        domString += `
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
                <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
            </div>`;
        
    }    
    utilities.printToDom('bread-container',domString);
};

const getSelectedBread =()=>{
    const allBread = document.getElementsByClassName('bread');
    const selectedBread = [];
    for (let i = 0; i < allBread.length; i++) {
        for (let j = 0; j < breads.length; j++) {
            if(allBread[i].checked && allBread[i].id === breads[j].id){
                selectedBread.push(breads[j]);
            }
        }
    }
    return selectedBread;
}
const addBreadToDom = ()=>{
    const breadSelected = getSelectedBread();
    let breadString = '<div id = "bread-String">';
    for (let i = 0; i < breadSelected.length; i++) {
        breadString += `<p>${breadSelected[i].name}</p> 
        <p>${breadSelected[i].price}</p>`;        
    }
    breadString +='</div>';
    utilities.printToDom('bread-selection', breadString);

}
document.body.addEventListener('keyup',addBreadToDom);
export default{ printBreadOptions, getSelectedBread };