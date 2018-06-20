let oneWeek = [
  { date: new Date('2018-01-01'), visits: 32 },
  { date: new Date('2018-01-02'), visits: 82 },
  { date: new Date('2018-01-03'), visits: 74 },
  { date: new Date('2018-01-04'), visits: 35 },
  { date: new Date('2018-01-05'), visits: 54 },
  { date: new Date('2018-01-06'), visits: 64 },
  { date: new Date('2018-01-07'), visits: 44 },
];

const getAverage = (oneWeek, option) => {
  var visitAmount = oneWeek.map(b => b.visits);
  var dates = oneWeek.map(a => a.date);

  if (option === true) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var avDayObject = {};
    var holdAmount;
    for (i = 0; i < oneWeek.length; i++) {
      if (typeof avDayObject[days[dates[i].getDay()]] != "undefined") {
        holdAmount = avDayObject[days[dates[i].getDay()]].averageVisits + visitAmount[i];
      } else holdAmount = visitAmount[i];
      avDayObject[days[dates[i].getDay()]] = {
        averageVisits: holdAmount
      };
    }
    console.log(avDayObject);
    return avDayObject
  } else {
    var average = 0;
    for (i = 0; i < oneWeek.length; i++) {
      average = average + visitAmount[i];

      if (i === oneWeek.length - 1) {
        average = average / oneWeek.length;
      }
    }
    var avObject = {
      averageVisits: average
    };
    console.log(avObject);

    return avObject;
  }
};
getAverage(oneWeek, true);

module.exports = getAverage;
