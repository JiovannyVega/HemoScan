import React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div class="container">
                <div class="sidebar">
                    <ul>
                        <li className='active'><a href="#">Dashboard</a></li>
                        <li><a href="#">Analytics</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
                <div class="main-content">
                    <h1>Dashboard</h1>
                    <div class="cards">
                        <div class="recent-orders">
                            <h2>Recent Orders</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date Order</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={require("../assets/people.png")} alt="People Working" /> John Doe</td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require("../assets/people.png")} alt="People Working" /> John Doe</td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require("../assets/people.png")} alt="People Working" />John Doe</td>
                                        <td>01-10-2021</td>
                                        <td><span class="status process">Process</span></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require("../assets/people.png")} alt="People Working" /> John Doe</td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require("../assets/people.png")} alt="People Working" /> John Doe</td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="todos">
                            <h2>Todos</h2>
                            <ul>
                                <li><span>Todo List</span> <span class="options">⋮</span></li>
                                <li class="pending"><span>Todo List</span> <span class="options">⋮</span></li>
                                <li><span>Todo List</span> <span class="options">⋮</span></li>
                                <li class="process"><span>Todo List</span> <span class="options">⋮</span></li>
                                <li><span>Todo List</span> <span class="options">⋮</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
