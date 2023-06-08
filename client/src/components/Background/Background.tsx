import { Box, Container, Typography } from '@mui/material'
import background from '../../assets/background.jpg'

export default function Background() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth='md'>
        <Typography variant='h2' sx={{ color: 'black', textAlign: 'center'}}>
          Добре дошли
        </Typography>
      </Container>
    </Box>
  )
}
