module.exports = function () {
  var returned = new Date()
  // Set day back to the first of this month.
  returned.setDate(1)
  // Move back 24 hours, leaving us at the current time on the last day
  // of the last month.
  returned.setHours(-24)
  // Zero out time components.
  returned.setHours(0)
  returned.setMinutes(0)
  returned.setSeconds(0)
  returned.setMilliseconds(0)
  return returned
}
