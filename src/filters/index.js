export function formatDate(timestamp) {
  let date = new Date(timestamp * 1000)
    , year = date.getFullYear()
    , month = date.getMonth() + 1
    , day = date.getDate();

  return year + '-' + month + '-' + day;
}

// export function formatDate2(timestamp) {
//   let date = new Date(timestamp * 1000)
//     , year = date.getFullYear()
//     , month = date.getMonth() + 1
//     , day = date.getDate();

//   return year + '|' + month + '|' + day;
// }

// export {
//   formateDate: function(timestamp) {
//     let date = new Date(timestamp * 1000)
//       , year = date.getFullYear()
//       , month = date.getMonth() + 1
//       , day = date.getDate();

//     return year + '-' + month + '-' + day;
//   }
// }
