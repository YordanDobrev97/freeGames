import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import logo from '../../assets/logo.jpg'

const useStyles = makeStyles(() => ({
  toolbar: {
    background: 'black',
    display: 'flex',
    justifyContent: 'space-around'
  },
  logo: {
    width: '10em',
    height: '6em',
  },
}));

export default function Header() {
  const styles = useStyles()

  return (
    <AppBar>
      <Toolbar className={styles.toolbar}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt='logo' className={styles.logo} />

          <Typography
            variant='h4'
            component='span'
            sx={{
              marginLeft: '-20px',
              marginTop: '10px',
              background: 'linear-gradient(90deg, white, orange)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Games
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '8%' }}>
            <Button
                variant='contained'
                sx={{
                    background: 'orange',
                    color: 'black',
                    borderRadius: 8,
                    fontSize: 22,
                    width: '100%',
                    fontFamily: 'serif'
                }}>
                Вход
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
