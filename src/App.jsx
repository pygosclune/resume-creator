import { useState } from 'react'
import './styles/App.css'
import General from './components/General'
import EducationInfo from './components/EducationInfo';
import WorkInfo from './components/WorkInfo';
import Cv from "./components/Cv";
import data from './assets/data';

function App() {
  const [generalData, setGeneralData] = useState(data.generalData);
  const [educationData, setEducationData] = useState(data.educationData);
  const [workData, setWorkData] = useState(data.workData);

  return (
    <div className='main'>

        <div className='inputsDiv'>
          <General generalData={generalData} setGeneralData={setGeneralData}/>
          <EducationInfo educationData={educationData} setEducationData={setEducationData}/>
          <WorkInfo workData={workData} setWorkData={setWorkData}/>
        </div>
        
        <div className='cvDiv'>
          <Cv
            fullName={generalData.fullName}
            eMail={generalData.email}
            phoneNumber={generalData.phoneNumber}
            schoolName={educationData.schoolName}
            titleOfStudy={educationData.titleOfStudy}
            startOfStudy={educationData.startOfStudy}
            endOfStudy={educationData.endOfStudy}
            companyName={workData.companyName}
            positionTitle={workData.positionTitle}
            startOfWork={workData.startOfWork}
            endOfWork={workData.endOfWork}
          />
        </div>
        
    </div>
  )
}

export default App
