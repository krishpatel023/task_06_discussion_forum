import dayjs from "dayjs";

export function getYear(month = dayjs().month()){
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()
    let currnetMonthCount = 0 - firstDayOfMonth
    const daysMatrix = new Array(52).fill([]).map(() => {
        return new Array(7).fill(null).map(() =>{
            currnetMonthCount ++
            return dayjs(new Date(year, month, currnetMonthCount))
        })
    })
    return daysMatrix
}

export function getMonthName(month = dayjs().month()){
    var array = []
    var currentMonth = dayjs().month()
    for(var i= (currentMonth - 11); i<= currentMonth; i++){
        array.push(dayjs().month(i).format('MMM'))
    }
    return array
}


// TEMP DATA DELETE LATER

// Function to generate a random date between two given dates
function getRandomDate(startDate, endDate) {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
    const randomDate = dayjs(new Date(randomTimestamp));
    return randomDate;
  }

  function getRandomContributions( max) {
    const randomNumber = Math.floor(Math.random() * (max + 1)) ;
    return randomNumber;
  }
  
  // Function to generate an array of objects with random dates
  function generateRandomDateArray(startDate, endDate, numberOfDates, maxContributions) {
    const dateArray = [];
    for (let i = 0; i < numberOfDates; i++) {
      const randomDate = getRandomDate(startDate, endDate);
      dateArray.push({
         date: randomDate.format("DD-MM-YYYY"),
         contributions : getRandomContributions( maxContributions)
      });
    }
    return dateArray;
  }
  

  
 export function generateRandomeData(){
      // Define the start and end dates
    const startDate = new Date('2022-10-01');
    const endDate = new Date(dayjs().format("YYYY-MM-DD"));
    const numberOfDates = 220
    const maxContributions = 100
    // Generate an array of 10 objects with random dates
    const randomDateArray = generateRandomDateArray(startDate, endDate, numberOfDates,  maxContributions);
    return randomDateArray
  }