// Function to load the state from localStorage
export const loadState = () => {
  try {
    // Retrieve the item from localStorage
    const getState = localStorage.getItem("state");
    if (getState === null) {
      return undefined;
    }
    // Parse the JSON string back into JavaScript object and return it
    return JSON.parse(getState);
  } catch (err) {
    return undefined;
  }
};

// Function to save the state to localStorage
export const saveState = (state) => {
  try {
    // Convert the state into a JSON string
    const convertedState = JSON.stringify(state);
    // Save the converted state to localStorage under the key "state"
    localStorage.setItem("state", convertedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};
