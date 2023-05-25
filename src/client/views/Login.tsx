import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../utilities/use-auth';
import { useForm } from '../utilities/use-form';
import authService from '../services/auth';

import { Button, Container, Input } from '../components';
import { Link } from 'react-router-dom';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const location = useLocation();
  const { signin } = useAuth();
  const [error, setError] = useState<string>('');
  const { values, handleChanges } = useForm<{ [key: string]: string }>({
    email: 'guest@test.com',
    password: 'password123',
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authService
      .loginUser(values)
      .then(() => signin('/profile'))
      .catch((e) => setError(e.message));
  };

  return (
    <Container className="py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-primary">Welcome back, adventurer!</h1>
      <p className="mb-8 text-lg text-secondary">Log in to access your D&D notes.</p>
      <form className="flex flex-col items-center justify-center">
        <div className="w-full max-w-xs form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <Input
            type="email"
            name="email"
            autoComplete="current-email"
            value={values.email || ''}
            onChange={handleChanges}
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            value={values.password || ''}
            onChange={handleChanges}
          />
        </div>
        <Button onClick={handleClick} className="mt-5" color="primary" wide>
          Login
        </Button>
        {error && <p className="mt-4 text-error">{error}</p>}
      </form>
      {location.state?.message && <div>{location.state?.message}</div>}
      <p className="mt-12 text-sm text-secondary">
        Don't have an account yet? Start your journey by{' '}
        <Link className="text-accent" to="/register">
          signing up
        </Link>
        .
      </p>
    </Container>
  );
};
export default Login;
