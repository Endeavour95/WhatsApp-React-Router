import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import debounce from 'lodash/debounce';

const LoadingInput = () => {
  const [loading, setLoading] = useState(false);

  // Debounce the function to delay updates
  const debouncedSearch = debounce(handleInputChange, 500);

  function handleInputChange(value) {
    // Simulate an asynchronous operation (e.g., API call)
    setLoading(true);

    // Assuming you have an asynchronous operation (e.g., API call)
    // Replace the setTimeout with your actual async operation
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    // Clean up the debounced function on component unmount
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <div>
      <TextField
        label="Type something..."
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      {loading && <CircularProgress />}
    </div>
  );
};

export default LoadingInput;
