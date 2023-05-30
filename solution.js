const solution = (content) => {

// console.log(content);

const rows = content.split('\n');
const dataRows = rows.slice(1);
console.log(`Всего видов существ: ${dataRows.length}`);
const dataUntrimmed = dataRows.map((row) => row.split('|'));

const data = dataUntrimmed.map((row) => row.map((elem) => elem.trim()))
// console.log(data);
// console.log(data[0][7]);
const pricesToHire = data.map((row) => row[7])
const pricesToHireStringToNumber = pricesToHire.map((price) => Number(price));
// console.log(pricesToHireStringToNumber);
const sortedPrices = pricesToHireStringToNumber.sort((a, b) => b - a);
// console.log(sortedPrices);
const price10OfMostExpensive = sortedPrices[0]*10;
const price20OfSecondMostExpensive = sortedPrices[1]*20;
console.log(`Cтоимость найма 10 самых сильных существ: ${price10OfMostExpensive}`);
console.log(`Cтоимость найма 20 вторых по силе существ: ${price20OfSecondMostExpensive}`);

const data2 = data.map((row) => row.map((elementOfRow) => (elementOfRow !== '' && !isNaN(Number(elementOfRow))) ? Number(elementOfRow) : elementOfRow))
// console.log(data2);

// let fattestRow = data2[0];
// console.log(fattestRow);
// console.log('--- step 3 ---')

const findFattest = (acc, row) => (row[6] > acc [6]) ? row : acc;
const fattestCreature = data2.reduce(findFattest);
// console.log(fattestCreature);
const priceOfFatSquad = fattestCreature[4] * fattestCreature[7];
console.log(`Cтоимость найма отряда самых толстых: ${priceOfFatSquad}`);

const findLightest = (acc, row) => (row[6] < acc [6]) ? row : acc;
const lightestCreature = data2.reduce(findLightest);
// console.log(lightestCreature);
const priceOfLigthSquad = lightestCreature[4] * lightestCreature[7];
console.log(`Cтоимость найма отряда самых худых: ${priceOfLigthSquad}`);

// console.log('--- step 4 ---');

const findWorstValue = (acc, row) => (row[7] / row[2] > acc[7] / acc[2]) ? row : acc;
const worstPricedCreature = data2.reduce(findWorstValue);
// console.log(data2[0][2])
// console.log(worstPricedCreature);
const worstPricedValue = Math.round(worstPricedCreature[7] / worstPricedCreature[2]);
console.log(`Самый невыгодный юнит по соотношению цены и силы: ${worstPricedCreature[1]} - ${worstPricedValue} рублей за единицу силы`);


const findBestValue = (acc, row) => (row[7] / row[2] < acc[7] / acc[2]) ? row : acc;
const bestPricedCreature = data2.reduce(findBestValue);
// console.log(data2[0][2])
// console.log(bestPricedCreature);
const bestPricedValue = Math.round(bestPricedCreature[7] / bestPricedCreature[2]);
console.log(`Самый выгодный юнит по соотношению цены и силы: ${bestPricedCreature[1]} - ${bestPricedValue} рублей за единицу силы`);

};

export default solution;