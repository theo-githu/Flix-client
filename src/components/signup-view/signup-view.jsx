import { useState } from "react";

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password, 
            Email: email,
            Birthday: birthday
        };

        fetch("https://myflix-api-1234.herokuapp.com/signup", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful!");
            } else {
                alert("Signup failed");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="4"
                maxLength="10"
                />
            </label>
            <label>
                Password: 
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="4"
                maxLength="10"
                />
            </label>
            <label>
                Email: 
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                Birthday: 
                <input 
                type="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};