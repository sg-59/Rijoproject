require("dotenv").config();

const cloudinary = require("cloudinary").v2;

// console.log(cloudinary.config().cloud_name);
// console.log(cloudinary.config().api_key);
// console.log(cloudinary.config().api_secret);

//  pdf also treat as image {resource_type: "image"}
// video {resource_type: "video"
// audio {resource_type: "audio"
// raw {resource_type: "raw"
// auto {resource_type: "auto"

// cloudinary.uploader
//   .upload("./uploads/1718984197582.png", {
//     folder: "images/rijo", // folder name
//     use_filename: true, // if you want to keep the same name
//     unique_filename: true, // if you want to keep the same name
//     // public_id:"rijoa" // public_id is the name of the image
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//    list all assets
// cloudinary.api
//   .resources()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//    list all assets with folder name images/rijo
// cloudinary.api.resources( { type: "upload", prefix: "images/rijo" })
// .then((result) => console.log(result))
// .catch((error) => console.error(error));

// rename the image
// cloudinary.uploader.rename("old_public_id", "new_public_id", {override:true <this is optional>}).then((result) => console.log(result)).catch((error) => console.error(error));

// delete the image
// cloudinary.uploader.destroy("public_id", {invalidate:true <this is optional>}).then((result) => console.log(result)).catch((error) => console.error(error));

// delete the folder
// cloudinary.api.delete_folder("folder_name").then((result) => console.log(result)).catch((error) => console.error(error));

// delete the folder with all the assets
// cloudinary.api.delete_resources_by_prefix("folder_name").then((result) => console.log(result)).catch((error) => console.error(error));

// tag the image
// cloudinary.uploader
//   .upload("./uploads/1718985005756.png", {
//     tags: "user_profile",
//     folder: "user_profile",
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// get the image by tag
// cloudinary.api.resources_by_tag("user_profile").then((result) => console.log(result)).catch((error) => console.error(error));

// delete the tag 
//cloudinary.uploader.remove_tag("user_profile", "public_id").then((result) => console.log(result)).catch((error) => console.error(error));
