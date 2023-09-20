const localStorageKey = "lista-de-tarefas"

function noRepetition() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask() {
    let input = document.getElementById('input-new-task')
    input.style.border = ''

    if (!input.value) { // Se não houver nada inserido
        input.style.border = '3px solid #5C8374'
        alert('Digite algo para inserir em sua lista!')
    }
    else if (noRepetition()) {
        alert('Já existe uma task com essa descrição!')
    }
    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
        
    }
    input.value = ''
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('lista-tarefas')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li class="task" data-name="${values[i]['name']}">${values[i]['name']} 
        <button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
        </button></li>`
    }

}

function removeItem(data) {
  // Remove a task do localStorage
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
  let index = values.findIndex(x => x.name == data)
  values.splice(index, 1)
  localStorage.setItem(localStorageKey, JSON.stringify(values))

  // Aplica a animação
  let task = document.querySelector(`.task[data-name="${data}"]`);
  task.style.transform = "translateX(+700px) ";
  setTimeout(() => {
    task.remove();
  }, 300);
}

function clearList() {
    // Remove todas as tarefas do localStorage
    localStorage.removeItem(localStorageKey);
  
    // Limpa a lista de tarefas
    let list = document.getElementById('lista-tarefas');
    list.innerHTML = '';
  }
  

showValues()
