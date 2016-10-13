// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// })
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('success',temp);
// }, function(err) {
//   console.log('error',err);
// });

// Challenge Area

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('Argument is not a number');
    } else {
      resolve(a + b);
    }
  })
}

addPromise(2,6).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error',err);
})

addPromise('',6).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error',err);
})

addPromise(undefined,6).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error',err);
})

addPromise(null,6).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error',err);
})
