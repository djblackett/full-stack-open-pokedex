const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080

app.get('/health', (req, res) => {
  if (res.statusCode !== 200) {
    res.status(500).send('error')
  }
  res.status(200).send('ok')
})

app.get('/version', (req, res) => {
  res.send('6') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 8080')
})
// small change for committing new dev branch

// new feature: just testing the github actions conditional triggering