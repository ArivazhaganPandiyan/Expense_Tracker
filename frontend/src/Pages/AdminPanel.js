import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/admin/users'); // Fetch users from the admin route
                console.log('Response Data:', response.data); // Log response data to console
                setUsers(response.data);
                setError(null); // Reset error state to null
            } catch (err) {
                console.error('Error fetching users:', err); // Log error to console
                setError('Failed to fetch users. Please try again.');
            }
        };

        fetchUsers();
    }, []); // Add empty dependency array to prevent multiple re-renders

    return (
        <div>
            <h2>Admin Panel</h2>
            {error && <p>{error}</p>}
            <table border="1">
               
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Transactions</th>
                    </tr>
                    {users.map((user) => (
                        <tr key={user._id}>
                            {/* <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td> */}
                            <td>{user.transactions.length}</td>
                        </tr>
                    ))}
               
            </table>
        </div>
    );
};

export default AdminPanel;