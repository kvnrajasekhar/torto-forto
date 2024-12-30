import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext.jsx';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !user) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_BACKEND_URL}/user/`,
                        {
                            headers: { Authorization: `Bearer ${token}` },
                            withCredentials: true,
                        }
                    );
                    setUser(response.data.user);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            fetchUserData();
        }
    }, [user]);

    const isAuthenticated = !!localStorage.getItem('token');
    // const isAuthenticated =true;
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        Cookies.remove('token', { path: '/', sameSite: 'None', secure: true });
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;