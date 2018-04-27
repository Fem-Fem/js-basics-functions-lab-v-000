// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  answer = 42 - blocks
  if (answer < 0) {
    return answer * -1
  }
  else {
    return answer
  }
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}
