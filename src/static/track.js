// import Chart from 'chart.js/auto'

// function processDictionary(usefulScores) {

//   const colourSchemes = [[
//         'rgb(255, 99, 132)',
//         'rgb(211, 211, 211)'
//       ], [
//         'rgb(10, 99, 132)',
//         'rgb(211, 211, 211)'
//       ], [
//         'rgb(10, 150, 132)',
//         'rgb(211, 211, 211)'
//       ], [
//         'rgb(200, 150, 80)',
//         'rgb(211, 211, 211)'
//       ], [
//         'rgb(200, 200, 40)',
//         'rgb(211, 211, 211)'
//       ], [
//         'rgb(80, 120, 255)',
//         'rgb(211, 211, 211)'
//       ], [
//         'rgb(230, 120, 255)',
//         'rgb(211, 211, 211)'
//       ]];
//   int i = -1
//   for (let key in usefulScores) {
//     i++

//     const config = {
//     type: key,
//     data: data,
//     };

//     const data = {
//     labels: [
//       key
//     ],
//     datasets: [{
//       label: key,
//       data: [usefulScores[key] * 10, 100 - (usefulScores[key] * 10)],
//       backgroundColor: colourSchemes[i]
//       hoverOffset: 4
//     }]
//     new Chart(document.getElementById('chart' + i), config)
//     };
//     }
//  }

function getOption() {
  selectElement = document.querySelector('#city');
  output = selectElement.value;
  console.log(output);
}
//  $("button").click(function(){
//   $.post("track.html",
//   {
//     city : document.getElementById()
//   },
//   function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//   });
// });

