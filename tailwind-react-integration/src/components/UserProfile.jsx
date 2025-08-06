import React from "react";

function UserProfile() {
  return (
    <div
      class="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-cente"
      className="user-profile"
    >
      <img
        class="rounded-full w-36 h-36 md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 class="text-lg sm:text-lg md:text-xl text-blue-800 my-4 font-semibold">
        John Doe
      </h1>
      <p class="text-sm sm:text-sm md:text-base text-gray-600 px-2">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
