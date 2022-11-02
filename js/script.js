// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const highestDigit = document.getElementById("highestDigit").value
  // output
  for (let i = 0; i < highestDigit; i++) {
  document.getElementById("total").innerHTML = "The total is 15";
  }
}