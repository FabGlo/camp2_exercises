const greeting = require ("../greeting");

test("Name is not null",() => {
  expect(greeting()).not.toBeNull();
  }
);

test("sentence has to be: Hello Fabien",() => {
  const name = "Fabien";
  expect(greeting(name)).toBe("Hello FABIEN!");
  }
);

test("Name is not null",() => {
  expect(greeting(name)).not.toBeNull();
  }
);
