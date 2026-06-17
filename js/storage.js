// 1. Keep your key name in one central place so you never misspell it
const STORAGE_KEY = "fittrack_workouts";

function getEntriesFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  try {
    if (savedData === null) {
      return [];
    }
    const parsedEntries = JSON.parse(savedData);
    
    if (!Array.isArray(parsedEntries)) {
      return [];
    }
    return parsedEntries;

  } catch (error) {
    console.error("Error parsing saved data, resetting to clean array:", error);
    return []; // Return empty array safely if parsing completely fails
  }
}
function saveWorkoutsToStorage(workoutsArray) {
  try {
    const stringData = JSON.stringify(workoutsArray);
    localStorage.setItem(STORAGE_KEY, stringData);
  } catch (error) {
    console.error("Failed to save data:", error.message);
  }
}

// In your form.js (when saving a new workout):

// JavaScript
// // 1. Get the existing array from storage
// const currentEntries = getEntriesFromStorage();

// // 2. Push the new object into it
// currentEntries.push(newWorkoutRecord);

// // 3. Pass the updated array into your save function
// saveWorkoutsToStorage(currentEntries);
// In your dashboard.js (when loading the table):

// JavaScript
// // Grab whatever is currently in storage and assign it to your page state
// let globalWorkoutsList = getEntriesFromStorage();