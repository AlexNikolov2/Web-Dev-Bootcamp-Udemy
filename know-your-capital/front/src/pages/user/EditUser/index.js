import { useState } from "react";

export const EditUser = ({ user }) => {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState(user.image || null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("image", image);
    };

    return (
        <section className="edit-user-wrap">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="image">
                    Image:
                    <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </section>
    );
}