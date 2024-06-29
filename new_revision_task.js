function studentScore(testScores){
    let result = testScores.filter((number) => {
        return number >= 70;
    })
    return result;
}

function increaseScore(gradeList){
    let examGrade = gradeList.map((score) => {
        return score + 5;
    })
    return examGrade;
}

function squareOfNumbers(integers){
    let valueSquared = integers.map((squareUp) => {
        return squareUp ** 2;
    })
    return valueSquared;
}

function distributeBooks(listOfMembers, listOfBooks){
    let result = {};
    let count = 0;
    for(let _ of listOfMembers) {
        result[listOfMembers[count]] = [listOfBooks[count]];
        count++;
    }
            return result; 
}

function afternoonClasses(listOfTime){
    let midclasses = listOfTime.filter((timings) => {
        identifier = timings.slice(-2);
        range = timings.slice(0);
        if(identifier === "PM" && range < "5")
        return timings;
    })
  return midclasses;
}

function trackExpenses(expenses){
    let totalAmount = 0;
    for(let value in expenses){
    totalAmount += expenses[value];
    }
    return totalAmount;
}
//let object = { "groceries": 150, "dinning out": 100, "transport": 50, "entertainment": 80};
            
module.exports = {studentScore, increaseScore, squareOfNumbers, distributeBooks, afternoonClasses,trackExpenses}