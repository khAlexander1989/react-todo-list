import { Container } from './AppBar.styled';
import StatusFilter from 'components/StatusFilter';
import TaskCounter from 'components/TaskCounter';

export default function AppBar() {
  return (
    <Container>
      <TaskCounter />
      <StatusFilter />
    </Container>
  );
}
