import { Link } from "react-router-dom";

const Sidebar = () => {
  // Simulating random users for demonstration
  const users = ["John", "Jane", 
		// "Alice", "Bob", "Charlie"
	];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4 shadow-soft border-r border-border-dark flex flex-col">
      {/* Sidebar Header */}
      <h2 className="text-xl font-semibold mb-6 tracking-wide">Team Insights</h2>

      {/* Main Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Main</h3>
        <nav className="space-y-2">
          <Link to="/chat" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition">
            💬 <span>Chat</span>
          </Link>
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition">
            📊 <span>Dashboard</span>
          </Link>
        </nav>
      </div>

      <div className="space-y-4 mt-6">
      	{/* AI Chat Dialog Section */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">AI Chat Dialog</h3> 
          {/* Button with box and pencil icon */}
          {/* <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">            
          </button> */}

					<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-200">
            <img src="../assets/pen-to-square.svg" alt="Pencil Icon" className="w-5 h-5" />
          </button>

        </div>
        <nav className="space-y-2">
          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition">
              Today
            </button>
            <div className="pl-6 space-y-1">
              {users.map((user, index) => (
                <p key={index} className="px-4 py-1 text-sm text-muted hover:text-white">
                  {user}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition">
              Yesterday
            </button>
            <div className="pl-6 space-y-1">
              {users.map((user, index) => (
                <p key={index} className="px-4 py-1 text-sm text-muted hover:text-white">
                  {user}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition">
              Previous 7 Days
            </button>
            <div className="pl-6 space-y-1">
              {users.map((user, index) => (
                <p key={index} className="px-4 py-1 text-sm text-muted hover:text-white">
                  {user}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition">
              Previous 15 Days
            </button>
            <div className="pl-6 space-y-1">
              {users.map((user, index) => (
                <p key={index} className="px-4 py-1 text-sm text-muted hover:text-white">
                  {user}
                </p>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
