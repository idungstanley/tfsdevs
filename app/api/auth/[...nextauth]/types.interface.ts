interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  gender: string | null;
  isAccountVerified: boolean;
  active: boolean;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  categoryId: string | null;
  roles: string;
}

export interface AuthToken {
  user: User;
  token: string;
  message: string;
  id: string;
  iat: number; // Issued at timestamp
  exp: number; // Expiration timestamp
  jti: string; // Unique identifier for the token
}

export interface LoginResponse {
  user: AuthToken;
  expires: string; // ISO string for expiration date
}
