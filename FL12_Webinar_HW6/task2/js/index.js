$(document).ready(function () {
  const $list = $(".list");
  const $input = $("#add-input");
  const $add = $("#add-submit");
  const $remove = $("item-remove");
  const key = "todos";

  $add.click(function () {
    let value = $input.val();
    saveToLocalStorage(value);
    renderPage();
  });

  renderPage();

  function readTasksFromStorage() {
    let tasksStr = localStorage.getItem(key)
    return tasksStr
      ? JSON.parse(tasksStr)
      : []
  }

  function saveToLocalStorage(value) {
    if (value === "") {
      return;
    }

    let tasks = readTasksFromStorage();
    let task = { id: uuid(), text: value, done: false };
    tasks.push(task);

    localStorage.setItem(key, JSON.stringify(tasks));
  }

  function renderPage() {
    $list.empty();

    let tasks = readTasksFromStorage();
    $(tasks).each(function () {
      let task = this;
      const toDoItem = $('<li>').addClass('item');
      let text = $('<span>').text(task.text).addClass('item-text').appendTo(toDoItem);
      if (task.done) {
        text.addClass('done');
      }
      let button = $('<button>').addClass('item-remove').attr('id', task.id).text('Remove').appendTo(toDoItem);
      $list.append(toDoItem);
      button.click(function () {
        deleteFromLocalStorage(task);
        renderPage();
      });
    })

    $("li span").click(function () {
      $(this).toggleClass("done");
    })
  };


  function deleteFromLocalStorage(task) {
    let tasks = readTasksFromStorage();
    let i = tasks.indexOf(task);
    tasks.splice(i, 1);
    localStorage.setItem(key, JSON.stringify(tasks));
  }

});

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}