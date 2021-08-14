/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

// this cannot be an arrow function
function SnackbarStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and any compoenent can access it via the consumer!

  // Closed snackbar by default
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('hidden');
  const [snackbarType, setSnackbarType] = useState('');
  const [closeButton, setCloseButton] = useState(false);

  // function for toggling the snackbar open and closed
  function toggleSnackbar() {
    setSnackbarOpen(!snackbarOpen);
  }

  // function to close snackbar
  function closeSnackbar() {
    setSnackbarOpen(false);
    setSnackbarMessage('');
    setSnackbarType('hidden');
  }

  // function to open snackbar
  function openSnackbar() {
    setSnackbarOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        closeButton,
        setCloseButton,
        snackbarMessage,
        setSnackbarMessage,
        snackbarType,
        setSnackbarType,
        snackbarOpen,
        setSnackbarOpen,
        toggleSnackbar,
        closeSnackbar,
        openSnackbar,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the snackbar local state
function useSnackbar() {
  // We use a consumer here to access the local state
  // useContext is the consumer for the local state, wherever you have a provider, you have a consumer
  const all = useContext(LocalStateContext);
  return all;
}
export { SnackbarStateProvider, useSnackbar };