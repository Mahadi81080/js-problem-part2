/**
 * chair ---- 3 frt
 * table-----10frt
 * bed-----50frt
 */ 

function woodQuentity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood  =chairQuantity * perChairWood;
    const tableTotalWood  =tableQuantity * perTableWood;
    const bedTotalWood  =bedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood+ bedTotalWood;
    return totalWood;

}

const wood = woodQuentity(0,0,1);
console.log('wood-need', wood)