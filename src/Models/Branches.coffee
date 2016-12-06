BaseModel = require '../BaseModel'
Utils = require '../Utils'

class Branches extends BaseModel
  all: (projectId, fn = null) =>
    @debug "Branches::all()"
    @get "projects/#{Utils.parseProjectId projectId}/repository/branches", (err, res, data) => fn err, res, data if fn

module.exports = (client) -> new Branches client
