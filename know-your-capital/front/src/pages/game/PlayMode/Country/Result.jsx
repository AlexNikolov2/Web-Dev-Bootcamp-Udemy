import styled from 'styled-components';

export const Result = styled.section`
    color: var(--secondary);
    font-size: 1.5rem;
    background-color: ${(props) => props.isCorrect ? 'var(--correct)' : 'var(--incorrect)'};
    border: 3px solid ${(props) => props.isCorrect ? 'var(--correct-darker)' : 'var(--incorrect-darker)'};
    border-radius: 16px;
`
