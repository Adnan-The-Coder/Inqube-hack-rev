import React, { useState } from 'react';
import { Shield, Bell, Key, Lock, UserCircle, LogOut } from 'lucide-react';
import Image from 'next/image';

import nazish from './nazish.jpg'

const SettingsView = () => {
  // State management for user data
  const [userData, setUserData] = useState({
    name: "Nazish Ahmed",
    email: "realnazishahmed@gmail.com",
    bio: "Experienced Software Developer",
    skills: ['Ethereum', 'Solidity', 'Smart Contracts', 'React', 'Node.js', 'Web3'],
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });

  const [activeTab, setActiveTab] = useState('account');
  const [newSkill, setNewSkill] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    mobile: false,
    marketing: false
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically save to a backend
    alert("Changes saved successfully!");
  };

  // Handle adding a new skill
  const handleAddSkill = () => {
    if (newSkill && !userData.skills.includes(newSkill)) {
      setUserData({
        ...userData,
        skills: [...userData.skills, newSkill]
      });
      setNewSkill('');
    }
  };

  // Handle removing a skill
  const handleRemoveSkill = (skillToRemove: string) => {
    setUserData({
      ...userData,
      skills: userData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  // Handle notification preference changes
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  // File upload handler for profile picture
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({
          ...userData,
          profilePicture: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Render different content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'account':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Developer Bio</label>
              <textarea
                name="bio"
                rows={4}
                value={userData.bio}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-[#1e1e1e] p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              ></textarea>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Skills</label>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span key={index} className="rounded-full bg-[#1e1e1e] px-3 py-1 text-sm">
                    {skill} <button type="button" className="ml-1 text-gray-400" onClick={() => handleRemoveSkill(skill)}>×</button>
                  </span>
                ))}
                <div className="flex">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="New skill"
                    className="mt-3 rounded-l-lg bg-[#1e1e1e] px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="mt-3 rounded-r-lg bg-[#76b900] px-3 text-sm text-black"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button type="button" className="rounded-lg bg-gray-600 px-4 py-2 font-medium text-white hover:bg-gray-700">
                Cancel
              </button>
              <button type="submit" className="rounded-lg bg-[#76b900] px-4 py-2 font-medium text-black">
                Save Changes
              </button>
            </div>
          </form>
        );
        
      case 'security':
        return (
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-600 bg-[#1e1e1e] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">End-to-End Encryption</h3>
                <Shield size={20} className="text-[#76b900]" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                All your messages and communications are secured with end-to-end encryption.
              </p>
              <button className="mt-3 rounded-lg bg-[#2e2e2e] px-4 py-2 text-sm hover:bg-[#3e3e3e]">
                Manage Encryption Keys
              </button>
            </div>
            <div className="rounded-xl border border-gray-600 bg-[#1e1e1e] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Password</h3>
                <Lock size={20} className="text-[#76b900]" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Change your password or enable two-factor authentication.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-1 block text-sm">Current Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg bg-[#242424] p-2 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm">New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg bg-[#242424] p-2 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg bg-[#242424] p-2 text-white focus:outline-none focus:ring-1 focus:ring-[#76b900]"
                  />
                </div>
                <div className="pt-2">
                  <button className="w-full rounded-lg bg-[#76b900] py-2 font-medium text-black">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-600 bg-[#1e1e1e] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <Key size={20} className="text-[#76b900]" />
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Add an extra layer of security to your account.
              </p>
              <div className="mt-3 flex items-center">
                <div className="flex-1">
                  <span className="text-sm font-medium">Status:</span>
                  <span className="ml-2 rounded-full bg-red-900 bg-opacity-30 px-2 py-1 text-xs text-red-400">Not Enabled</span>
                </div>
                <button className="rounded-lg bg-[#76b900] px-4 py-2 text-sm font-medium text-black">
                  Enable 2FA
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-red-800 bg-[#1e1e1e] bg-opacity-50 p-4">
              <h3 className="text-lg font-medium text-red-400">Danger Zone</h3>
              <p className="mt-2 text-sm text-gray-400">
                Permanently delete your account and all of your content.
              </p>
              <button className="mt-3 rounded-lg border border-red-700 bg-transparent px-4 py-2 text-sm text-red-400 hover:bg-red-900 hover:bg-opacity-20">
                Delete Account
              </button>
            </div>
          </div>
        );
        
      case 'notifications':
        return (
          <div className="space-y-6">
            <p className="text-gray-400">Manage how and when you receive notifications.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-[#1e1e1e] p-4">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-400">Receive notifications via email</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#76b900] peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#1e1e1e] p-4">
                <div>
                  <h4 className="font-medium">Browser Notifications</h4>
                  <p className="text-sm text-gray-400">Receive notifications in your browser</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={notifications.browser}
                    onChange={() => handleNotificationChange('browser')}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#76b900] peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#1e1e1e] p-4">
                <div>
                  <h4 className="font-medium">Mobile Notifications</h4>
                  <p className="text-sm text-gray-400">Receive notifications on your mobile device</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={notifications.mobile}
                    onChange={() => handleNotificationChange('mobile')}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#76b900] peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#1e1e1e] p-4">
                <div>
                  <h4 className="font-medium">Marketing Emails</h4>
                  <p className="text-sm text-gray-400">Receive updates about new features and offers</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={notifications.marketing}
                    onChange={() => handleNotificationChange('marketing')}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#76b900] peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="rounded-lg bg-[#76b900] px-4 py-2 font-medium text-black">
                Save Preferences
              </button>
            </div>
          </div>
        );
        
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Manage your API keys for application access.</p>
              <button className="rounded-lg bg-[#76b900] px-4 py-2 text-sm font-medium text-black">
                + Generate New Key
              </button>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-600">
              <table className="w-full">
                <thead className="bg-[#1e1e1e]">
                  <tr>
                    <th className="p-3 text-left">Key Name</th>
                    <th className="p-3 text-left">Created</th>
                    <th className="p-3 text-left">Last Used</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="bg-[#1e1e1e] bg-opacity-50">
                    <td className="p-3">Production API</td>
                    <td className="p-3 text-sm text-gray-400">Jan 15, 2025</td>
                    <td className="p-3 text-sm text-gray-400">Today</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button className="rounded bg-gray-700 px-2 py-1 text-xs">View</button>
                        <button className="rounded bg-red-900 bg-opacity-50 px-2 py-1 text-xs text-red-400">Revoke</button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#1e1e1e] bg-opacity-50">
                    <td className="p-3">Testing API</td>
                    <td className="p-3 text-sm text-gray-400">Feb 02, 2025</td>
                    <td className="p-3 text-sm text-gray-400">Yesterday</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button className="rounded bg-gray-700 px-2 py-1 text-xs">View</button>
                        <button className="rounded bg-red-900 bg-opacity-50 px-2 py-1 text-xs text-red-400">Revoke</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-xl border border-gray-600 bg-[#1e1e1e] p-4">
              <h4 className="text-lg font-medium">API Usage</h4>
              <div className="mt-4">
                <div className="mb-2 flex justify-between">
                  <span className="text-sm">This Month</span>
                  <span className="text-sm font-medium">83,400 / 100,000 calls</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                  <div className="h-full w-[83.4%] bg-[#76b900]"></div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Handle file input click
  const handleProfilePictureClick = () => {
    const inputElement = document.getElementById('profilePictureInput');
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-wide text-white lg:text-4xl">Settings</h1>
        <p className="mt-2 text-gray-400">Manage your account and preferences</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full border-4 border-[#76b900] p-1">
                <Image
                  src={nazish}
                  alt="Profile picture"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{userData.name}</h3>
              <p className="text-gray-400">Software Developer</p>
              <button 
                className="mt-4 rounded-lg bg-[#1e1e1e] px-4 py-2 text-sm hover:bg-[#2e2e2e]"
                onClick={handleProfilePictureClick}
              >
                Change Picture
              </button>
              <input
                id="profilePictureInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
            <div className="space-y-2">
              <button 
                className={`w-full rounded-lg ${activeTab === 'account' ? 'bg-[#76b900] text-black' : 'bg-[#1e1e1e] text-white hover:bg-[#2e2e2e]'} py-2 font-medium flex items-center justify-center`}
                onClick={() => setActiveTab('account')}
              >
                <UserCircle size={18} className="mr-2" />
                Account Settings
              </button>
              <button 
                className={`w-full rounded-lg ${activeTab === 'security' ? 'bg-[#76b900] text-black' : 'bg-[#1e1e1e] text-white hover:bg-[#2e2e2e]'} py-2 font-medium flex items-center justify-center`}
                onClick={() => setActiveTab('security')}
              >
                <Lock size={18} className="mr-2" />
                Security
              </button>
              <button 
                className={`w-full rounded-lg ${activeTab === 'notifications' ? 'bg-[#76b900] text-black' : 'bg-[#1e1e1e] text-white hover:bg-[#2e2e2e]'} py-2 font-medium flex items-center justify-center`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell size={18} className="mr-2" />
                Notifications
              </button>
              <div className="mt-6 pt-4 border-t border-gray-600">
                <button className="w-full rounded-lg bg-[#1e1e1e] py-2 font-medium text-red-400 hover:bg-[#2e2e2e] flex items-center justify-center">
                  <LogOut size={18} className="mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
            <h3 className="mb-6 text-xl font-bold">{activeTab === 'account' ? 'Account Settings' : 
              activeTab === 'security' ? 'Security Settings' : 
              activeTab === 'notifications' ? 'Notification Preferences' : 
              activeTab === 'apikeys' ? 'API Key Management' :
              'Appearance Settings'}</h3>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsView;