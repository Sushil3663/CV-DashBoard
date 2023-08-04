import { colorContext, useMode } from "./Theme";
import { ThemeProvider } from "@mui/material";
import TopBar from "./visual/global/TopBar";
import SideBar from "./visual/global/SideBar";
import { Routes, Route } from 'react-router-dom';
import Dashboards from './visual/dashboard/Dashboards.jsx'
import Applicants from "./visual/applicants/Applicants";
import Candidate from "./visual/contacts/Contact";
import CreateForm from "./visual/createform/CreateForm";
import Calander from "./visual/calander/Calander";
import OfferLetter from "./visual/offerLetter/OfferLetter";
import Bar from "./visual/barChart/Bar";
import Pie from "./visual/pieChart/Pie";
import Line from "./visual/lineChart/Line";
import ApplicantDetails from "./visual/applicants/ApplicantsDetail";
import CandidateDetail from "./visual/contacts/CandidateDetail";
import Letter from "./visual/offerLetter/Letter";
import JobDomain from "./visual/jobs/JobDomain";
import JobLevel from "./visual/jobs/JobLevel";
import JobApplicationStatus from "./visual/jobs/JobApplicationStatus";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">

          <SideBar />

          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboards />} />

              <Route path="/applicants" element={<Applicants />} />
              <Route path="/applicants/:id" element={<ApplicantDetails />} />

              <Route path="/contact" element={<Candidate />} />
              <Route path="/contact/:id" element={<CandidateDetail />} />

              <Route path="/form" element={<CreateForm />} />
              <Route path="/assesment" element={<h1>Assesment</h1>} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calander" element={<Calander />} />
              <Route path="/offer" element={<OfferLetter />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/domain" element = {<JobDomain />} />
              <Route path="/level" element = {<JobLevel />} />
              <Route path="/status" element = {<JobApplicationStatus />} />
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorContext.Provider>


  );
}

export default App;
