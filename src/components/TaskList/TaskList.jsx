import { useSelector } from 'react-redux';

import { Box } from 'components/Box';
import Task from 'components/Task/Task';
import { getTasks, getFilters } from 'redux/selectors';
import { getFilteredTasks } from 'services/services';

export default function TaskList() {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilters).status;

  const filteredTasks = getFilteredTasks(tasks, filter);

  return (
    <Box as="ul">
      {filteredTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </Box>
  );
}
