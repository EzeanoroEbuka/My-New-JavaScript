const {studentScore, increaseScore, squareOfNumbers, distributeBooks, afternoonClasses,trackExpenses} = require('./new_revision_task');

test("for Numbers Above 70 in a list", () => {
    expect(studentScore([45, 80, 75, 32, 45, 90])).toEqual([80, 75, 90])
});

test("for increment of scores by 5points", () => {
    expect(increaseScore([65,10,70,80,95])).toEqual([70, 15, 75, 85, 100])
});

test("that each element in a list of integer was squared", () => {
    expect(squareOfNumbers([2,5,3,6,4])).toEqual([4,25,9,36,16])
});

test("that Each member sucessfully got a book",() => {
    expect(distributeBooks(["Emily", "jack", "Mike"], ["StoryBook", "Bible", "Menu"])).toEqual({ Emily: [ 'StoryBook' ], jack: [ 'Bible' ], Mike: [ 'Menu' ] })
})

test("that the time for the class that hold at PM is returnd", () => {
  expect(afternoonClasses(["9:00aM","11:00AM","1:00PM","3:00PM", "4:00PM","6:00PM","8:00PM"])).toEqual(["1:00PM","3:00PM", "4:00PM"])
})

test("that the time for the class that hold at midday only  is returnd ", () => {
    expect(afternoonClasses(["9:00aM","11:00AM","1:00PM","3:00PM", "4:00PM","6:00PM","8:00PM"])).toEqual(["1:00PM","3:00PM", "4:00PM"])
})

test("that total expenses is returned", () => {
    let object = { "groceries": 150, "dinning out": 100, "transport": 50, "entertainment": 80};
    expect(trackExpenses(object)).toEqual(380)
})