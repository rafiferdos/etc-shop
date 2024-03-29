import React from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiViewGridAdd } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Sidebar = ({ show }) => {
    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <div className="sidebar-header">
                <h2>ETC<span className ="dot">.</span></h2>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <Link to="/panel/manageProduct">
                        <HiViewGridAdd style={{ fontSize: "1.4rem" }} /> Manage Product
                    </Link>
                </li>
                <li>
                    <Link to="/panel/addProduct">
                        <AiOutlineFileAdd style={{ fontSize: "1.3rem" }} /> Add Product
                    </Link>
                </li>
                <li>
                    <Link to="/panel/editProduct">
                        <FiEdit style={{ fontSize: "1.2rem" }} /> Edit Product
                    </Link>
                </li>
            </ul>
            <ul className="list-unstyled CTAs">
                <li>
                    <Link to="/" className="download">Back to Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;