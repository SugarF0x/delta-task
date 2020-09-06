import { useStaticRendering } from 'mobx-react';

import UsersStore from './users';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore() {
  if (isServer) {
    return {
      usersStore: new UsersStore()
    };
  }
  if (store === null) {
    store = {
      usersStore: new UsersStore()
    };
  }

  return store;
}
