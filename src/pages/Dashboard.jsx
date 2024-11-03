import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderSection = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <>
                        <div className="h-screen p-8 border-t-2 bg-background dark:bg-background-dark">
                            <div className="flex flex-row h-screen">
                                <div className="flex flex-col w-3/5 mx-5 border shadow-xl rounded-xl h-1/2">
                                    <h2 className="m-5 text-xl font-bold">Recent analysis</h2>
                                    <div className="p-5 overflow-x-auto">
                                        <table className="min-w-full text-center">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-2 border-b">File name</th>
                                                    <th className="px-4 py-2 border-b">Date order</th>
                                                    <th className="px-4 py-2 border-b">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-2 border-b">Hemo.pdf</td>
                                                    <td className="px-4 py-2 border-b">01/10/2021</td>
                                                    <td className="px-4 py-2 bg-green-600 border-b">Completed</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 border-b">Hemo.pdf</td>
                                                    <td className="px-4 py-2 border-b">01/02/22</td>
                                                    <td className="px-4 py-2 bg-red-600 border-b">Pending</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 border-b">Hemo.pdf</td>
                                                    <td className="px-4 py-2 border-b">01/02/22</td>
                                                    <td className="px-4 py-2 bg-orange-600 border-b">In process</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex-col w-2/5 mx-5 border shadow-xl rounded-xl h-1/2">
                                    <p className="m-5 text-xl font-bold">Preview</p>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'section2':
                return (
                    <div className="h-screen p-8 border-t-2 bg-background dark:bg-background-dark">
                        <div className="flex flex-row h-full">
                            <div className="flex-col w-1/2 mx-5 border shadow-xl rounded-xl h-1/2">
                            </div>
                            <div className="flex-col w-1/2 mx-5 border shadow-xl rounded-xl h-1/2">
                                <h2 className="m-5 text-xl font-bold">Actual levels</h2>
                                <div className="p-5 overflow-x-auto">
                                    <table className="min-w-full text-center">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 border-y">Linfocitos</td>
                                                <td className="px-4 py-2 bg-green-600 border-b">Normal</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b">Hemocrocitos</td>
                                                <td className="px-4 py-2 bg-red-600 border-b">High</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border-b">Hemoglobina</td>
                                                <td className="px-4 py-2 bg-orange-600 border-b">Low</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'section3':
                return (
                    <div className="h-screen p-8 border-t-2 bg-background dark:bg-background-dark">
                        <div className="flex-col w-1/2 h-auto p-5 mx-auto border shadow-xl rounded-xl">
                            <div className="flex flex-col items-center h-full text-center p-7">
                                <img src="./src/assets/Perfil.jpg" alt="Profile" className="w-40 h-40 mb-5 bg-cover border-4 rounded-full border-hover dark:border-hover-dark" />
                                <h2 className="m-2 text-2xl font-bold">Nombre</h2>
                                <p className="m-0 overflow-hidden font-bold">51</p>
                                <p className="my-1">Femenino</p>
                                <p className="my-1">Ninguna alergia detectada</p>
                                <div className="flex-row w-full">
                                    <button className="w-1/3 p-2 m-3 text-white rounded-md bg-primary hover:bg-secondary">Editar</button>
                                    <button className="w-1/3 p-2 m-3 text-white rounded-md bg-primary hover:bg-secondary">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex text-text dark:text-text-dark">
            <nav className="w-1/5 h-screen border-t-2 border-r-2 bg-background dark:bg-background-dark">
                <h2 className="p-8 text-xl font-bold">HemoScan</h2>
                <ul>
                    <li>
                        <button onClick={() => setActiveSection('section1')} className="block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark">
                            <p className="mx-8">Dashboard</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setActiveSection('section2')} className="block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark">
                            <p className="mx-8">Analitycs</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setActiveSection('section3')} className="block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark">
                            <p className="mx-8">Settings</p>
                        </button>
                    </li>
                    <li>
                        <button className="block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark">
                            <Link to="/login" className="mx-8">Logout</Link>
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="flex-1">
                {renderSection()}
            </div>
        </div>
    );
};

export default Dashboard;