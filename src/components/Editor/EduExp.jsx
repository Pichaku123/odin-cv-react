export default function EduExp() {
    return (
        <>
            <div className="entry">
                <label htmlFor="school">School/University</label>
                <input
                    type = "text"
                    name = "school"
                    id = "school"
                />
            </div>
            <div className="entry">
                <label htmlFor="degree">Degree</label>
                <input
                    type = "text"
                    name = "degree"
                    id = "degree"
                />
            </div>
            <div className="entry">
                <label htmlFor="start-date-edu">Start Date</label>
                <input
                    type = "date"
                    name = "start-date-edu"
                    id = "start-date-edu"
                />
            </div>
            <div className="entry">
                <label htmlFor="end-date-edu">End Date</label>
                <input
                    type = "date"
                    name = "end-date-edu"
                    id = "end-date-edu"
                />
            </div>
        </>
    );
}
