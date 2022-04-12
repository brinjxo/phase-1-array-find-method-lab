// code your solution here
const record = [// each objext has 2 properties year and result
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  //takes 1 argument
// superbowlWin = (record) => {
//     //use find to test each obj to see if result = W (logical operaters)
//    result = record.find ( record => record.result === "W" )// should return the year when the win occured 
//    return !!result ? result.year : undefined;// returns undefined if no win is found 
// }
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }