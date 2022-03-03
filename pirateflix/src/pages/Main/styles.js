import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-bottom: 1px solid #d5d5d5;
  padding: .5rem;
`;

export const Logo = styled.h1`
  flex: 1;
  font-size: 1rem;
  margin: 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f1f1f1;
  max-width: 480px;
  margin: 2rem auto;
  padding: .5rem;
`;

export const Label = styled.label`
  flex-shrink: 0;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Repositories = styled.div`
  max-width: 480px;
  margin: 1rem auto;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  background-color: #f1f1f1;
  border-bottom: 1px solid #d5d5d5;
  padding: .5rem;
`;