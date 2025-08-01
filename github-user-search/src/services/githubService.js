import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: username },
    });
    return response.data;
  } catch (error) {
    console.error("GitHub user search failed:", error.message);
    throw error;
  }
};
if (!navigator.onLine) {
  alert("You are offline. Please check your internet connection.");
} else {
  searchUsers("username");
}

