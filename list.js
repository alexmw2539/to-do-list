document.addEventListener('DOMContentLoaded', () => {
    const newtask = document.getElementById('newtask');
    const addtask = document.getElementById('addtask');
    const tasklist = document.getElementById('tasks');
    addtask.addEventListener('click', () => {
        const tasktext = newtask.value.trim();
        if (tasktext !== '') {
            const li = document.createElement('li');
            li.textContent = tasktext;
            const deletebutton = document.createElement('button');
            deletebutton.textContent = 'X';
            deletebutton.className = 'delete';
            deletebutton.addEventListener('click', () => {
                tasklist.removeChild(li);
            });
            li.appendChild(deletebutton);
            tasklist.appendChild(li);
            newtask.value = '';
            newtask.focus();
        }
    });
    newtask.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addtask.click();
        }
    });
});