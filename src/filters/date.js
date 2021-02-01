module.exports = function (value) {
  const date = new Date(value)
  return new Intl.DateTimeFormat('ru-RU').format(date)
}
