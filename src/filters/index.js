export function formatDate(timestamp) {
  let date = new Date(timestamp * 1000)
    , year = date.getFullYear()
    , month = date.getMonth() + 1
    , day = date.getDate();

  return year + '-' + month + '-' + day;
}
