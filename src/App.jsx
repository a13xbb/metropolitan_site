import {
  BusinessSupport,
  Header,
  LegalServices,
  MetropolitanConsulting,
  ConsultationForm,
} from "./components";
import { RequestForm } from "./components/UI";

import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <LegalServices />
      <MetropolitanConsulting />
      <BusinessSupport />
      <ConsultationForm />
      <main style={{ backgroundColor: "white", height: "3000px" }}></main>
    </>
  );
}

export default App;
