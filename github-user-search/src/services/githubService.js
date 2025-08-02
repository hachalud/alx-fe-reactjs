import axios from "axios";

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const fullUrl =
    "https://api.github.com/search/users?q=" + encodeURIComponent(query.trim());

  const response = await axios.get(fullUrl, {
    params: {
      page,
      per_page: 10,
    },
  });

  return response.data;
};