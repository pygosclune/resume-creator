import '../styles/Cv.css'

export default function Cv({
    fullName, eMail, phoneNumber, schoolName, titleOfStudy, startOfStudy, 
    endOfStudy, companyName, positionTitle, startOfWork, endOfWork}) {
    return (
        <>
            <div className='personal-info'>
                <h1>{fullName}</h1>
                <div className='contact-info'>
                    <p>{eMail}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div>
                <div className='education-info info-section'>
                    <h3 className='header-text'>Education</h3>
                    <p>{schoolName}</p>
                    <p>{titleOfStudy}</p>
                    <p>{startOfStudy} - {endOfStudy}</p>
                </div>
                <div className='work-info info-section'>
                <h3 className='header-text'>Work experience</h3>
                    <p>{companyName}</p>
                    <p>{positionTitle}</p>
                    <p>{startOfWork} - {endOfWork}</p>
                </div>
            </div>    
        </>
    )
}