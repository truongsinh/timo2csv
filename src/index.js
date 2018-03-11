const data = require("./data");

const main = () => {
  const listOfTransactions = getListOfTransactionsFrom(data);
  const itemInCSVformat = transformToCSV(listOfTransactions);
  console.log(itemInCSVformat);
}

const getListOfTransactionsFrom = (rawData) => {
  return data
    .reduce(mergeDateItemsFromSeveralList, [])
    .reduce(mergeTransactionItemsFromDate, [])
};

const transformToCSV = (list) => {
  const Json2csvParser = require('json2csv').Parser;
  const json2csvParser = new Json2csvParser();
  return json2csvParser.parse(list);

}

const mergeDateItemsFromSeveralList = (accumulator, currentValue) => accumulator.concat(currentValue.data.items);
const mergeTransactionItemsFromDate = (accumulator, currentValue) => accumulator.concat(currentValue.item);

main();