import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from "wapiti";

beforeAll(() => {
  configure({ adapter: new Adapter() });
})


const fakeProducts =
[
  { "decathlon_id": 11, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 32, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
]

test('Link renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('row sorted in asc after click on head row', () => {
  const sortedRow = shallow(<App lines={fakeProducts}/>);
  sortedRow.find("th").at(1).simulate("click");
  expect(sortedRow.find("td").at(1).text()).toBe("Basic L print Long Gold Fusion");
});

test('row sorted in asc after click on head row', () => {
  expect.assertions(1);
  return Wapiti.goto("http://localhost:3000")
    .click("th")
    .capture(() => document.querySelector("td").textContent)
    .click("th")
    .capture(() => document.querySelector("td").textContent)
    .run()
    .then(result => {
      expect(result).toEqual(["8380024", "8044622"]);
    });
});
