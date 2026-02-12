function UserInfo() {
  const userEmail = localStorage.getItem("userEmail") || "Guest User";

  return (
    <div className="bg-white shadow rounded-xl p-6 m-6">
      <h2 className="text-xl font-bold mb-2">User Profile</h2>
      <p className="text-gray-600">
        Logged in as:
      </p>
      <p className="font-semibold text-blue-600">
        {userEmail}
      </p>
    </div>
  );
}

export default UserInfo;
