import api from "./api";

// Upload File
export const uploadFile = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Get All Files
export const getFiles = async () => {
  const response = await api.get("/files");

  return response.data;
};
// Download File
export const downloadFile = (id) => {
  window.open(
    `http://localhost:5000/api/files/download/${id}`,
    "_blank"
  );
};
// Delete File
export const deleteFile = async (id) => {
  const response = await api.delete(`/files/${id}`);
  return response.data;
};