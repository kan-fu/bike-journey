# My Bike Journey Showcase
[![Netlify Status](https://api.netlify.com/api/v1/badges/1aa7d940-0be9-44ef-820f-4bb805265aca/deploy-status)](https://app.netlify.com/sites/24game/deploys)

A single web page to display my bike paths.

## Description
1. Bike path data (geojson file and description) are stored in Contentful with webhook to trigger netlify rebuild when publishing new entries.
2. Maps are drawed using react-leaflet and openstreetmap.
3. Bike path data (GPX files) are recorded using phone app. They are combined and converted into kml originally (I use Google Earth to display them). In order to use them in leaflet, kml files are converted into geojson by [togeojson](https://github.com/mapbox/togeojson). The generated file size is big. [Mapshader](https://mapshaper.org/) is used to simplify the feature. 
