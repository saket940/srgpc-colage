import React, { useState } from 'react'
import Cookies from "js-cookie";
const Spct = () => {
    
    return (<><div className='main'>
        <h2>Add Table and Hading-</h2>
        <div id="spct" contentEditable style={{ border: "1px solid gray", padding: "8px" }} dangerouslySetInnerHTML={{ __html:  `<h2>FT </h2>

<table>
    <tbody>
        <tr>
            <th colSpan="2">Before Solar Installation</th>
            <th colSpan="2">After Solar Installation</th>
            <th colSpan="2">Savings (Units per month approx) </th>
            <th colSpan="2">Savings (Rs. per month approx) </th>
            <th> Remarks </th>
        </tr>
        <tr>
            <th>Month</th>
            <th>Units</th>
            <th>Month</th>
            <th>Units</th>
            <th>Month</th>
            <th>Units</th>
            <th>Month</th>
            <th>Rs.</th>
            <th></th>
        </tr>
        <tr>
            <td>

            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr><tr><th>Total Units (Old) </th><th></th><th>Total Units (New) </th><th></th><th>Total Units Saved </th><th></th><th>Total Savings (Around) </th><th></th><th></th></tr></tbody></table>
        <div className="br"><div className="brr"></div><div className="brs"></div><div className="brl"></div></div>` }}>
       

        </div>
        <button className="abtn" style={{"width":"200px"}} onClick={async()=>{ 
            const table=document.getElementById("spct").innerHTML
     const cookieValue = Cookies.get("auth");
              try {
                const response = await fetch('http://localhost:5000/api/store-table', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ table: table,auth:cookieValue })
                });
                if (response.ok) {
                  window.location.reload();
                }
              } catch (error) {
                console.error('Error updating:', error);
              }
       }}>Add Table and Hading</button></div></>

    )
}

export default Spct
