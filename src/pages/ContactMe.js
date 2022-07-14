import React from 'react';

const ContactMe = () => {
    return (
        <form className='contactme text-primary'>
            <div className="form-group">
                <label for="nameinput">Name</label>
                <input type="text" className="form-control" id="nameinput" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
                <label for="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
            <label for="comments">Comments</label>
            <textarea className="form-control" id="comments" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default ContactMe