import { useDispatch } from 'react-redux';

import { addTask } from 'redux/tasksSlice';
// import { addTask } from 'redux/actions';

export default function TaskForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const taskName = e.currentTarget.elements.taskField.value;
    dispatch(addTask(taskName));
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="taskField" />
      <button type="submit">Add</button>
    </form>
  );
}
