import React from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import { useState, useContext } from "react";
import { AppContext } from "../Context";
const Form = () => {
    const { insertUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [user_catg, setuser_catg] = useState("Choose to it");



    // Storing the Insert User Form Data.
    const addNewUser = (e, field) => {
        setNewUser({
            ...newUser,
            [field]: e.target.value,
        });
    };

    // Inserting a new user into the Database.
    const submitUser = (e) => {
        e.preventDefault();
        insertUser(newUser);
        e.target.reset();
    };

    return (
        <form className="insertForm" onSubmit={submitUser}>
            <h2>Insert Data</h2>
            <label htmlFor="Amount">Amount</label>
            <input
                type="Number"
                id="_amount"
                onChange={(e) => addNewUser(e, "user_Amount")}
                placeholder="Enter Amount"
                autoComplete="off"
                required
            />
            <label htmlFor="Category">Category</label>
            <select
                className="custom-select"
                value={user_catg}

                onChange={(e) => {
                    const selectedcatg = e.target.value;
                    setuser_catg(selectedcatg);
                    addNewUser( e,"user_catg"); 
                
                  }}
                   


            >
                <option value="salary">salary</option>
                <option value="part-time income">part-time income</option>
                <option value="pocket money">pocket money</option>
                <option value="past saving">past saving</option>
                <option value="exptra income">exptra income</option>
                <option value="borrow">borrow</option>
                <option value="stock income">stock income</option>
            </select>
            {user_catg}
            <br>
            </br>
            <label htmlFor="name">Description </label>
            <input
                type="text"
                id="_name"
                onChange={(e) => addNewUser(e, "user_desc")}
                placeholder="Enter Discrpition"
                autoComplete="off"
                required
            />
            <label htmlFor="date">Date </label>
            <input
                type="date"
                id="_date"
                onChange={(e) => addNewUser(e, "user_date")}
                placeholder="Enter Date"
                autoComplete="off"
                required
            />





            <input type="submit" value="Insert" />
        </form >
    );
};

export default Form;