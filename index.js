module.exports = function () {
  var returned = new Date()
  // Set day back to the last day of last month.
  returned.setDate(0)
  // Zero out time components.
  returned.setHours(0, 0, 0, 0)
  return returned
}
