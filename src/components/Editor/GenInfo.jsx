export default function GenInfo() {
    //notes- change phone no to numbers only later
    //tbd- add option for multiple links later
    return (
        <div className="gen-info">
            <div className="entry">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="entry">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="entry">
                <label for="phone">Phone No.</label>
                <input type="text" name="phone" id="phone" />
            </div>
            <div className="entry">
                <label for="link">Link</label>
                <input type="text" name="link" id="link" />
            </div>
            <div className="entry">
                <label for="location">Location</label>
                <input type="text" name="location" id="location" />
            </div>
        </div>
    );
}
