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
export const downloadFile = async (id) => {
  try {
    const response = await api.get(`/files/download/${id}`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");

    link.href = url;

    link.download = "download";

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error(error);
    alert("Download Failed");
  }
};

// Delete File
export const deleteFile = async (id) => {
  const response = await api.delete(`/files/${id}`);

  return response.data;
};