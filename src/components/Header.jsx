import { Grid, AppBar,Toolbar, Typography} from '@mui/material'

const Header = ()=>{
  return(
    <>
    <AppBar position='static' sx={{bgcolor:'black'}}>
      <Toolbar>
        <Grid container item xs={10} marginX={'auto'}>
          <Grid item >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              my:1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Shades
            </Typography>
          </Grid>
          <Grid item sx={{ my: 2, color: 'white', display: 'block', ml: 20, mr: 20 }}>
            Services
          </Grid>
          <Grid item sx={{ my: 2, color: 'white', display: 'block' , mr: 20}}>
            Pricing
          </Grid>
          <Grid item sx={{ my: 2, color: 'white', display: 'block', marginLeft: 'auto', mr: 10 }}>
            Contact
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header
