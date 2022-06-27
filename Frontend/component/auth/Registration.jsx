import React from 'react'
import { Link, useHistory } from "react-router-dom";
export default function Registration() {
  return (
    <div>
        <h1>Hi..Register here</h1>
        <form>
            <label>
                User Name :
                <input type="text" />
            </label>
            <br/><br/>
            <label>
                Password :
                <input type="text" />
            </label>
            <br/><br/>
            <label>
                Role :
                <select>
                    <option value='customer'>Customer</option>
                    <option value='trader'>Trader</option>
                </select>
                
            </label>
            <br/><br/>
            <input type="submit" value="Register" />
        </form>
        <br/><br/>
        <button><Link to="/">Already have an account?</Link></button>
    </div>
  )
}
