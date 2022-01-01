const fs = require('fs')

const rawdata = fs.readFileSync('simple2.json')
const geojson = JSON.parse(rawdata)
const filteredFeatures = geojson.features.filter(({ properties }) =>
  /Cycling/.test(properties.styleUrl)
)
console.log(filteredFeatures.length)
const removePropFeatures = filteredFeatures.map(({ type, geometry }) => ({
  type,
  geometry,
}))

const modGeojson = { type: 'FeatureCollection', features: removePropFeatures }

fs.writeFileSync(
  'simple_noprop.json',
  JSON.stringify(modGeojson),
  function (err) {
    if (err) {
      console.log(err)
    }
  }
)
