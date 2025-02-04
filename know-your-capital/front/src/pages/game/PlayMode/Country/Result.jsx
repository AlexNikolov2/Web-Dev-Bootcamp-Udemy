import styled from 'styled-components';

export const Result = styled.section`
    color: var(--secondary);
    font-size: 1.5rem;
    background-color: ${(isCorrect) => isCorrect ? 'var(--correct)' : 'var(--incorrect)'};
    border: 3px solid ${(isCorrect) => isCorrect ? 'var(--correct-darker)' : 'var(--incorrect-darker)'};
    border-radius: 16px;
`
