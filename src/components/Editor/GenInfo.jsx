export default function GenInfo() {
    //notes- change phone no to numbers only later
    //tbd- add option for multiple links later
    return (
        <div className="gen-info form-section">
            <h2>Personal Information</h2>
            <div className="entry">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="entry">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="entry">
                <label htmlFor="phone">Phone No.</label>
                <input type="text" name="phone" id="phone" />
            </div>
            <div className="entry">
                <label htmlFor="link">Link</label>
                <input type="text" name="link" id="link" />
            </div>
            <div className="entry">
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" />
            </div>
        </div>
    );
}
