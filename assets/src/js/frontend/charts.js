import { Chart } from 'chart.js/auto';
//import localSpreadsheet from './../../../data/survey_data.xlsx';
//import { GPChartColors } from 'chart.js';
//Chart.register(GPChratColors);

//get data from 2D array generated by the .xlsx file
/*let labels = [];
for (let i = 1; i <= 10; i++) {
  labels[i] = localSpreadsheet[i][0];
}
let data = [];
for (let i = 1; i <= 10; i++) {
  data[i] = localSpreadsheet[i][3];
}*/

/*
const colorPalette = [
  
];
*/

//render bar chart
const div = document.getElementById('playgroundDiv');

const canvas = document.createElement("canvas");
div.appendChild(canvas);

const inputForm = document.createElement("form");
const inputFormLabel = document.createElement("label");
const inputFormText = document.createElement("input");
const inputFormButton = document.createElement("input");
inputForm.setAttribute("method", "post");
//inputForm.setAttribute("action", renderSheet(inputFormText.value));
inputFormLabel.innerHTML = "Google sheets URL:";
inputFormText.setAttribute("type", "text");
inputFormText.setAttribute("value", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSh7InRrF4GyH0uGbAYLct1XpDSPLMaDwLh-T1gSLHzBApLr0-7nxeKWfSV-t8u9JvZT7fA-_UidmiY/pubhtml");
inputFormButton.setAttribute("type", "button");
inputFormButton.setAttribute("value", "Generate Graph");
inputFormButton.onclick = () => renderSheet(inputFormText.value);
inputForm.label = "Google sheets URL:";
inputForm.input = "text";
div.appendChild(inputForm);
inputForm.appendChild(inputFormLabel);
inputForm.appendChild(inputFormText);
inputForm.appendChild(inputFormButton);

async function renderSheet(sheetURL) {
  let id = extractSheetID(sheetURL);
  if (id) {
    const delimeter = ",";
    const dataStringArray = await fetchCSV(id);
    const headers = dataStringArray[0].split(delimeter);
    const dataStringNumbers = dataStringArray.slice(1,dataStringArray.length);
    const labels = dataStringNumbers.map((row) => row.split(delimeter)[0]);
    //const data = extractColumn(dataStringNumbers, delimeter, 3);
    const type = 'line';
    new Chart(canvas, {
      type: type,
      data: {
        labels: labels,
        datasets: formatDatasets(extractColumns(dataStringNumbers, delimeter), headers),
      },
      options: chartOptions(type, 'horizontal'),
    });
    return id;
  }
  console.log("nada");
  return null;
}

const extractSheetID = urlParam => {
  const googleSheetsPattern = /https:\/\/docs\.google\.com\/spreadsheets\/d\/e\/([\w-]+)/;
  const matches = urlParam.match(googleSheetsPattern);
  if (matches !== null) {
    return matches[1];
  }
  return false;
}

function chartOptions(type, subtype) {
  switch (type) {
    case 'bar':
      switch (subtype) {
        case 'horizontal':
          return {
            indexAxis: 'y',
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              }
            }
          }
        case 'stacked':
          return {
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        default /* vertical */: 
          return {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          };
      }
    case 'line':
      switch (subtype) {
        default:
          return {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            }
          }
      }
    default: 
      return null;
  }

}

async function fetchCSV(id) {
    const url = "https://docs.google.com/spreadsheets/d/e/" + id + "/pub?output=csv";
    const dataStringArray = await fetch(url).then((csv) => csv.text()).then((csvString) => csvString.split("\r\n"));
    return dataStringArray;
}

/*
function extractColumn(dataStringNumbers, delimeter, column) {
    return dataStringNumbers.map((row) => row.split(delimeter)[column]);
}
 */

function extractColumns(dataString, delimeter) {
  let dataArray = new Array(dataString[0].split(delimeter).length - 1);
  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i] = new Array(dataString.length);
  }
  let row;
  for (let i = 0; i < dataString.length; i++) {
    row = dataString[i].split(delimeter);
    for (let j = 1; j < row.length; j++) {
      dataArray[j - 1][i] = row[j];
    }
  }
  return dataArray;
}

function formatDatasets(dataArray, headers) {
  let datasets = new Array(dataArray.length);
  for (let i = 0; i < dataArray.length; i++) datasets[i] = {
    label: headers[i + 1],
    data: dataArray[i]
  };
  return datasets;
}
