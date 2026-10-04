function Settings() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>Settings</h1>
      </div>

      <div className="settings-card">

        <div className="setting-item">
          <span>Autoplay</span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="setting-item">
          <span>Notifications</span>

          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <span>Dark Mode</span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

      </div>

    </div>
  );
}

export default Settings;