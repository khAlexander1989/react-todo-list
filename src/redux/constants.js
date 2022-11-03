export const actionTypes = {
  tasks: {
    add: 'tasks/addTask',
    delete: 'tasks/deleteTask',
    toggleCompleted: 'tasks/toggleCompleted',
  },
  filters: {
    setStatusFilter: 'filters/setStatusFilter',
  },
};

export const statusFilters = Object.freeze({
  all: 'All',
  active: 'Active',
  completed: `Completed`,
});
