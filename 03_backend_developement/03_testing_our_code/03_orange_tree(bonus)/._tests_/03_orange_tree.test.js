const orangeTree = require ("../03_orange_tree");

for (let year = 1 ; year < 10; year++) {
  test (`Verify the tree growing of 25 cm at year ${year}`, () => {
    orangeTree.seed();
    for (let i = 0 ; i < year ; i++){
    orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toEqual(year * 25);
  });
}

for (let year = 10 ; year < 20; year++) {
  test (`Verify the tree growing of 10 cm at year ${year}`, () => {
    orangeTree.seed();
    for (let j = 0 ; j < year ; j++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toEqual(9 * 25 + (year-9) * 10);
  });
}

for (let year = 20 ; year <100; year++) {
  test (`Verify the tree growing of 0 cm at year ${year}`, () => {
    orangeTree.seed();
    for (let k = 0 ; k < year; k++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toEqual (9 * 25 + 10 * 10)
  });
}

for (let year = 5 ; year <10; year++) {
  test (`Verify the tree produce 10 oranges at year ${year}`, () => {
    orangeTree.seed();
    for (let l = 0 ; l < year; l++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.oranges).toEqual (10)
  });
}

for (let year = 10 ; year <20; year++) {
  test (`Verify the tree produce 20 oranges at year ${year}`, () => {
    orangeTree.seed();
    for (let l = 0 ; l < year; l++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.oranges).toEqual (20)
  });
}

for (let year = 20 ; year <40; year++) {
  test (`Verify the tree produce 5 oranges at year ${year}`, () => {
    orangeTree.seed();
    for (let l = 0 ; l < year; l++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.oranges).toEqual (5)
  });
}

for (let year = 40 ; year <=100; year++) {
  test (`Verify the tree produce 0 oranges at year ${year}`, () => {
    orangeTree.seed();
    for (let l = 0 ; l < year; l++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.oranges).toEqual (0)
  });
}

test("when we seed, we reset the data", ()=> {
  orangeTree.seed();
  expect(orangeTree.age).toBe(0);
  expect(orangeTree.alive).toBeTruthy();
  expect(orangeTree.height).toBe(0);
  expect(orangeTree.oranges).toBe(0);
});

test("could we take an orange where there are?", () => {
  orangeTree.seed();
  orangeTree.oranges=12
  expect(orangeTree.pickAnOrange()).toBeTruthy();
  expect(orangeTree.oranges).toBe(11);
});

test("could we take an orange where there aren't?", () => {
  orangeTree.seed();
  orangeTree.oranges=0;
  orangeTree.pickAnOrange();
  expect(orangeTree.pickAnOrange()).toBeFalsy();
});

test ("dead between 50 and 100 years?", () => {
  orangeTree.seed();
  orangeTree.age=100;
  orangeTree.ageOneYear();
  expect(orangeTree.alive).toBeFalsy();
});
