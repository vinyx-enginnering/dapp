import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Dashboard from "./screens/Dashboard.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import FundWalletScreen from "./screens/FundWalletScreen.js";
import SettingScreen from "./screens/SettingScreen.js";
import UpgradeAccount from "./screens/UpgradeAccount.js";
import PrintVoucher from "./screens/PrintVoucher.js";
import Glo500Voucher from "./voucer/Glo500Voucher.js";
import Glo100Voucher from "./voucer/Glo100Voucher.js";
import Glo200Voucher from "./voucer/Glo200Voucher.js";
import Airtel100Voucher from "./voucer/Airtel100Voucher.js";
import Airtel200Voucher from "./voucer/Airtel200Voucher.js";
import Airtel500Voucher from "./voucer/Airtel500Voucher.js";
import Mtn100Voucher from "./voucer/Mtn100Voucher.js";
import Mtn200Voucher from "./voucer/Mtn200Voucher.js";
import Mtn500Voucher from "./voucer/Mtn500Voucher.js";
import Etisalat100Voucher from "./voucer/Etisalat100Voucher.js";
import Etisalat200Voucher from "./voucer/Etisalat200Voucher.js";
import Etisalat500Voucher from "./voucer/Eisalat500Voucher.js";
import PhoneBook from "./views/PhoneBook.js";
import TransactionDetails from "./views/TransactionDetails.js";
import PrivacyPolicy from "./screens/PrivacyPolicy.js";
import ContactUs from "./screens/ContactUs.js";
import CookiePolicy from "./screens/CookiePolicy.js";
import ProductFeature from "./screens/ProductFeature.js";
import Blog from "./screens/Blog.js";
import Messagingetails from "./screens/Messagingetails.js";
import FAQ from "./screens/FAQ.js";
import VTPassAirtime from "./views/VTPassAirtime.js";
import VTPassData from "./views/VTPassData.js";
import SmileInternet from "./views/SmileInternet.js";
import SpectranetInternet from "./views/SpectranetInternet.js";
import EditProfile from "./screens/EditProfile.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeScreen />} />
          <Route path="/login" index element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fund-wallet" element={<FundWalletScreen />} />

          <Route path="/upgrade" element={<UpgradeAccount />} />
          <Route path="/phonebook" element={<PhoneBook />} />
          <Route path="/airtime" element={<VTPassAirtime />} />
          <Route path="/dataplan" element={<VTPassData />} />
          <Route path="/smile" element={<SmileInternet />} />
          <Route path="spectranet" element={<SpectranetInternet />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/settings" element={<EditProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feature" element={<ProductFeature />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/messaging" element={<Messagingetails />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="/transaction" element={<TransactionDetails />} />
        </Route>
        <Route path="/printing/:network" element={<PrintVoucher />} />
        <Route path="/print/glo-500" element={<Glo500Voucher />} />
        <Route path="/print/glo-100" element={<Glo100Voucher />} />
        <Route path="/print/glo-200" element={<Glo200Voucher />} />

        <Route path="/print/airtel-100" element={<Airtel100Voucher />} />
        <Route path="/print/airtel-200" element={<Airtel200Voucher />} />
        <Route path="/print/airtel-500" element={<Airtel500Voucher />} />

        <Route path="/print/mtn-100" element={<Mtn100Voucher />} />
        <Route path="/print/mtn-200" element={<Mtn200Voucher />} />
        <Route path="/print/mtn-500" element={<Mtn500Voucher />} />

        <Route path="/print/eti-100" element={<Etisalat100Voucher />} />
        <Route path="/print/eti-200" element={<Etisalat200Voucher />} />
        <Route path="/print/eti-500" element={<Etisalat500Voucher />} />
      </Routes>
    </Router>
  );
};

export default App;
