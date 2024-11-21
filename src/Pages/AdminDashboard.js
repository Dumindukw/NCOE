import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [newAdmin, setNewAdmin] = useState({ username: '', password: '' });
  const [admins, setAdmins] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [staff, setStaff] = useState([]);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newStaff, setNewStaff] = useState({ name: '', title: '' });

  // Fetch existing admins, photos, and staff
  useEffect(() => {
    fetchAdmins();
    fetchPhotos();
    fetchStaff();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/list', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/photos', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const fetchStaff = async () => {
    try {
      const response = await axios.get('http://localhost:5000/staff', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  // Add new admin function
  const addAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/admin/add-admin', newAdmin, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNewAdmin({ username: '', password: '' });
      fetchAdmins(); // Refresh list of admins
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  // Add new photo
  const addPhoto = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/photos', { url: newPhotoUrl }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNewPhotoUrl('');
      fetchPhotos(); // Refresh photos list
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  };

  // Add new staff member
  const addStaff = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/staff', newStaff, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNewStaff({ name: '', title: '' ,number:''});
      fetchStaff(); // Refresh staff list
    } catch (error) {
      console.error('Error adding staff:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add New Admin Section */}
      <section>
        <h2>Add New Admin</h2>
        <form onSubmit={addAdmin}>
          <input
            type="text"
            placeholder="Enter admin username"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Enter admin password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            required
          />
          <button type="submit">Add Admin</button>
        </form>
      </section>

      {/* List Existing Admins */}
      <section>
        <h2>Existing Admins</h2>
        <ul>
          {admins.map((admin) => (
            <li key={admin._id}>{admin.username}</li>
          ))}
        </ul>
      </section>

      {/* Photos Management Section */}
      <section>
        <h2>Manage Photos</h2>
        <ul>
          {photos.map((photo, index) => (
            <li key={index}>
              <img src={photo.url} alt={`Photo ${index + 1}`} width="100" />
            </li>
          ))}
        </ul>
        <form onSubmit={addPhoto}>
          <input
            type="text"
            placeholder="Enter new photo URL"
            value={newPhotoUrl}
            onChange={(e) => setNewPhotoUrl(e.target.value)}
            required
          />
          <button type="submit">Add Photo</button>
        </form>
      </section>

      {/* Academic Staff Management Section */}
      <section>
        <h2>Manage Academic Staff</h2>
        <ul>
          {staff.map((member, index) => (
            <li key={index}>{member.name} - {member.title}</li>
          ))}
        </ul>
        <form onSubmit={addStaff}>
          <input
            type="text"
            placeholder="Enter staff name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Enter staff Designation"
            value={newStaff.title}
            onChange={(e) => setNewStaff({ ...newStaff, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Enter staff Number"
            value={newStaff.number}
            onChange={(e) => setNewStaff({ ...newStaff, title: e.target.value })}
            required
          />
          <button type="submit">Add Staff</button>
        </form>
      </section>
    </div>
  );
};

export default AdminDashboard;
