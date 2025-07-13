/* eslint-disable no-case-declarations */
// import { createContext } from "react";
// //import { SuperAdministrator } from "../types/super-admin-type";

// interface AuthContext {
//   currentUser: SuperAdministrator | null;
//   setCurrentUser: (user: SuperAdministrator | null) => void;
// }

// export const AuthContext = createContext<AuthContext>({
//   currentUser: null,
//   setCurrentUser: () => { },
// });

import type { BaseUser, SuperAdminProperties, AdminProperties, UserProperties, User } from "@/types/User";
import { createContext } from "react";


// Type aliases for backward compatibility
export type SuperAdministrator = BaseUser & SuperAdminProperties;
export type Administrator = BaseUser & AdminProperties;
export type RegularUser = BaseUser & UserProperties;



// AuthContext interface
interface AuthContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  isAuthenticated: boolean;
  userRole: User['role'] | null;
  hasPermission: (permission: string) => boolean;
  logout: () => void;
}

// Create AuthContext with default values
export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => { },
  isAuthenticated: false,
  userRole: null,
  hasPermission: () => false,
  logout: () => { },
});

// // Helper function to check permissions based on user type
export const checkUserPermission = (user: User | null, permission: string): boolean => {
  if (!user) return false;

  switch (user.role) {
    case 'superadmin':
      // SuperAdmin has all permissions
      return true;

    case 'admin':
      const adminPermissions = user.adminPermissions;
      switch (permission) {
        case 'canManageUsers':
          return adminPermissions.canManageUsers;
        case 'canViewReports':
          return adminPermissions.canViewReports;
        case 'canManageContent':
          return adminPermissions.canManageContent;
        case 'canManageSettings':
          return adminPermissions.canManageSettings;
        case 'canInviteUsers':
          return adminPermissions.canInviteUsers;
        default:
          return false;
      }

    case 'user':
      const userPermissions = user.userPermissions;
      switch (permission) {
        case 'canCreateContent':
          return userPermissions.canCreateContent;
        case 'canEditOwnContent':
          return userPermissions.canEditOwnContent;
        case 'canViewReports':
          return userPermissions.canViewReports;
        case 'canCommentOnContent':
          return userPermissions.canCommentOnContent;
        default:
          return false;
      }

    default:
      return false;
  }
};

// // AuthContext Provider Props
// export interface AuthProviderProps {
//   children: React.ReactNode;
// }