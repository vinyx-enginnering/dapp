import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userEditReducer, userGetReducer, userLoginReducer, userRegisterReducer } from "./reducers/user";
import { fundCustomerWallet, getCustomerWallet } from "./reducers/wallet";
import {
  getCustomerTransactions,
  purchaseVTUAirtime,
  fetchDataPlans,
  purchaseDataPlan,
  sendBulkSms,
  generateVoucher,
  purchaseBulkPin,
} from "./reducers/transaction";
import {
  deleteAllPin,
  get9mobile,
  getairtel,
  getAllPin,
  getglo,
  getmtn,
  getVoucher,
  uploadVoucher,
} from "./reducers/card";
import {
  createPhonebookReducer,
  fetchPhonebookReducer,
  removePhonebookReducer,
} from "./reducers/phonebook";
import { NewsletterReducer, sendMessageReducer } from "./reducers/message";
import {
  DstvPlans,
  GotvPlans,
  subscribeDstv,
  subscribeGotv,
  verifyDstv,
  verifyGotv,
} from "./reducers/tv_transaction";
import { queryVTDataPlans, VTAirtime, VTData } from "./reducers/topup_transaction";
import { SmilePlans, SpectranetPlans, subscribeSmile, subscribeSpectranet, verifySmile } from "./reducers/internet_transaction";

const reducer = combineReducers({
  // user reducers list
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userEdit: userEditReducer,
  getUser: userGetReducer,

  // wallet reducers list
  getWallet: getCustomerWallet,
  fundWallet: fundCustomerWallet,

  // transactions request reducers list
  getTransactions: getCustomerTransactions,
  purchaseVTU: purchaseVTUAirtime,
  purchaseBulkPin: purchaseBulkPin,

  // data plans reducers list
  getDataPlans: fetchDataPlans,
  purchasePlan: purchaseDataPlan,

  // bulk sms stuff
  sendBulkSms: sendBulkSms,

  // uploading and printing card reducers list
  uploadVoucher: uploadVoucher,
  getVoucher: getVoucher,
  getAllPin: getAllPin,
  deleteAllPin: deleteAllPin,

  // get all network voucher
  getmtn: getmtn,
  getairtel: getairtel,
  getglo: getglo,
  get9mobile: get9mobile,

  // epin voucher
  generateVoucher: generateVoucher,

  // phonebook reducer list
  createPhonebook: createPhonebookReducer,
  fetchPhonebooks: fetchPhonebookReducer,
  removePhonebook: removePhonebookReducer,
  // send message
  sendMessage: sendMessageReducer,
  Newsletter: NewsletterReducer,

  // gotv reducer list
  verifyGotv: verifyGotv,
  GotvPlans: GotvPlans,
  subscribeGotv: subscribeGotv,



  // dstv reducer list
  verifyDstv: verifyDstv,
  DstvPlans: DstvPlans,
  subscribeDstv: subscribeDstv,

  // VTPASS TOPUP
  VTAirtime: VTAirtime,
  queryVTDataPlans: queryVTDataPlans,
  VTData: VTData,

  // smile reducer list
  verifySmile: verifySmile,
  SmilePlans: SmilePlans,
  subscribeSmile: subscribeSmile,
  // spectranet data
 
  SpectranetPlans: SpectranetPlans,
  subscribeSpectranet: subscribeSpectranet,

});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
