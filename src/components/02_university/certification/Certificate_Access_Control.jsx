import React from 'react';

// Mock data structure for user roles and permissions
const rolesPermissions = {
  admin: {
    permissions: ['edit', 'delete', 'view'],
    name: 'Admin',
  },
  editor: {
    permissions: ['edit', 'view'],
    name: 'Editor',
  },
  viewer: {
    permissions: ['view'],
    name: 'Viewer',
  },
};

// UserAccessControl Component
const UserAccessControl = ({ role, children }) => {
  // Fetch the role details from the data
  const roleInfo = rolesPermissions[role];

  if (!roleInfo) {
    return <div>Unknown role. Access Denied.</div>;
  }

  const { name, permissions } = roleInfo;

  return (
    <div className="access-control">
      <h2>User: {name}</h2>
      <p>Permissions: {permissions.join(', ')}</p>

      {/* Render the children based on permissions */}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default UserAccessControl;
