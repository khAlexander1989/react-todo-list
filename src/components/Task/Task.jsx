import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';

export default function Task({ task: { id, text, completed } }) {
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(toggleCompleted(id));
  }

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }

  return (
    <span>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {text}
      <button type="button" onClick={handleDeleteTask}>
        del
      </button>
    </span>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};
