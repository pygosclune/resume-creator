import '../styles/WorkInfo.css'

export default function WorkInfo({workData, setWorkData}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkData({
          ...workData,
          [name]: value,
        });
    };

    return (
        <form className="workInfo">
            <h2>Work experience</h2>
            <input type="text"
                name="companyName"
                placeholder="Company name"
                value={workData.companyName}
                onChange={handleChange}
            />
            <input type="text"
                name="positionTitle"
                placeholder="Position title"
                value={workData.positionTitle}
                onChange={handleChange}
            />
            <input type="text"
                name="startOfWork"
                value={workData.startOfWork}
                onChange={handleChange}
            />
            <input type="text"
                name="endOfWork"
                value={workData.endOfWork}
                onChange={handleChange}
            />
        </form>
    )
}