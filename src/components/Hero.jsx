import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"
import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Button } from "gatsby-theme-material-ui"
const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <DirectionsBikeIcon sx={{ mr: 4 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Bike Journey
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="section"
        pt={4}
        id="hero"
        display="flex"
        alignItems="center"
        sx={{
          background:
            'linear-gradient(rgba(150, 200, 200, 0.7), rgba(0, 0, 0, 0.7)),url("/hero.jpg") center/cover no-repeat',
          flexGrow: 1,
        }}
      >
        {/* <Grid container justifyContent="center" flexDirection="column"> */}
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            color="white"
            fontWeight="fontWeightBold"
            sx={{ p: 2, fontSize: { xs: "2.75rem", sm: "3.75rem" } }}
          >
            Kan's Cycling Adventure
          </Typography>
          <Typography
            paragraph
            color="white"
            textAlign="left"
            fontWeight="medium"
            lineHeight="2"
            sx={{ px: 3 }}
          >
            I like bikes. <br />I have started to use bikes for commuting ever
            since I was a junior high student. <br />
            As I grew older, I found that the best pace to tour the city is by
            bike, compared with by foot (too slow) and by car (too fast). <br />
            So I made a promise that I will go to every bike trail marked on
            Google Maps in the city I live in.
            <br /> Glad that my promise is still kept.
          </Typography>

          <Box
            display={{ xs: "none", md: "block" }}
            sx={{ mt: 6, "& a": { textDecoration: "none" } }}
          >
            <AnchorLink to="/#journeys">
              <Button
                variant="contained"
                sx={{ margin: "auto", display: "block" }}
              >
                Discover More
              </Button>
            </AnchorLink>
          </Box>
        </Container>
        {/* </Grid> */}
      </Box>
    </Box>
  )
}

export default Hero
