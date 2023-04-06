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

  var city = document.getElementById("city").value;

  // Update the image src attributes based on the selected city
  document.getElementById("image1").src = "/static/css/images/" + city + "1.jpg";
  document.getElementById("image2").src = "/static/css/images/" + city + "2.jpg";
  document.getElementById("image3").src = "/static/css/images/" + city + "3.jpg";
  document.getElementById("image4").src = "/static/css/images/" + city + "4.jpg";
  document.getElementById("image5").src = "/static/css/images/" + city + "5.jpg";
  document.getElementById("image6").src = "/static/css/images/" + city + "2.jpg";
  document.getElementById("image7").src = "/static/css/images/" + city + "3.jpg";
  document.getElementById("image8").src = "/static/css/images/" + city + "4.jpg";
  document.getElementById("image9").src = "/static/css/images/" + city + "5.jpg";

  
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

