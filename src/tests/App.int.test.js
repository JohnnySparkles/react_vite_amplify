import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';



describe('App', () => {
  beforeAll(() => {
    Amplify.configure(awsExports);
  });

  it('renders', async () => {
    render(<App />);

    const signInHeader = await screen.findByText('Sign In');
    waitFor(() => {
      expect(signInHeader).toBeInTheDocument();
    });
  });
});
