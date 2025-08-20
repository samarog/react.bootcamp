import React from "react";

function calc(operation, n1, n2) {
  return operation(n1, n2);
}

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export default calc;
export { add, multiply, subtract, divide };
