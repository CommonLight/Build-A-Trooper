const ProfileController = require('../controllers/profile.controller')

module.exports = (app) => {
    app.get('/api/profiles/all', ProfileController.getAllProfiles)
    app.get('/api/profiles/one/:id', ProfileController.getOneProfile)
    app.post('/api/profiles/create', ProfileController.createProfile)
    app.patch('/api/profiles/update/:id', ProfileController.updateProfile)
    app.delete('/api/profiles/delete/:id', ProfileController.deleteProfile)
}