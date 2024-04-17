import { cloudinaryVideo } from "../../config/env";

export const uploadImage= async (file, type) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "fiverrFol");
      formData.append("resource_type", type);
      formData.append("cloud_name", "itsmearyan");
  
      const response = await fetch(`${cloudinaryVideo}${type}/upload`, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      return null;
    }
  };