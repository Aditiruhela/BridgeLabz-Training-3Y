let bonus=5000;
function calculateSalaray(isPermanent){
    let salary=40000;
    if(isPermanent){
        salary+=bonus;
    }
    console.log(salary);
}
calculateSalaray(true);
calculateSalaray(false);
console.log("Global bonus:",bonus);
