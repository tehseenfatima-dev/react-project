import { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [tab, setTab] = useState("account");

  return (
    <div className="settings">

      {/* Sidebar */}
      <div className="settings-sidebar">

        <button
          className={tab === "account" ? "active" : ""}
          onClick={() => setTab("account")}
        >
          Account
        </button>

        <button
          className={tab === "appearance" ? "active" : ""}
          onClick={() => setTab("appearance")}
        >
          Appearance
        </button>

        <button
          className={tab === "security" ? "active" : ""}
          onClick={() => setTab("security")}
        >
          Security
        </button>

        <button
          className={tab === "notifications" ? "active" : ""}
          onClick={() => setTab("notifications")}
        >
          Notifications
        </button>

      </div>

      {/* Content */}
      <div className="settings-content">

        {/* ACCOUNT */}
        {tab === "account" && (
          <div className="glass-card">

            <h2>Profile Settings</h2>

            <input defaultValue="Tehseen Fatima" />
            <input defaultValue="tehseen@gmail.com" />
            <input defaultValue="+92 300 1234567" />

            <button className="save-btn">
              Save Changes
            </button>

          </div>
        )}

        {/* APPEARANCE */}
        {tab === "appearance" && (
          <div className="glass-card">

            <h2>Appearance</h2>

            <label>
              <input type="checkbox" defaultChecked />
              Dark Mode
            </label>

            <label>
              <input type="checkbox" />
              Compact Sidebar
            </label>

            <label>
              Theme Color
            </label>

            <select>
              <option>Blue</option>
              <option>Purple</option>
              <option>Green</option>
            </select>

          </div>
        )}

        {/* SECURITY */}
        {tab === "security" && (
          <div className="glass-card">

            <h2>Security</h2>

            <input
              type="password"
              placeholder="Current Password"
            />

            <input
              type="password"
              placeholder="New Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button className="save-btn">
              Change Password
            </button>

          </div>
        )}

        {/* NOTIFICATIONS */}
        {tab === "notifications" && (
          <div className="glass-card">

            <h2>Notifications</h2>

            <label>
              <input type="checkbox" defaultChecked />
              Email Notifications
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              Push Notifications
            </label>

            <label>
              <input type="checkbox" />
              Weekly Reports
            </label>

            <button className="save-btn">
              Save Preferences
            </button>

          </div>
        )}

      </div>

    </div>
  );
}