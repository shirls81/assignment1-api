var reps = require('./lib/reps');

reps.allByZip('84035', function(err, results){
  console.log(results);
});

console.log(reps);

reps.repsByName('Hatch', function(err, results){
  console.log(results);
});

console.log(reps);

reps.repsByZip('84058', function(err, results){
  console.log(results);
});

console.log(reps);

reps.repsByState('Utah', function(err, results){
  console.log(results);
});

console.log(reps);

reps.sensByName('Love', function(err, results){
  console.log(results);
});

console.log(reps);

reps.sensByZip('84058', function(err, results){
  console.log(results);
});

console.log(reps);

reps.sensByState('Utah', function(err, results){
  console.log(results);
});

console.log(reps);
