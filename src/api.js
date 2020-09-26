import axios from "axios";
axios.defaults.baseURL = "https://www.dnd5eapi.co/api";

export default {
  getClassi() {
    return axios.get("/classes");
  },
  getClasse(nome) {
    return axios.get("/classes/" + nome);
  },
  getLvl(nome) {
    return axios.get("/classes/" + nome + "/levels");
  },
  getSpellcasting(nome) {
    return axios.get("/spellcasting/" + nome);
  },
  getRazze() {
    return axios.get("/races");
  },
  getRazza(nome) {
    return axios.get("/races/" + nome);
  },
  getEquipaggiamento(nome) {
    return axios.get("/equipment/" + nome);
  },
  getCategoria(categoria, cerca) {
    return axios.get("/" + categoria + "/?name=" + cerca);
  },
  getIncantesimo(nome) {
    return axios.get("/spells/" + nome);
  },
  getEquipaggiamenti() {
    return axios.get("/equipment");
  },
  getMostro(nome) {
    return axios.get("/monsters/" + nome);
  }
};
