let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(orders) {
  console.log(`QTY     ITEM                TOTAL`);
  let total = 0;

  for (const { itemName, quantity, unitPricePence } of orders) {
    const lineTotal = (unitPricePence * quantity) / 100;
    const formattedLineTotal = lineTotal.toFixed(2);

    console.log(
      `${quantity}       ${itemName.padEnd(18)}  ${formattedLineTotal}`
    );

    total += lineTotal;
  }

  console.log(`\nTotal: ${total.toFixed(2)}`);
}

printReceipt(order);
