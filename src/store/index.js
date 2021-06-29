import Vue from 'vue'
import Vuex from 'vuex'
import { accountDataModule } from "./modules/accountData";
import { sensorDataModule } from "./modules/sensorData";


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountData: accountDataModule,
    sensorsData: sensorDataModule
  }
})

export default store;