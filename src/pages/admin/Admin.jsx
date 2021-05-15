import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { AppContext } from '../../components/context/GlobalContext';

const Admin = () => {
  const [state] = useContext(AppContext)
  console.log(state)
  return (
    <div className="Admin">
      {process.env.REACT_APP_INSTAGRAM_APP_ID}
      <Button variant="danger">reauthorize</Button>
    </div>
  );
}

export default Admin
