import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        width: "100%",
        maxWidth: "400px",
        fontSize: "16px",
        marginBottom: "16px",
      }}
    />
  );
};

export default SearchBar;
