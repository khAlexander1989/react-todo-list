import { useSelector } from 'react-redux';

import { getTasks } from 'redux/selectors';
import { Box } from 'components/Box';

export default function TaskCounter() {
  const tasks = useSelector(getTasks);

  const completed = tasks.reduce(
    (acc, curr) => (curr.completed ? ++acc : acc),
    0
  );

  const active = tasks.length - completed;

  return (
    <Box as="ul">
      <li>
        <span>Active: </span>
        {active}
      </li>
      <li>
        <span>Completed: </span>
        {completed}
      </li>
    </Box>
  );
}
