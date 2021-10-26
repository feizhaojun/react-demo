import { Dispatcher  } from "flux";
import Store from './Store';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      Store.addNewItemHandler(action.text);
      // Store.emitChange();
      break;
    default:
      // no op
  }
});

export default AppDispatcher;