import React, { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

const CreateVideo = () => {
    const data = useContext(DataContext);

    const [formData, setFormData] = useState({
        id: Math.random(),
        title: "",
        views: "590K",
        profile: "", // Keep track of the profile image path
        upload: "1 min ago",
        author: "",
        thumbnail: "", // Keep track of the thumbnail image path
        channelProfile: "",
        subscribers: "995K",
        description:
            "Welcome to the official YouTube channel. Here you will find news about product launches, tutorials, and other great content. Apple revolutionized personal technology with the introduction of the Macintosh in 1984. Today Apple continues to be a global leader in innovation with products like iPhone, iPad, Mac, Apple Watch and Apple Vision Pro. Our six software platforms (iOS, iPadOS, macOS, watchOS, tvOS, and visionOS) provide seamless experiences across Apple devices. Breakthrough services include the App Store, Apple Music, Apple Pay, and iCloud. And Apple keeps pursuing innovation with products like HomePod, Apple Fitness+, and Apple Card. Apple’s more than 160,000 employees are dedicated to making the best products on earth, and to leaving the world better than we found",
        banner: "",
        username: "youtube",
        src: "",
        link: "youtube.com",
        linkCount: "4",
        videos: "225",
    });

    const [imagePaths, setImagePaths] = useState([]); // Array to store image paths

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e, fileType) => {
        const file = e.target.files[0];

        // Determine whether it's a profile or thumbnail
        const fieldName =
            fileType === "profile"
                ? "profile"
                : fileType === "thumbnail"
                ? "thumbnail"
                : fileType === "banner"
                ? "banner"
                : "channelProfile";

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
            channelProfile: "",
            subscribers: "",
            description: "",
            banner: "",
            username: "",
            src: "",
            link: "",
            linkCount: "",
            videos: "",
        });
    };

    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto mt-24 flex justify-center">
                <div className="w-[50%] border flex flex-col justify-center p-10 gap-3 rounded-xl">
                    <input
                        type="text"
                        placeholder="Id"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="username"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="subscribers"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="subscribers"
                        value={formData.subscribers}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="description"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="link"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="link"
                        value={formData.link}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="linkCount"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="linkCount"
                        value={formData.linkCount}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="videos"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="videos"
                        value={formData.videos}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Views"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="views"
                        value={formData.views}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Upload"
                        className="border p-2 rounded-md outline-none pl-3 hidden"
                        name="upload"
                        value={formData.upload}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="border p-2 rounded-md outline-none pl-3"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />

                    <input
                        type="text"
                        placeholder="Author"
                        className="border p-2 rounded-md outline-none pl-3"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                    />
                    <input
                        type="file"
                        placeholder="Channel Profile"
                        className="border p-2 rounded-md outline-none pl-3"
                        name="channelProfile"
                        onChange={(e) => handleFileChange(e, "channelProfile")}
                    />

                    <input
                        type="file"
                        placeholder="banner"
                        className="border p-2 rounded-md outline-none pl-3"
                        name="banner"
                        onChange={(e) => handleFileChange(e, "banner")}
                    />

                    <input
                        type="text"
                        placeholder="src"
                        className="border p-2 rounded-md outline-none pl-3"
                        name="src"
                        value={formData.src}
                        onChange={handleInputChange}
                    />

                    <div className="flex flex-row gap-2 justify-between">
                        <div>
                            <input
                                type="file"
                                placeholder="Profile"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="profile"
                                onChange={(e) => handleFileChange(e, "profile")}
                            />
                            <p className="pt-1 text-gray-500">Choose Profile</p>
                        </div>
                        <div>
                            <input
                                type="file"
                                placeholder="Thumbnail"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="thumbnail"
                                onChange={(e) =>
                                    handleFileChange(e, "thumbnail")
                                }
                            />
                            <p className="pt-1 text-gray-500">
                                Choose Thumbnail
                            </p>
                        </div>
                    </div>
                    <button
                        className="border p-2 mt-5 rounded-md outline-none pl-3 bg-gray-100"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateVideo;
