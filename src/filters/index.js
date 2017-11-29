export {
  formatDate
};

function formatDate(timestamp) {
  let date = new Date(timestamp * 1000)
    , year = date.getFullYear()
    , month = date.getMonth() + 1
    , day = date.getDate();

  return year + ' 年 ' + month + ' 月 ' + day + ' 日 ';
}
