// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Faq from "./components/pages/faq/Faq";
import Strategy from "./components/pages/strategy/Strategy";
import Contact from "./components/pages/contact/Contact";
import Sponsor from "./components/pages/sponsor/Sponsor";
import Donate from "./components/pages/donate/Donate";
import PageNotFound from "./components/partials/PageNotFound";
import ChildrenInfo from "./components/pages/sponsor/ChildrenInfo";
import FeedingProgram from "./components/pages/donate/FeedingProgram";
import GeneralDonation from "./components/pages/donate/GeneralDonation";
import ChildrenSponsor from "./components/pages/donate/ChildrenSponsor";
import Login from "./components/pages/access/LogIn";
import ForgotPass from "./components/pages/access/ForgotPass";
import CreateAcc from "./components/pages/access/CreateAcc";
import ChildSponsor from "./components/pages/childcard/ChildSponsor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/childcard" element={<ChildSponsor />} /> {/* ✅ ROUTE */}
        <Route path="/donate" element={<Donate />} />
        {/* <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/children-info/:id" element={<ChildrenInfo />} />
        <Route path="/donate/children-sponsorship" element={<ChildrenSponsor />} /> */}
        <Route path="/donate/feeding-program" element={<FeedingProgram />} />
        <Route path="/donate/general-donation" element={<GeneralDonation />} />
        <Route path="/access" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/register" element={<CreateAcc />} />
      </Routes>
    </Router>
  );
}

export default App;
