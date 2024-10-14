import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <ul>
                    <li className={`${styles.active}`}>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="/">Analytics</a>
                    </li>
                    <li>
                        <a href="/">Settings</a>
                    </li>
                    <li>
                        <a href="/">Logout</a>
                    </li>
                </ul>
            </div>
            <div className={styles.mainContent}>
                <h1>Dashboard</h1>
                <div className={styles.cards}>
                    <div className={styles.recentOrders}>
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
                                    <td>
                                        <img
                                            src={require("../assets/people.png")}
                                            alt="People Working"
                                        />{" "}
                                        John Doe
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className={`${styles.status} ${styles.completed}`}>Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src={require("../assets/people.png")}
                                            alt="People Working"
                                        />{" "}
                                        John Doe
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src={require("../assets/people.png")}
                                            alt="People Working"
                                        />{" "}
                                        John Doe
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className={`${styles.status} ${styles.process}`}>In Process</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.todos}>
                        <h2>To-Do List</h2>
                        <ul>
                            <li className={styles.pending}>
                                <span>Task 1</span>
                                <span className={styles.options}>...</span>
                            </li>
                            <li className={styles.process}>
                                <span>Task 2</span>
                                <span className={styles.options}>...</span>
                            </li>
                            <li>
                                <span>Task 3</span>
                                <span className={styles.options}>...</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;