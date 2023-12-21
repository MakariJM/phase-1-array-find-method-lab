// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ];
  
  function superbowlWin(winners) {
    for (const team of winners) {
      if (team.result === "W") {
        return team.year;
      }
    }
  }