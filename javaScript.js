function userInputData() {
  var id1 = document.getElementById('myTable').children.length;
  var name1 = document.getElementById('name').value;
  var company1 = document.getElementById('company').value;
  var formData = [id1, name1, company1];
  return formData;
}

function add() {
  var userGivenData = userInputData();
  addRow(userGivenData);
  // console.log(userGivenData);
  emptyValue()
}

function addRow(userGivenData) {
  var row = document.createElement('div');
  row.id = userGivenData[0];
  row.className = "row";
  document.getElementById('myTable').appendChild(row);

  console.log("id value"+  row.id);

  var column1 = document.createElement('div');
  column1.id = 'column1';
  column1.innerHTML = userGivenData[0];
  document.getElementById(row.id).appendChild(column1);

  var column2 = document.createElement('div');
  column2.id = 'column2';
  column2.innerHTML = userGivenData[1];
  document.getElementById(row.id).appendChild(column2);

  var column3 = document.createElement('div');
  column3.id = 'column3';
  column3.innerHTML = userGivenData[2];
  document.getElementById(row.id).appendChild(column3);

  var column4 = document.createElement('div');
  column4.id = 'column4';
  column4.innerHTML = `<button class="delete-button" onclick='editTask(this)' id='editButton'>edit</button>
  <button class="delete-button" onclick='deleteRow()' id='deleteButton'>Delete</button>`;
  document.getElementById(row.id).appendChild(column4);
  
}


var editTask = (e) => {
  debugger;
  var selectedTask = e.parentElement.parentElement;
  console.log(selectedTask)
  document.getElementById("id").value = selectedTask.childNodes[0].innerHTML;
  document.getElementById("name").value = selectedTask.childNodes[1].innerHTML;
  document.getElementById("company").value = selectedTask.childNodes[2].innerHTML;

  var x = document.getElementById('add');
  x.style.display  ="none";
  var y = document.getElementById('update');
  y.style.display  ="block";

};


// var update = document.getElementById('update');
// update.addEventListener('click', updateRecord);
function updateRecord(selectedRow) {
  debugger;
  console.log(selectedRow);
  var selectedRow = document.querySelectorAll('.row');

  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var company = document.getElementById("company").value;

  selectedRow[0].childNodes[0].innerText = id;
  selectedRow[0].childNodes[1].innerText = name;
  selectedRow[0].childNodes[2].innerText = company;
  
  var x = document.getElementById('add');
  x.style.display  ="block";
  var y = document.getElementById('update');
  y.style.display  ="none";
  emptyValue();
}



function emptyValue() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('company').value = "";
}

function deleteRow() {
  var allROw = document.querySelectorAll(".row");
  for (var index = 0; index < allROw.length; index++) {
    allROw[index].querySelector("#deleteButton").addEventListener("click",function() {
      this.closest(".row").remove();
    });
  }
}

function cancelButton() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('company').value = "";
}

function newCompanyRow() {
  var row = document.createElement('div');
  row.id = "row";
  row.className = "row";
  document.getElementById('myTable').appendChild(row);

  var column1 = document.createElement('div');
  column1.id = 'column1';
  column1.innerHTML = "";
  document.getElementById('row').appendChild(column1);

  var column2 = document.createElement('div');
  column2.id = 'column2';
  column2.innerHTML = "";
  document.getElementById('row').appendChild(column2);

  var column3 = document.createElement('div');
  column3.id = 'column3';
  column3.innerHTML = "";
  document.getElementById('row').appendChild(column3);

  var column4 = document.createElement('div');
  column4.id = 'column4';
  column4.innerHTML = `<button class="delete-button" onclick='editTask(this)' id='editButton'>edit</button>
  <button class="delete-button" onclick='deleteRow()' id='deleteButton'>Delete</button>`;
  document.getElementById('row').appendChild(column4);
}


