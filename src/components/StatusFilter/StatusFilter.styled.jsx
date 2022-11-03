import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
`;

export const Filter = styled.button`
  padding: ${p => p.theme.space[1]};
  border: none;

  background-color: ${p => (p.active ? 'orangered' : 'lightblue')};

  :not(:first-child) {
    margin-left: ${p => p.theme.space[2]};
  }
`;
