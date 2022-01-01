import React from "react"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CssBaseline from "@mui/material/CssBaseline"
import Journeys from "../components/Journeys"

import { Helmet } from "react-helmet"

import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>Kan's Bike Journey</title>
      </Helmet>

      <CssBaseline />
      <Hero />
      <Journeys data={data} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allContentfulGeoJson(sort: { fields: contentfulid }) {
      nodes {
        location
        center {
          lat
          lon
        }
        zoom
        strokeWidth
        contentfulid
        period
        story {
          story
        }
        geometry {
          internal {
            content
          }
        }
      }
    }
  }
`
