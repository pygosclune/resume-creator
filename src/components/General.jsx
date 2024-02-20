import '../styles/General.css'

export default function General({generalData, setGeneralData}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneralData({
          ...generalData,
          [name]: value,
        });
    };

    return (
        //note that every input needs matching name to defined state
        <>
            <form className="generalInfo">
                <h2>Personal information</h2>
                <label for="full-name"><span>Full name</span></label>
                <input type="text"
                id="full-name"
                name="fullName"
                placeholder="Full name"
                value={generalData.fullName}
                onChange={handleChange}/>

                <label for="email"><span>E-mail</span></label>
                <input type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={generalData.email}
                onChange={handleChange}/>

                <label for="phone-number"><span>Phone number</span></label>
                <input type="tel"
                id="phone-number"
                name="phoneNumber"
                placeholder="Phone number"
                value={generalData.phoneNumber}
                onChange={handleChange}/>
            </form>
        </>
    )
}