// 1. Initialize the Async Function
async function fetchUserData() {
  // 2. Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 3. Select the Data Container Element
  const dataContainer = document.getElementById('api-data');

  // 4. Fetch Data Using try-catch
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // 5. Clear the Loading Message
    dataContainer.innerHTML = '';

    // 6. Create and Append User List
    const userList = document.createElement('ul');
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);

  } catch (error) {
    // 7. Error Handling
    dataContainer.innerHTML = ''; // Clear loading/previous content
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error); // Log the actual error for debugging
  }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
