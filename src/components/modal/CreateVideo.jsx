import React, { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

const CreateVideo = () => {
    const data = useContext(DataContext);

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        views: "",
        profile: "", // Keep track of the profile image path
        upload: "",
        author: "",
        thumbnail: "", // Keep track of the thumbnail image path
    });

    const [imagePaths, setImagePaths] = useState([]); // Array to store image paths

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e, fileType) => {
        const file = e.target.files[0];

        // Determine whether it's a profile or thumbnail
        const fieldName = fileType === "profile" ? "profile" : "thumbnail";

        // Convert the image to a data URL
        const reader = new FileReader();
        reader.onload = (event) => {
            const dataUrl = event.target.result;
            // Store the data URL in the array
            setImagePaths([...imagePaths, dataUrl]);

            // Set the corresponding field in the formData
            setFormData({ ...formData, [fieldName]: dataUrl });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        data.push(formData);
        setFormData({
            id: "",
            title: "",
            views: "",
            profile: "",
            upload: "",
            author: "",
            thumbnail: "",
        });

        // Clear the image previews
        const profileImagePreview = document.getElementById(
            "profile-image-preview"
        );
        const thumbnailImagePreview = document.getElementById(
            "thumbnail-image-preview"
        );

        profileImagePreview.src = "";
        thumbnailImagePreview.src = "";
    };

    return (
        <div className="mt-24">
            <div>
                <input
                    type="file"
                    placeholder="profile"
                    className="border"
                    name="profile"
                    onChange={(e) => handleFileChange(e, "profile")}
                />
                <input
                    type="text"
                    placeholder="id"
                    className="border"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="title"
                    className="border"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="views"
                    className="border"
                    name="views"
                    value={formData.views}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="upload"
                    className="border"
                    name="upload"
                    value={formData.upload}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="author"
                    className="border"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                />
                <input
                    type="file"
                    placeholder="thumbnail"
                    className="border"
                    name="thumbnail"
                    onChange={(e) => handleFileChange(e, "thumbnail")}
                />
                <button className="border" onClick={handleSubmit}>
                    Submit
                </button>
            </div>

            <div>
                <img
                    id="profile-image-preview"
                    alt="Selected Profile"
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                />
            </div>
            <div>
                <img
                    id="thumbnail-image-preview"
                    alt="Selected Thumbnail"
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                />
            </div>
        </div>
    );
};

export default CreateVideo;
