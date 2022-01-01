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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
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
