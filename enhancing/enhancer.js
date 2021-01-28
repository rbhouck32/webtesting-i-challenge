module.exports = {
  success,
  fail,
  repair,
  get,
};

// items {
//      name: "itemName",
//      durability: 0-20,
//      enhancement: 0-100
//       }
function success(item) {
  item.enhancement < 20 ? (item.enhancement += 1) : "";
  return { ...item };
}

function fail(item) {
  item.enhancement <= 15 ? (item.durability -= 5) : (item.durability -= 10);
  item.enhancement >= 15
    ? (item.durability -= 10) && (item.enhancement -= 1)
    : "";
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
