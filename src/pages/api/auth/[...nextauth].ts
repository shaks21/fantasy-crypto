import { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import Credentials from 'next-auth/providers/credentials';
import { connectDB } from '../utils/mongodb';

interface CredentialsObject {
  email: string;
  password: string;
}

const options: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    Credentials({
      // The name to display on the login form
      name: 'Credentials',
      // The credentials login form fields
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: CredentialsObject) {
        const { email, password } = credentials;

        // Connect to the database
        const db = await connectDB();

        // Perform the verification of login details
        const user = await db.collection('users').findOne({ email });

        if (user && user.password === password) {
          // Return the user object if the login is successful
          return { id: user._id, email: user.email, name: user.name };
        } else {
          // Return null if the login fails
          return null;
        }
      },
    }),
    // Add other providers as needed
  ],
  // Add callbacks for authentication flows (optional)
};

export default options;
