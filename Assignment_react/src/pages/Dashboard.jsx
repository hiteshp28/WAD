import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div class="container">
        <h2>Registered Users</h2>
        <table id="userTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody id="userTableBody"></tbody>
        </table>
        <button onclick="window.location.href='login.html'" class="logout-btn">Logout</button>
    </div>
    </div>
  )
}

export default Dashboard
