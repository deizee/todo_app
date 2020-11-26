const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: false,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: false,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {

  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTheme = localStorage.getItem('app_theme' || 'default');

  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];
  const themeSelect = document.getElementById('themeSelect');

  const noTaskText = document.createElement('div');
  noTaskText.classList.add("mx-auto", "d-flex", "justify-content-center", "align-items-center", "mt-5", "no-task");
  noTaskText.style.color = "grey";
  noTaskText.style.fontStyle = "italic";

  const allTasksBtn = document.createElement('button');
  allTasksBtn.textContent = "All tasks";
  allTasksBtn.classList.add("btn", "btn-light", "ml-auto", "all-tasks-btn", "mt-4");
  allTasksBtn.setAttribute("data-on", "off");

  const uncompletedTasksBtn = document.createElement('button');
  uncompletedTasksBtn.textContent = "Uncompleted tasks";
  uncompletedTasksBtn.classList.add("btn", "btn-secondary", "ml-2", "uncompleted-tasks-btn", "mt-4");
  uncompletedTasksBtn.setAttribute("data-on", "off");

  form.appendChild(allTasksBtn);
  form.appendChild(uncompletedTasksBtn);

  // Events
  setTheme(lastSelectedTheme);
  themeSelect.value = lastSelectedTheme;
  renderAllTasks(objOfTasks);
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeleteHandler);
  listContainer.addEventListener('click', onCompliteHandler);
  allTasksBtn.addEventListener('click', onAllTasksHandler);
  uncompletedTasksBtn.addEventListener('click', onUncomplitedTasksHandler);
  themeSelect.addEventListener('change', onThemeSelectHandler);

  function renderAllTasks(taskList) {
    listContainer.innerHTML = '';

    if (!taskList) {
      console.error('Передайте списак задач!');
      return;
    }

    if (isEmptyObject(taskList)) {
      isNoTasks();
    }

    const fragment = document.createDocumentFragment();
    Object.values(taskList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({_id, title, body, completed} = {}) {
    const li = document.createElement('li');
    li.classList.add("list-group-item", "d-flex", "align-items-center", "flex-wrap", "mt-2");
    li.setAttribute('data-task-id', _id);

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = "bold";

    const article = document.createElement('article');
    article.textContent = body;
    article.classList.add("mt-2", "w-100");
    
    const compliteBtn = document.createElement('button');
    compliteBtn.classList.add("btn", "btn-success", "ml-auto", "success-btn");
    
    if (completed) {
      li.style.background = "#ddd";
      compliteBtn.textContent = "Complited";
     } else {
       li.style.background = "";
       compliteBtn.textContent = "Complite";
     }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-2", "delete-btn");

    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(compliteBtn);
    li.appendChild(deleteBtn);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Пожалуйста, введите заголовок и текст задачи");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    
    noTaskText.remove();
    
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();


  }

  function createNewTask(title, body) {
    const newTask = {
      title, 
      body, 
      completed: false,
      _id: `task-${Math.random()}`
    }

    objOfTasks[newTask._id] = newTask;

    return { ...newTask }
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы хотите удалить задачу ${title}. Подтвердить?`);
    if (!isConfirm) return isConfirm;
    objOfTasks[id].completed = false;
    delete objOfTasks[id];
    if (isEmptyObject(objOfTasks)) {
      isNoTasks("allTasksList");
    }
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
      if (uncompletedTasksBtn.dataset.on === "on") {
        if (Object.values(objOfTasks).every(el => el.completed)) {
          isNoTasks("uncomplitelList");
        }
      }
    }
  }

  function onCompliteHandler({ target }) {
    if (target.classList.contains('success-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      if (!objOfTasks[id].completed) {
        parent.style.background = "#ddd";
        objOfTasks[id].completed = true;
        target.textContent = "Complited";
      } else {
        parent.style.background = "";
        objOfTasks[id].completed = false;
        target.textContent = "Complite";
      }
      const sortObj = sortByComplete(objOfTasks);
      if (uncompletedTasksBtn.dataset.on === "on") {
        parent.remove();
        if (Object.values(sortObj).every(el => el.completed)) {
          isNoTasks("uncomplitelList");
        }
      } else {
        renderAllTasks(sortObj);
      }
    }
  }

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  function isNoTasks(tag) {
    const form = document.getElementsByClassName('form-section');
    switch (tag) {
      case "allTasksList":
        noTaskText.textContent = 'Список задач пуст';
        break;
      case "uncomplitelList":
        noTaskText.textContent = 'Нет незавершенных задач';
        break;
      default:
        break;
    }    
    form[0].appendChild(noTaskText);
  }

  function onAllTasksHandler(event) {
    event.preventDefault();
    noTaskText.remove();
    if (isEmptyObject(objOfTasks)) {
      isNoTasks("allTasksList");
    }
    allTasksBtn.dataset.on = "on";
    uncompletedTasksBtn.dataset.on = "off";
    const sortObj = sortByComplete(objOfTasks);
    renderAllTasks(sortObj);
  }

  function onUncomplitedTasksHandler(event) {
    event.preventDefault();

    allTasksBtn.dataset.on = "off";
    uncompletedTasksBtn.dataset.on = "on";

    const { ...uncompletedTasks } = objOfTasks;
    for (let key in uncompletedTasks) {
      if (uncompletedTasks[key].completed) {
        delete uncompletedTasks[key];
      }
    }
    if (!isEmptyObject(uncompletedTasks)) {
      renderAllTasks(uncompletedTasks);
    } else {
      listContainer.innerHTML = '';
      isNoTasks("uncomplitelList");
    };
  }

  function sortByComplete(obj) {
    let result = {};
    Object.keys(obj).sort((prev, next) => {
      if (obj[prev].completed) {
        return 1;
      } else {
        return -1;
      }
    }).forEach(key => {
      result[key] = obj[key];
    })
    return result;
  }

  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(`Вы хотите изменить тему ${selectedTheme}. Подтвердить?`);
    if(!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem('app_theme', selectedTheme);
  }

  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);
