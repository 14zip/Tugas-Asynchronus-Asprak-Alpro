let members = [];
let tasks = [];

function addMember() {
    const memberName = document.getElementById('member-name').value;
    if (memberName) {
        members.push(memberName);
        updateMemberDropdown()
        document.getElementById('member-name').value = '';
        alert('Member added')
    } else {
        alert('Please enter a member name');
    }
}

function updateMemberDropdown() {
    const memberDropdown = document.getElementById('task-member');
    memberDropdown.innerHTML = '<option value="">Assign to member</option>';
    members.forEach(member => {
        const option = document.createElement('option');
        option.value = member;
        option.innerText = member;
        memberDropdown.appendChild(option);
    });
}

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const assignedMember = document.getElementById('task-member').value;

    if (taskName && dueDate && assignedMember) {
        const task = {
            name: taskName,
            dueDate: dueDate,
            member: assignedMember
        };
        tasks.push(task);
        updateTaskList();
        document.getElementById('task-name').value = '';
        document.getElementById('due-date').value = '';
        document.getElementById('task-member').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.className = 'add-task';

        let taskDetail = document.createElement('span');
        taskDetail.className = 'task-list';
        taskDetail.innerHTML = `${task.name} | Due: ${task.dueDate} | Assigned to: ${task.member}`;

        let deleteTask = document.createElement('span')
        deleteTask.className = 'delete';
        deleteTask.innerHTML = "\u00d7";

        li.appendChild(taskDetail);
        li.appendChild(deleteTask);
        taskList.appendChild(li);
    });
}


document.getElementById('task-list').addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if (e.target.classList.contains('delete')) {
        const index = Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement);
        tasks.splice(index, 1);
        updateTaskList();
    }
}, false);
