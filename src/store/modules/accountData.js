import { FirebaseAuction } from "../../src/utils/models/Firebase";


const getDefaultState = () => {
  return {};
};

export const accountDataModule = {
    state: getDefaultState(),
    mutations: {},
    getters: {
        getAllFirebaseAccounts: (state) => {
            return state;
        }
    }
};