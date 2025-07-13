//import { Button, HStack } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import type { User } from './types/User';
import { AuthContext, checkUserPermission } from './contexts/AuthContext';
import Router from './routes/routes';

//import './App.css'


function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const hasPermission = (permission: string) =>
    checkUserPermission(currentUser, permission);
  return (
    <AuthContext.Provider value={{
      currentUser,
      setCurrentUser,
      isAuthenticated: !!currentUser,
      userRole: currentUser?.role || null,
      hasPermission,
      logout: () => setCurrentUser(null)
    }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <HStack>
        <Button bg={"brand.primary"}>Click me</Button>
        <Button bg={"brand.grey"}>Click me</Button>
      </HStack> */}
    </AuthContext.Provider>
  )
}

export default App
