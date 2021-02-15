import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './app.css';
import NewTaskForm from '../New-task-form';
import TaskList from '../Task-list';
import Footer from '../Footer';

const App = () => {
  const createTodoEl = (label) => ({
    label,
    completed: false,
    editing: false,
    checked: false,
    time: new Date(),
    id: nanoid(8),
  });

  const [todoData, setTodoData] = useState([createTodoEl('Task 1'), createTodoEl('Task 2'), createTodoEl('Task 3')]);
  const [buttonsData, setButtonsData] = useState([
    { label: 'All', isActive: true, id: 1 },
    { label: 'Active', isActive: false, id: 2 },
    { label: 'Completed', isActive: false, id: 3 },
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const addItem = (text) => {
    const newItem = createTodoEl(text);
    const newData = [...todoData, newItem];
    if (filteredData.length > 0) {
      const newFilterData = [...filteredData, newItem];
      setTodoData(newData);
      setFilteredData(newFilterData);
    } else {
      setTodoData(newData);
    }
  };

  const deleteItem = (id) => {
    const indexTodo = todoData.findIndex((el) => el.id === id);
    const newTodoData = [...todoData.slice(0, indexTodo), ...todoData.slice(indexTodo + 1)];
    if (filteredData.length > 0) {
      const indexFilter = filteredData.findIndex((el) => el.id === id);
      const newFilterData = [...filteredData.slice(0, indexFilter), ...filteredData.slice(indexFilter + 1)];
      setTodoData(newTodoData);
      setFilteredData(newFilterData);
    } else {
      setTodoData(newTodoData);
    }
  };

  const completedItem = (id) => {
    const indexTodo = todoData.findIndex((el) => el.id === id);
    const oldTodoItem = todoData[indexTodo];
    const newTodoItem = { ...oldTodoItem, completed: !oldTodoItem.completed, checked: !oldTodoItem.checked };
    const newTodoData = [...todoData.slice(0, indexTodo), newTodoItem, ...todoData.slice(indexTodo + 1)];
    if (filteredData.length > 0) {
      const indexFilter = filteredData.findIndex((el) => el.id === id);
      const oldFilterItem = filteredData[indexFilter];
      const newFilterItem = {
        ...oldFilterItem,
        completed: !oldFilterItem.completed,
        checked: !oldFilterItem.checked,
      };
      const newFilterData = [
        ...filteredData.slice(0, indexFilter),
        newFilterItem,
        ...filteredData.slice(indexFilter + 1),
      ];
      setTodoData(newTodoData);
      setFilteredData(newFilterData);
    } else {
      setTodoData(newTodoData);
    }
  };

  const onDeleteCompleted = () => {
    const newTodoData = todoData.filter((el) => !el.completed);
    if (filteredData.length > 0) {
      const newFilterData = filteredData.filter((el) => !el.completed);
      setTodoData(newTodoData);
      setFilteredData(newFilterData);
    } else {
      setTodoData(newTodoData);
    }
  };

  const onEdit = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[index];
    const newItem = { ...oldItem, editing: !oldItem.editing, id };
    const newData = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
    setTodoData(newData);
  };

  const editItem = (data) => {
    const { changedLabel, id } = data;
    const index = todoData.findIndex((el) => el.id === id);
    const newItem = { ...todoData[index], label: changedLabel, editing: false };
    const newData = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
    setTodoData(newData);
  };

  const onFilter = (id) => {
    const falseData = buttonsData.map((el) => ({ ...el, isActive: false }));
    const index = buttonsData.findIndex((el) => el.id === id);
    const oldButtonItem = buttonsData[index];
    const newButtonItem = { ...oldButtonItem, isActive: true };
    const newButtonData = [...falseData.slice(0, index), newButtonItem, ...falseData.slice(index + 1)];
    let filterData;
    let isSearched;

    switch (id) {
      case 1:
        filterData = [];
        isSearched = false;
        break;

      case 2:
        filterData = todoData.filter((el) => !el.completed);
        isSearched = true;
        break;

      case 3:
        filterData = todoData.filter((el) => el.completed);
        isSearched = true;
        break;

      default:
        break;
    }
    setButtonsData(newButtonData);
    setFilteredData(filterData);
    setIsSearch(isSearched);
  };

  let list;

  if (isSearch && filteredData.length !== 0) {
    list = (
      <TaskList
        todos={filteredData}
        onDeleted={deleteItem}
        onEdit={onEdit}
        onComplete={completedItem}
        confirmChanges={editItem}
      />
    );
  } else if (!isSearch && todoData.length !== 0) {
    list = (
      <TaskList
        todos={todoData}
        onDeleted={deleteItem}
        onEdit={onEdit}
        onComplete={completedItem}
        confirmChanges={editItem}
      />
    );
  } else {
    list = <p className="empty-message">There is no todos yet</p>;
  }

  const toDo = todoData.filter((el) => !el.completed).length;

  return (
    <section className="todoapp">
      <header>
        <h1>todos</h1>
        <NewTaskForm onAdd={addItem} />
      </header>
      <section className="main">
        {list}
        <Footer buttons={buttonsData} left={toDo} onDelete={onDeleteCompleted} onFilter={onFilter} />
      </section>
    </section>
  );
};

export default App;
