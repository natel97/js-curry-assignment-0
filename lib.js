'use strict'

const entries =
  obj =>
  Object.keys(obj)
  .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
  count => {
    let x = []
    x.length = count
    x.fill(itemName)
    return x.join(', ')
  }



/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
  customers => {
    return customers.map(customer => ({
      customer: customer.name,
      items: [Object.keys(customer.shoppingList).map(item => itemRepeater(item)(customer.shoppingList[item].toString()))].join(", ")
    }))
  }

module.exports = {
  listing,
  customer,
  constructCarts
}
