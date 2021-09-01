const { Router } = require('express')
const eventsControllers = require('../controllers/eventsControllers')
const artistsControllers = require('../controllers/artistsControllers')

const AppRouter = Router()


AppRouter.post('/events/new', eventsControllers.createEvent)
AppRouter.delete('/events/:id', eventsControllers.deleteEvent)
AppRouter.get('/events', eventsControllers.getEvents)
AppRouter.get('/artists/id/:artist', eventsControllers.getEventsByArtistName)


AppRouter.post('/artists/new', artistsControllers.createArtist)
AppRouter.delete('/artists/:id', artistsControllers.deleteArtist)
AppRouter.get('/artists', artistsControllers.getArtists)
AppRouter.get('/artists/:id', artistsControllers.getArtistById)

module.exports = AppRouter