import React, { useState } from 'react';
import { useAuth } from '../utilities/use-auth';
import { useForm } from '../utilities/use-form';
import authService from '../services/auth';

import { Button, Container, Input } from '../components';

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const { signin } = useAuth();
  const [error, setError] = useState<string>('');
  const { values, handleChanges } = useForm<{ [key: string]: string }>({});

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authService
      .registerUser(values)
      .then(() => signin('/profile'))
      .catch((e) => setError(e.message));
  };

  return (
    <Container className="py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-primary">Join the Adventure</h1>
      <p className="mb-8 text-lg text-secondary">Register now to start managing your D&D notes.</p>
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
        <div className="w-full max-w-xs form-control">
          <label htmlFor="first_name" className="label">
            <span className="label-text">First Name</span>
          </label>
          <Input type="text" name="first_name" value={values.first_name || ''} onChange={handleChanges} />
        </div>
        <div className="w-full max-w-xs form-control">
          <label htmlFor="last_name" className="label">
            <span className="label-text">Last Name</span>
          </label>
          <Input type="text" name="last_name" value={values.last_name || ''} onChange={handleChanges} />
        </div>
        <Button onClick={handleClick} className="mt-5" color="primary" wide>
          Register
        </Button>
        {error && <p className="mt-4 text-error">{error}</p>}
      </form>
      <p className="mt-12 text-sm text-secondary">
        Already have an account? Log in{' '}
        <a className="text-accent" href="/login">
          here
        </a>
        .
      </p>
    </Container>
  );
};
export default Register;
