document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const taskInput = document.querySelector('input[type="text"]');
  const taskList = document.querySelector('.task-list');
  
  // Add new task
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText) {
      // Create new task element
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" />
        <span class="task-text">${taskText}</span>
        <div class="actions">
          <button class="complete-btn" title="Mark as Complete">✓</button>
          <button class="delete-btn" title="Delete Task">✖</button>
        </div>
      `;
      
      // Add to the list
      taskList.appendChild(li);
      
      // Clear input
      taskInput.value = '';
    }
  });
  
  // Handle checkbox changes and button clicks (event delegation)
  taskList.addEventListener('click', function(e) {
    const li = e.target.closest('li');
    
    if (e.target.classList.contains('delete-btn')) {
      // Delete task
      li.remove();
    } else if (e.target.classList.contains('complete-btn') || e.target.type === 'checkbox') {
      // Toggle completed state
      li.classList.toggle('completed');
      const checkbox = li.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
    }
  });
  
  // Filter buttons functionality
  const filterButtons = document.querySelectorAll('.filters button');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter tasks
      const filter = this.textContent;
      const tasks = taskList.querySelectorAll('li');
      
      tasks.forEach(task => {
        switch(filter) {
          case 'Pending':
            task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
            break;
          case 'Completed':
            task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
            break;
          default: // All
            task.style.display = 'flex';
        }
      });
    });
  });
});