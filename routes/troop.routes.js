const TroopController = require('../controllers/troop.controller')

module.exports = (app) => {
    app.get('/api/troops/all', TroopController.getAllTroops)
    app.get('/api/troops/one/:id', TroopController.getOneTroop)
    app.post('/api/troops/create', TroopController.createTroop)
    app.patch('/api/troops/update/:id', TroopController.updateTroop)
    app.delete('/api/troops/delete/:id', TroopController.deleteTroop)
}