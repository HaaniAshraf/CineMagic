// Function to load the state from localStorage
export const loadState = () => {
  try {
    // Retrieve the item from localStorage
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    // Parse the JSON string back into JavaScript object and return it
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save the state to localStorage
export const saveState = (state) => {
  try {
    // Convert the state into a JSON string
    const serializedState = JSON.stringify(state);
    // Save the serialized state to localStorage under the key "state"
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};
