import { rootReducer } from '@/reducers';
import storage from '@/storage';
import { legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['nav', 'navigation'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
