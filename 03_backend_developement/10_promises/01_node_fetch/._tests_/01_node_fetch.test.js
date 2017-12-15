require("sepia");
const brandNameByProduct = require ("../01_node_fetch.js");

test("Brand name when we indicate a id_product",() => {
  expect.assertions(1);
  return brandNameByProduct("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then((result) => {
      return expect(result).toBe("QUECHUA")
    })
    .catch((error) => {
      return expect(error).toBe("error")
    })
});
