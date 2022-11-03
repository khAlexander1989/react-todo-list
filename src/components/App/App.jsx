import Header from 'components/AppBar';
import TaskForm from 'components/TaskForm';
import TaskList from 'components/TaskList';

import { Layout } from './App.styled';

export default function App() {
  return (
    <Layout>
      <Header />
      <TaskForm />
      <TaskList />
    </Layout>
  );
}
