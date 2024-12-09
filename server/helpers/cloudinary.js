const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dowbqbuzi",
  api_key: "443856835866291",
  api_secret: "dXON5SQhPnEsKuu7SJ46MAHFllQ",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "TC-X28",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
