export default function PracExp() {
    return (
        <>
            <div className="entry">
                <label htmlFor="prac-title">Title/Designation</label>
                <input 
                    type="text"
                    name = "prac-title"
                    id="prac-title"
                />
            </div>
            <div className="entry">
                <label htmlFor="company">Company</label>
                <input 
                    type="text"
                    name = "company"
                    id="company"
                />
            </div>
            <div className="entry">
                <label htmlFor="start-date-prac">Start Date</label>
                <input 
                    type="date"
                    name = "start-date-prac"
                    id="start-date-prac"
                />
            </div>
            <div className="entry">
                <label htmlFor="end-date-prac">End Date</label>
                <input 
                    type="date"
                    name = "end-date-prac"
                    id="end-date-prac"
                />
            </div>
        </>
    );
}
