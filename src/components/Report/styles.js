import styled from 'styled-components';

export const ReportUserAnswer = styled.div`
  background-color: ${({ isCorrect }) => (isCorrect ? 'green' : 'red')};
`;
