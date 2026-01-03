Mini Restaurant Management App - (Role Based)
Create a React application with login, protected routes, and restaurant management, based on user roles.

⚠️ Important Instructions
Use minimum styling

Do not ignore styling completely
Do not waste too much time on design
Main focus should be on React core concepts

Logic and correct implementation are more important than UI

🔐 Login & Authentication
Login Page
Create a login page with the following valid credentials:

Role	Email	Password
Admin	admin@gmail.com	admin1234
Customer	customer@gmail.com	customer1234
Login Rules
If email or password is wrong, show a proper alert

After successful login:

Admin → redirect to /admin/dashboard
Customer → redirect to /customers/dashboard
Protected Routes
Dashboards should not open without login
Admin routes → admin only
Customer routes → customer only
🍽️ Restaurant Data Management
Local Storage
All restaurant data must be stored in localStorage
Key name: evalData
UI should always render data from localStorage
👤 Admin Dashboard (/admin/dashboard)
Sidebar – Add Restaurant Form
Admin dashboard should have a sidebar with a form to add restaurant data.

Restaurant Data Format
Each restaurant object should look like this:

{
  "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
}
Form Requirements
restaurantID should be auto-generated

type should be a select dropdown with these options:

Rajasthani
Gujarati
Mughlai
Jain
Thai
North Indian
South Indian
parkingLot should be selected using a select dropdown

Image URL should be pre-filled with the given image link

Add Restaurant
On clicking Add:

Save data in localStorage
Re-render updated restaurant list in UI
🖼️ Restaurant Cards (Admin & Customer)
Display restaurants as cards

Each card should show:

Restaurant image
Name
Address
Type
Parking availability
✏️ Update Restaurant (Admin Only)
Admin should see an Update button on each card
Clicking Update should navigate to:
/admin/restaurants/update
Update Page
Show a form with pre-filled restaurant data

Admin can edit any field

On clicking Update:

Update data in localStorage
Redirect back to /admin/dashboard
Updated data should be reflected immediately in UI

🗑️ Delete Restaurant (Admin Only)
Admin should see a Delete button on each card

Clicking Delete should:

Remove restaurant from localStorage
Re-render updated list immediately
👤 Customer Dashboard (/customers/dashboard)
Customer should see only restaurant cards
No add, update, or delete options
Customer should see updated data after refresh
🔎 Search & Filters (Admin & Customer)
All controls should be inside a Navbar.

Filters
Filter by restaurant type
Filter by parking availability
Search Bar
Search by restaurant name or address
Partial search should work
Search input should be focused automatically when component loads (useRef)
⚠️ Handle Edge Cases Properly (Second Priority Task)
This section carries minimum weightage in the evaluation but try to implement.

Empty form should not be submitted while:

Adding a restaurant
Updating a restaurant
Clear the form after successful restaurant addition

Use confirm dialog (confirm) before:

Updating a restaurant
Deleting a restaurant (Example: “Are you sure you want to delete?”)
Show alert messages after:

Successful addition
Successful update
Successful deletion
⚙️ React Concepts to Use
You must use:

useState
useEffect
useRef
Context API
React Router
Conditional rendering
Clean and reusable components (eg: Dashboard Page with proper props)