import utilities from '../helpers/utilities.js';
const condiment = [{id: "condiment1", name: "Mayonnaise", price: 50},
{id: "condiment2", name: "Ketchup", price: 12},
{id: "condiment3", name: "Honey Mustard", price: 67},
{id: "condiment4", name: "Hot Sauce", price: 35}
];

const printCondimentsOptions = ()=>{
    let domString = '<h4>Condiments</h4>';
    for (let i = 0; i < condiment.length; i++) {
        domString += `
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input condiments" id="${condiment[i].id}">
                <label class="form-check-label" for="${condiment[i].id}">${condiment[i].name}</label>
            </div>`;
    }    
    utilities.printToDom('condiments-container',domString);
};
const getSelectedCondiments = ()=>{
    const selectedCondiments = [];
    const allCondiments = document.getElementsByClassName('condiments');
    for (let i = 0; i < allCondiments.length; i++) {
        for (let j = 0; j < condiment.length; j++) {
            if(allCondiments[i].checked && allCondiments[i].id === condiment[j].id){
                selectedCondiments.push(condiment[j]);
            }
        }
    }
    return selectedCondiments;
}

const addCondimentsToDom = ()=>{
    const condimentsSelected = getSelectedCondiments();
    let condimentsString = '<div id = "bread-String">';
    for (let i = 0; i < condimentsSelected.length; i++) {
        condimentsString += `<p>Condiments:${condimentsSelected[i].name}</p> 
        <p>Price: ${condimentsSelected[i].price}</p>`;        
    }
    condimentsString +='</div>';
    utilities.printToDom('my-condiments-selection', condimentsString);

}
document.body.addEventListener('keyup',addCondimentsToDom);
export default{ printCondimentsOptions };
                selectedCondiments.push(condiment[j]); 
            }
        }
        
    }
    return selectedCondiments;
}
const addSelectedCondimentsToDom = ()=>{
    const condimentsSelected = getSelectedCondiments();
    let condimentsList = '';
    for (let i = 0; i < condimentsSelected.length; i++) {
        condimentsList +=`<p>Condiment: ${condimentsSelected[i].name}</p>
                    <p>Price: ${condimentsSelected[i].price}</p>`
    }    
    utilities.printToDom('condiments-selection', condimentsList);
}
document.body.addEventListener('keyup', addSelectedCondimentsToDom);
export default{ printCondimentsOptions,getSelectedCondiments };
