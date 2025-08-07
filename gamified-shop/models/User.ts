// When the mongodb driver is installed, _id can be of type ObjectId.
// For now, we'll use string as a placeholder.

export interface User {
  _id?: string; // Should be ObjectId
  name: string;
  email: string;
  password_hashed: string; // Storing hashed password
  points: number;
  level: number;
  badges: string[]; // Array of badge names or IDs
  createdAt: Date;
}
