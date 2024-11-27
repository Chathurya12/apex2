function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    const task = taskInput.value.trim();
    if (!task) return;
  
    const li = document.createElement('li');
    li.textContent = task;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      li.remove();
      saveTasks();
    };
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    taskInput.value = '';
    saveTasks();
  }
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(task => {
      tasks.push(task.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
      };
  
      li.appendChild(deleteBtn);
      document.getElementById('taskList').appendChild(li);
    });
  }
  
  window.onload = loadTasks;
  