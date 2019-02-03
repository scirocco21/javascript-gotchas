// write a function that will sum up any numbers passed into it as arguments, e.g. sum(1,2,3), sum(1,2,3,4) etc

function sum() {
  var args = [...arguments];
  return args.reduce((sum, current) => sum+ current, 0)
}

// or using rest operator:
function sum(..args) {
  return args.reduce((sum, current) => sum+ current, 0)
}
