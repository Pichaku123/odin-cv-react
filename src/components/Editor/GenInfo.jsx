export default function GenInfo({ cvData, setCvData }) {
    //notes- change phone no to numbers only later
    //tbd- add option for multiple links later

    return (
        <div className="gen-info form-section">
            <h2>Personal Information</h2>
            <div className="entry">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={cvData.generalInfo.name || ""}
                    onChange={(e) =>
                        setCvData((prev) => ({
                            ...prev,
                            generalInfo: {
                                ...prev.generalInfo,
                                name: e.target.value,
                            },
                        }))
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={cvData.generalInfo.email || ""}
                    onChange={(e) =>
                        setCvData((prev) => ({
                            ...prev,
                            generalInfo: {
                                ...prev.generalInfo,
                                email: e.target.value,
                            },
                        }))
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor="phone">Phone No.</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={cvData.generalInfo.phone || ""}
                    onChange={(e) =>
                        setCvData((prev) => ({
                            ...prev,
                            generalInfo: {
                                ...prev.generalInfo,
                                phone: e.target.value,
                            },
                        }))
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor="link">Link</label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    value={cvData.generalInfo.link || ""}
                    onChange={(e) =>
                        setCvData((prev) => ({
                            ...prev,
                            generalInfo: {
                                ...prev.generalInfo,
                                link: e.target.value,
                            },
                        }))
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={cvData.generalInfo.location || ""}
                    onChange={(e) =>
                        setCvData((prev) => ({
                            ...prev,
                            generalInfo: {
                                ...prev.generalInfo,
                                location: e.target.value,
                            },
                        }))
                    }
                />
            </div>
        </div>
    );
}
