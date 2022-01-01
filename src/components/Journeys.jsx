import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Map from "./Map"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Divider from "@mui/material/Divider"
import { Typography } from "@mui/material"

const Journeys = ({ data }) => {
  const geojsonList = data.allContentfulGeoJson.nodes
  return (
    <>
      <Typography id="journeys" align="center" variant="h2" sx={{ py: 4 }}>
        Journeys
      </Typography>
      <Divider />
      <Container maxWidth="lg">
        {geojsonList.map(g => (
          <Grid
            container
            component="article"
            key={g.contentfulid}
            sx={{ my: 4 }}
          >
            <Grid item xs={12} sm={6} md={7}>
              <Paper elevation={3} square sx={{ height: "100%" }}>
                <Map
                  lat={g.center.lat}
                  lon={g.center.lon}
                  zoom={g.zoom}
                  data={JSON.parse(g.geometry.internal.content)}
                  weight={g.strokeWidth}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={5} sx={{ pl: { xs: 0, sm: 3 } }}>
              <Card square>
                <CardHeader title={g.location} subheader={g.period} />

                <CardContent>
                  <Typography paragraph variant="body1">
                    {g.story.story}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  )
}

export default Journeys
