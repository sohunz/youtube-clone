import React, { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import { Link } from "react-router-dom";

const CreateVideo = () => {
    const data = useContext(DataContext);

    const [formData, setFormData] = useState({
        id: Math.random(),
        title: "",
        views: "590K",
        // profile: "", // Keep track of the profile image path
        upload: "1 min ago",
        author: "",
        thumbnail: "", // Keep track of the thumbnail image path
        profile: "",
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
            fileType === "thumbnail"
                ? "thumbnail"
                : fileType === "banner"
                ? "banner"
                : "profile";

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
            // profile: "",
            upload: "",
            author: "",
            thumbnail: "",
            profile: "",
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
        <div className="w-full h-[87vh] bg-gray-100">
            <div className="max-w-[1440px] mx-auto mt-24 flex justify-center">
                <div className="w-[50%] mt-12 border flex flex-col justify-center p-10 gap-3 rounded-2xl bg-white">
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

                    <div className="grid grid-cols-2 gap-5 mb-3">
                        <div className="grid">
                            <input
                                type="text"
                                placeholder="Title"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                            <p className="pt-2 text-gray-400 text-sm">
                                Video Title
                            </p>
                        </div>

                        <div className="grid">
                            <input
                                type="text"
                                placeholder="Author"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="author"
                                value={formData.author}
                                onChange={handleInputChange}
                            />
                            <p className="pt-2 text-gray-400 text-sm">
                                Channel Name
                            </p>
                        </div>
                    </div>

                    <div className="grid">
                        <input
                            type="text"
                            placeholder="YouTube Link"
                            className="border p-2 rounded-md outline-none pl-3"
                            name="src"
                            value={formData.src}
                            onChange={handleInputChange}
                        />
                        <p className="pt-2 text-gray-400 text-sm">
                            Get text by embed link from youtube
                        </p>
                    </div>

                    <div className="flex flex-row justify-between mt-10 mb-3">
                        <div>
                            <input
                                type="file"
                                placeholder="Channel Profile"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="profile"
                                onChange={(e) => handleFileChange(e, "profile")}
                            />
                            <p className="pt-2 text-gray-400 text-sm">
                                Channel Profile
                            </p>
                        </div>

                        <div>
                            <input
                                type="file"
                                placeholder="banner"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="banner"
                                onChange={(e) => handleFileChange(e, "banner")}
                            />
                            <p className="pt-2 text-gray-400 text-sm">
                                Channel Banner
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2 justify-between">
                        {/* <div>
                            <input
                                type="file"
                                placeholder="Profile"
                                className="border p-2 rounded-md outline-none pl-3"
                                name="profile"
                                onChange={(e) => handleFileChange(e, "profile")}
                            />
                            <p className="pt-2 text-gray-400 text-sm">
                                Small Profile
                            </p>
                        </div> */}
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
                            <p className="pt-2 text-gray-400 text-sm">
                                Video Thumbnail
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/"
                        className="w-[150px] mx-auto border py-[8px] mt-5 rounded-md  bg-blue-700 text-white text-lg flex justify-center items-center"
                        onClick={handleSubmit}
                    >
                        Create
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateVideo;
