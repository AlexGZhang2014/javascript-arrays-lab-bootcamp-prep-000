const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newKit = kittens.splice(kittens.length - 1, 0, name);
  return newKit
}

function prependKitten(name) {
  var newKit = kittens.splice(0, 0, name);
}

function removeLastKitten() {
  var newKit = kittens.slice
}