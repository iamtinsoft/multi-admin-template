// Base user properties shared across all user types
export interface BaseUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    lastLoginAt?: Date;
}

// Role-specific properties
export interface SuperAdminProperties {
    role: 'superadmin';
    systemPermissions: {
        canManageAdmins: boolean;
        canManageUsers: boolean;
        canAccessSystemSettings: boolean;
        canViewAnalytics: boolean;
        canManageDatabase: boolean;
        canManageBilling: boolean;
    };
    adminLevel: 'global';
    managedOrganizations: string[]; // All organizations
}

export interface AdminProperties {
    role: 'admin';
    organizationId: string;
    adminPermissions: {
        canManageUsers: boolean;
        canViewReports: boolean;
        canManageContent: boolean;
        canManageSettings: boolean;
        canInviteUsers: boolean;
    };
    adminLevel: 'organization';
    department?: string;
    managedDepartments?: string[];
}

export interface UserProperties {
    role: 'user';
    organizationId: string;
    userPermissions: {
        canCreateContent: boolean;
        canEditOwnContent: boolean;
        canViewReports: boolean;
        canCommentOnContent: boolean;
    };
    department?: string;
    manager?: string; // Admin ID
    accessLevel: 'basic' | 'premium' | 'enterprise';
}

// Union type for all user types
export type User = BaseUser & (SuperAdminProperties | AdminProperties | UserProperties);

// Type guards for checking user roles
export const isSuperAdmin = (user: User): user is BaseUser & SuperAdminProperties => {
    return user.role === 'superadmin';
};

export const isAdmin = (user: User): user is BaseUser & AdminProperties => {
    return user.role === 'admin';
};

export const isRegularUser = (user: User): user is BaseUser & UserProperties => {
    return user.role === 'user';
};

// Helper type for creating users
// type CreateUserData<T extends User['role']> = T extends 'superadmin'
//     ? Omit<BaseUser & SuperAdminProperties, 'id' | 'createdAt' | 'updatedAt'>
//     : T extends 'admin'
//     ? Omit<BaseUser & AdminProperties, 'id' | 'createdAt' | 'updatedAt'>
//     : T extends 'user'
//     ? Omit<BaseUser & UserProperties, 'id' | 'createdAt' | 'updatedAt'>
//     : never;

// Example usage:
export type UserType = User;

// // Example instances
// const superAdminExample: User = {
//     id: '1',
//     email: 'superadmin@platform.com',
//     firstName: 'Super',
//     lastName: 'Admin',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     isActive: true,
//     role: 'superadmin',
//     systemPermissions: {
//         canManageAdmins: true,
//         canManageUsers: true,
//         canAccessSystemSettings: true,
//         canViewAnalytics: true,
//         canManageDatabase: true,
//         canManageBilling: true,
//     },
//     adminLevel: 'global',
//     managedOrganizations: ['org1', 'org2', 'org3'],
// };

// const adminExample: User = {
//     id: '2',
//     email: 'admin@company.com',
//     firstName: 'John',
//     lastName: 'Admin',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     isActive: true,
//     role: 'admin',
//     organizationId: 'org1',
//     adminPermissions: {
//         canManageUsers: true,
//         canViewReports: true,
//         canManageContent: true,
//         canManageSettings: true,
//         canInviteUsers: true,
//     },
//     adminLevel: 'organization',
//     department: 'IT',
//     managedDepartments: ['IT', 'Support'],
// };

// const userExample: User = {
//     id: '3',
//     email: 'user@company.com',
//     firstName: 'Jane',
//     lastName: 'User',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     isActive: true,
//     role: 'user',
//     organizationId: 'org1',
//     userPermissions: {
//         canCreateContent: true,
//         canEditOwnContent: true,
//         canViewReports: false,
//         canCommentOnContent: true,
//     },
//     department: 'Marketing',
//     manager: '2',
//     accessLevel: 'premium',
//   };