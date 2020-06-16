module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");
  return {
    products: _.times(100, function(n) {
      return {
        id: n,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        colors: [faker.commerce.color(), faker.commerce.color()],
        description: faker.lorem.paragraph(),
        photos: [faker.image.food(), faker.image.food(), faker.image.food()]
      }
    })
  } 

}