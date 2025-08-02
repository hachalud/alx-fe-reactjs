import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers({ username, location, minRepos, page: 1 });
      setUsers(data.items);
      setHasMore(data.total_count > data.items.length);
    } catch (err) {
      setError("Looks like we can't find users matching those criteria.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);

    try {
      const data = await searchUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...data.items]);
      setHasMore(data.total_count > users.length + data.items.length);
    } catch (err) {
      setError("Error loading more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users.length > 0 && (
          <ul className="space-y-4 mt-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center space-x-4 bg-gray-100 p-4 rounded shadow"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full border"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        {hasMore && !loading && (
          <button
            onClick={loadMore}
            className="mt-6 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;