var url = "http://localhost:3000"
var editMode = false;
let editId;
let editedExpense

function handleFormSubmit(event) {
    event.preventDefault();
    const expense = {
        amount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    };
    if (editMode) {
        
      editExpense(editId,expense,event)  
    }
    else {
        axios.post(`${url}/add-expense`, expense).then(res => {
            event.target.reset();
            getExpenses();
        })
            .catch(err => console.log(err)) 
    }
   
}

function getExpenses() {
    axios.get(`${url}/expenses`).then((data) => {
        console.log(data)
        renderExpenses(data.data)
    })
}
var newExpense

function renderExpenses(expenses) {
    console.log(expenses)
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const id = expense.id;
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
      ${expense.amount} - ${expense.description} - ${expense.category}
      <button type="button" class="btn btn-danger btn-sm float-right ml-2" onclick="deleteExpense(${id})">Delete</button>
      <button type="button" class="btn btn-warning btn-sm float-right" onclick="editButton(${id},${expense.amount},'${expense.description}','${expense.category}')">Edit</button>
    `;
        expensesList.appendChild(li);
    });
}

function deleteExpense(id) {
    console.log(id)
    const deleteUrl = `${url}/delete-expense/${id}`;

    axios.delete(deleteUrl)
        .then(response => {
            console.log('Expense deleted successfully:', response.data);
            getExpenses(); // Refresh the expenses list after deletion
        })
        .catch(error => {
            console.error('Error deleting expense:', error);
        });
}

function editButton(index,amount,description,category) {
  
    editId = index
    console.log(editId)
    editMode=true
    document.getElementById('addBtn').innerHTML='Edit Expense'
   
    document.getElementById('amount').value = amount; // start displaying on input fields
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
   
}

function editExpense(id,expense,event) {
    const editUrl = `${url}/edit-expense/${id}`;
    console.log(id)
    

    axios.post(editUrl,expense)
        .then(response => {
            console.log('Expense edited successfully:', response.data);
            editMode=false
            event.target.reset();
            document.getElementById('addBtn').innerHTML='Add Expense'
            getExpenses(); // Refresh the expenses list after deletion
        })
        .catch(error => {
            console.error('Error editing expense:', error);
        });
}

document.addEventListener('DOMContentLoaded', getExpenses);
