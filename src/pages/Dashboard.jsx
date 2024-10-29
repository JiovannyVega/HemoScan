import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="flex flex-row h-screen bg-background text-text">
      {/* Sidebar */}
      <div className="flex flex-col w-64 p-6 space-y-4 text-white bg-secondary">
        <h2 className="text-2xl font-bold text-center">HemoScan</h2>
        <ul className="mt-6 space-y-2">
          <li className="p-3 rounded-lg bg-primary">
            <Link to="/" className="block text-lg">Dashboard</Link>
          </li>
          <li className="p-3 rounded-lg hover:bg-hover">
            <Link to="/analytics" className="block text-lg">Analytics</Link>
          </li>
          <li className="p-3 rounded-lg hover:bg-hover">
            <Link to="/settings" className="block text-lg">Settings</Link>
          </li>
          <li className="p-3 rounded-lg hover:bg-hover">
            <Link to="/logout" className="block text-lg">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto bg-background-light">
        <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Recent Orders Card */}
          <div className="p-6 text-white rounded-lg shadow-md bg-primary">
            <h2 className="mb-4 text-xl font-semibold">Recent Orders</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">User</th>
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-secondary">
                  <td className="pt-2">
                    <img src="./assets/user1.png" alt="user" className="inline-block w-8 h-8 mr-2 rounded-full" /> John Doe
                  </td>
                  <td className="pt-2">01-10-2021</td>
                  <td className="pt-2"><span className="px-2 py-1 bg-green-500 rounded">Completed</span></td>
                </tr>
                <tr className="border-t border-secondary">
                  <td className="pt-2">
                    <img src="./assets/user2.png" alt="user" className="inline-block w-8 h-8 mr-2 rounded-full" /> Jane Smith
                  </td>
                  <td className="pt-2">02-10-2021</td>
                  <td className="pt-2"><span className="px-2 py-1 bg-yellow-500 rounded">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* To-Do List Card */}
          <div className="p-6 text-white rounded-lg shadow-md bg-primary">
            <h2 className="mb-4 text-xl font-semibold">To-Do List</h2>
            <ul className="space-y-2">
              <li className="flex justify-between p-3 rounded-md bg-secondary">
                <span>Review Results</span>
                <span className="text-gray-400">...</span>
              </li>
              <li className="flex justify-between p-3 rounded-md bg-secondary">
                <span>Upload New Data</span>
                <span className="text-gray-400">...</span>
              </li>
              <li className="flex justify-between p-3 rounded-md bg-secondary">
                <span>Run Analysis</span>
                <span className="text-gray-400">...</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
