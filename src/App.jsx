import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'

export const App = () => {

  return (
    <>
      <h1>Hunter</h1>
      <div className="card">
      </div>
    </>
  )
}

export default withAuthenticator(App);
