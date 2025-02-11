export const textFieldStyling = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'var(--secondary)' },
        '&:hover fieldset': { borderColor: 'var(--secondary)' },
        '&.Mui-focused fieldset': { borderColor: 'var(--secondary)' }
    },
    '& .MuiInputLabel-root': { color: 'var(--secondary)' },
    '& .MuiInputLabel-root.Mui-focused': { color: 'var(--secondary)' },
    '& .MuiInput-underline:before': { borderBottomColor: 'var(--secondary)' },
    '& .MuiInput-underline:hover:before': { borderBottomColor: 'var(--secondary)' },
    '& .MuiInput-underline:after': { borderBottomColor: 'var(--secondary)' },
    'input': { color: 'var(--secondary)' },
};