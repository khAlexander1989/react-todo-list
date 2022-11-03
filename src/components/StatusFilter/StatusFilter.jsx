import { useSelector, useDispatch } from 'react-redux';

import { Container, Filter } from './StatusFilter.styled';
import { statusFilters } from 'redux/constants';
import { getFilters } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters).status;

  return (
    <Container>
      {Object.values(statusFilters).map(status => (
        <li key={status}>
          <Filter
            type="button"
            active={status === filter}
            onClick={() => dispatch(setStatusFilter(status))}
          >
            {status}
          </Filter>
        </li>
      ))}
    </Container>
  );
}
