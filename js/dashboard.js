// // --- State Management Variables ---
// DECLARE globalWorkoutsList = getWorkoutsFromStorage()
// DECLARE isDescendingOrder = true // Tracking date sorting state
// // --- Helper Formatting Utilities ---
// FUNCTION formatDate(rawDateString) {
//     // Input format usually: "2026-06-15"
//     // Extract and return clean text: e.g., "Jun 15, 2026"
//     RETURN prettyFormattedDate
// }

globalWorkoutsList = getEntriesFromStorage()
isDescendingOrder = true

function formatDate(rawDateString) {
  if (!rawDateString) return "—";
  const dateObj = new Date(rawDateString);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}
console.log(formatDate("2026-06-15")); // Output: "Jun 15, 2026"

// // --- Analytics Calculations ---
// FUNCTION updateDashboardSummary() {
//     // 1. Calculate Total Active Minutes using REDUCE
//     DECLARE totalMinutes = globalWorkoutsList.reduce(function(accumulator, currentWorkout) {
//         RETURN accumulator + Number(currentWorkout.duration)
//     }, 0)
    
//     // 2. Count logged items using array length property
//     DECLARE totalWorkoutsCount = globalWorkoutsList.length
    
//     // 3. Object Builder using REDUCE to find focus focus category
//     // Converts array into shape: { Cardio: 90, Strength: 45 }
//     DECLARE categoryTotalsObj = globalWorkoutsList.reduce(function(trackerObject, currentWorkout) {
//         DECLARE currentCategory = currentWorkout.category
        
//         IF trackerObject[currentCategory] EXISTS THEN
//             trackerObject[currentCategory] += Number(currentWorkout.duration)
//         ELSE
//             trackerObject[currentCategory] = Number(currentWorkout.duration)
//         END IF
        
//         RETURN trackerObject
//     }, {})
    
//     // 4. Extract highest scoring key from object builder
//     DECLARE primaryFocusCategory = "—"
//     // Loop through your categoryTotalsObj keys to see which value is the highest
    
//     // 5. DOM Manipulation: Push these calculated stats into the text elements
//     SET document.getElementById("total-minutes").textContent = totalMinutes + " mins"
//     SET document.getElementById("total-count").textContent = totalWorkoutsCount
//     SET document.getElementById("top-category").textContent = primaryFocusCategory
// }

// // --- Table UI Builder ---
// FUNCTION renderWorkoutTable() {
//     DECLARE tableBodyElement = document.getElementById("workout-rows")
    
//     // Guard Clause: If array is empty, explicitly show your boilerplate empty state message and stop
//     IF globalWorkoutsList.length EQUALS 0 THEN
//         SET tableBodyElement.innerHTML = "<tr>...Empty message here...</tr>"
//         RETURN
//     END IF
    
//     // Reset standard innerHTML state before populating new rows
//     SET tableBodyElement.innerHTML = ""
    
//     // MAP through your storage list to construct table row strings
//     DECLARE tableRowsHtml = globalWorkoutsList.map(function(workout) {
//         RETURN `
//             <tr>
//                 <td>${formatDate(workout.date)}</td>
//                 <td>${workout.name}</td>
//                 <td>${workout.category}</td>
//                 <td>${workout.duration} mins</td>
//                 <td class="text-right">
//                     <button class="delete-btn" data-id="${workout.id}">Delete</button>
//                 </td>
//             </tr>
//         `
//     }).join("") // Combines rows array cleanly into a unified text block
    
//     SET tableBodyElement.innerHTML = tableRowsHtml
    
//     // Re-attach Event Listeners to all delete buttons using a looping structure
//     ATTACH_DELETE_LISTENERS()
// }

// // --- Operations & Listeners ---
// FUNCTION handleDeleteWorkout(event) {
//     DECLARE targetWorkoutId = event.target.dataset.id
    
//     // Target position of record matching clicked element ID using FINDINDEX
//     DECLARE targetIndex = globalWorkoutsList.findIndex(function(workout) {
//         RETURN workout.id EQUALS targetWorkoutId
//     })
    
//     // Defensive check: If match found, alter collection safely
//     IF targetIndex NOT EQUALS -1 THEN
//         globalWorkoutsList.splice(targetIndex, 1) // Remove from tracking state
//         saveWorkoutsToStorage(globalWorkoutsList)  // Sync storage update
        
//         // Re-execute display cycles to keep UI matching data perfectly
//         updateDashboardSummary()
//         renderWorkoutTable()
//     END IF
// }

// // Sorting logic mapping
// ON_CLICK_EVENT(document.getElementById("sort-date-btn"), function() {
//     // Toggle state value
//     isDescendingOrder = !isDescendingOrder
    
//     // Sort logic mutating array
//     globalWorkoutsList.sort(function(a, b) {
//         IF isDescendingOrder THEN
//             RETURN new Date(b.date) - new Date(a.date)
//         ELSE
//             RETURN new Date(a.date) - new Date(b.date)
//         END IF
//     })
    
//     // Update Arrow Text and rebuild the layout view
//     SET document.getElementById("sort-direction").textContent = isDescendingOrder ? "▼" : "▲"
//     renderWorkoutTable()
// })

// // --- Initial App Boot ---
// updateDashboardSummary()
// renderWorkoutTable()