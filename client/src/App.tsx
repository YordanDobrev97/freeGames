import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from './components/Header/Header'
import Background from './components/Background/Background'

import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Luckiest Guy',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Background />
      </Box>
    </ThemeProvider>
  );
}
