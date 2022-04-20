class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'
    })
  }

  getFullList() {
    return this.axiosApp.get("/characters")
  }

  getOneRegister(characterID) {
    return this.axiosApp.get(`/characters/${characterID
      }`)
  }

  createOneRegister(characterInfo) {
    return this.axiosApp.post("/characters", characterInfo)
  }

  updateOneRegister(characterID, characterInfo) {
    return this.axiosApp.put(`/characters/${characterID
      }`, characterInfo)
  }

  deleteOneRegister(characterID) {
    return this.axiosApp.delete(`/characters/${characterID}`)
  }
}
