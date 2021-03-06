import PouchyStore from 'pouchy-store';
import config from '../config';

class TodosStore extends PouchyStore {
  get name() {
    return this._name;
  }

  setName(dbName) {
    this._name = dbName;
  }

  get urlRemote() {
    return config.couchDBUrl;
  }

  get optionsRemote() {
    return {
      auth: config.couchDBAuth,
    };
  }
}

export default new TodosStore();
