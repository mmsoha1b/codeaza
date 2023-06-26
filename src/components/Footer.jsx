import { Box, Container,Typography } from "@mui/material"

const Footer = ()=>{
  return(
    <>
    <Box sx={{ bottom: 0, width: '100%', position: 'fixed'}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023  Limited
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default Footer
