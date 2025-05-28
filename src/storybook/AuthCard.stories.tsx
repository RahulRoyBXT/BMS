import type { Meta, StoryObj } from '@storybook/react';
import { AuthCard } from '../components/AuthCard';
import { AuthProvider } from '../context/AuthContext';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';


// Minimal Error component to avoid ugly 404 flashes
const ErrorFallback = () => <div>Oops! Something went wrong.</div>;

const routes = [
  {
    path: '/auth/login',
    element: <AuthCard />,
    errorElement: <ErrorFallback />,
  },
  {
    path: '/auth/register',
    element: <AuthCard />,
    errorElement: <ErrorFallback />,
  },
  // Add other routes if your component navigates to them
];

const router = createMemoryRouter(routes, {
  initialEntries: ['/auth/login'], // or '/auth/register' to test other page
  initialIndex: 0,
});

const meta: Meta<typeof AuthCard> = {
  title: 'Components/AuthCard',
  component: AuthCard,
  decorators: [
    () => (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AuthCard>;

export const Default: Story = {};
