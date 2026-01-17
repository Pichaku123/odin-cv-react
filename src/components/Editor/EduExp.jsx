export default function EduExp() {
    return (
        <>
            <label for="school">School/University</label>
            <input 
                type = "text" 
                name = "school" 
                id = "school"
            />
            <label for="degree">Degree</label>
            <input 
                type = "text" 
                name = "degree" 
                id = "degree"
            />
            <label for="start-date">Start Date</label>
            <input 
                type = "date" 
                name = "start-date" 
                id = "start-date"
            />
            <label for="end-date">End Date</label>
            <input 
                type = "date" 
                name = "end-date" 
                id = "end-date"
            />
        </>
    );
}
