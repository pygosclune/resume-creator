import '../styles/EducationInfo.css'

export default function EducationInfo({educationData, setEducationData}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationData({
          ...educationData,
          [name]: value,
        });
    };
    return (
        <>
            <form className="educationInfo" onSubmit={(e) => e.preventDefault()}>
                <h2>Education</h2>
                <input type="text"
                name="schoolName"
                placeholder="School name"
                value={educationData.schoolName}
                onChange={handleChange}/>

                <input type="text"
                name="titleOfStudy"
                placeholder="Title of study"
                value={educationData.titleOfStudy}
                onChange={handleChange}/>

                <input type="text"
                name="startOfStudy"
                value={educationData.startOfStudy}
                onChange={handleChange}/>

                <input type="text"
                name="endOfStudy"
                value={educationData.endOfStudy}
                onChange={handleChange}/>
            </form>
        </>
    )
}