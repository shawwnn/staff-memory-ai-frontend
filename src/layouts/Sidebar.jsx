import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/members");
        setMembers(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  // const formatDate = (dateString) => {
  //   if (!dateString) return "No Date";
    
  //   const date = new Date(dateString);
    
  //   return date.toLocaleDateString("en-US", {
  //     month: "short",
  //     day: "numeric",
  //     year: "numeric",
  //     timeZone: "UTC"  // Force UTC time
  //   }).replace(",", "");
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
    const day = date.getUTCDate(); // Use UTC date to avoid timezone issues
    return `${month} ${day}`;
  };
  
  
  
  const groupMembersByDate = (members) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to start of today
    
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Yesterday
    
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7); // 7 days ago
    
    const fifteenDaysAgo = new Date(today);
    fifteenDaysAgo.setDate(today.getDate() - 15); // 15 days ago
    
    const groups = {
      today: [],
      yesterday: [],
      previous7Days: [],
      previous15Days: [],
    };
    
    members.forEach((member) => {
      const updatedDate = new Date(member.updatedAt);
      updatedDate.setHours(0, 0, 0, 0); // Reset time for accurate comparison
      
      if (updatedDate.getTime() === today.getTime()) {
        groups.today.push(member); // If updatedToday
      } else if (updatedDate.getTime() === yesterday.getTime()) {
        groups.yesterday.push(member); // If updatedYesterday
      } else if (updatedDate > sevenDaysAgo && updatedDate <= yesterday) {
        groups.previous7Days.push(member); // If updated between 2-7 days ago
      } else if (updatedDate <= sevenDaysAgo && updatedDate > fifteenDaysAgo) {
        groups.previous15Days.push(member); // If updated between 8-15 days ago
      }
    });
    
    // Logging to check the groups and members in them
    console.log(groups); 
  
    return groups;
  };
  
  



  
  const groupedMembers = groupMembersByDate(members);

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4 shadow-soft border-r border-border-dark flex flex-col">
      {/* Sidebar Header */}
      <h2 className="text-xl font-semibold mb-6 tracking-wide">Team Insights</h2>

      {/* Main Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Main</h3>
        <nav className="space-y-2">
          <Link
            to="/chat"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition"
          >
            💬 <span>Chat</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition"
          >
            📊 <span>Dashboard</span>
          </Link>
        </nav>
      </div>

      {/* AI Chat Dialog Section */}
      <div className="space-y-4 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">AI Chat Dialog</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-200">
            {/* <img
              src="/assets/pen-to-square.svg"
              alt="Pencil Icon"
              className="w-5 h-5"
            /> */}
          </button>
        </div>

        <nav className="space-y-2">
          {Object.entries(groupedMembers).map(([key, group]) => (
            group.length > 0 && (
              <div key={key}>
                <h2 className="text-gray-500 text-sm font-semibold uppercase">
                  {key === "today" && "Today"}
                  {key === "yesterday" && "Yesterday"}
                  {key === "previous7Days" && "Previous 7 Days"}
                  {key === "previous15Days" && "Previous 15 Days"}
                </h2>
                <div className="space-y-2">
                  {group.map((member, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary hover:text-gray-300 transition"
                    >
                      {member.fullName} - {formatDate(member.updatedAt)}
                    </button>
                  ))}
                </div>
              </div>
            )
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
