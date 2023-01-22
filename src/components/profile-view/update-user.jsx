
import React from "react";

function UpdatedUser ({ handleSubmit, handleUpdate }) {
    return (
        <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
            <h2>Update your information</h2>
            <label>Username:</label>
            <input 
                type="text"
                name="Username"
                defaultValue={user.Username}
                onChange={e => handleUpdate(e)}
            />

            <label>Password:</label>
            <input 
                type="password"
                name="Password"
                defaultValue={user.Password}
                onChange={e => handleUpdate(e)}
            />

            <label>Email:</label>
            <input 
                type="email"
                name="Email"
                defaultValue={user.Email}
                onChange={e => handleUpdate(e.target.value)}
            />
            <button variant="primary" type="submit">
                Update 
            </button>
        </form>
    )
}

export default UpdateUser