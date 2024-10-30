import { Chart } from 'chart.js/auto';
import spreadsheet from './../../../data/survey_data.xlsx';

//get data from 2D array generated by the .xlsx file
let labels = [];
for (let i = 1; i <= 10; i++) {
  labels[i] = spreadsheet[i][0];
}
let data = [];
for (let i = 1; i <= 10; i++) {
  data[i] = spreadsheet[i][3];
}

//render bar chart
const canvas = document.getElementById('testChart');
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: spreadsheet[0][3],
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
