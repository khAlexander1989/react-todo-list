import { statusFilters } from 'redux/constants';

export function getFilteredTasks(tasks, filter) {
  switch (filter) {
    case statusFilters.active:
      return [...tasks].filter(task => !task.completed);

    case statusFilters.completed:
      return [...tasks].filter(task => task.completed);

    default:
      return tasks;
  }
}
