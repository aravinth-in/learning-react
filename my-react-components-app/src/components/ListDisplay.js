const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

const products = [
  { id: 101, name: 'Laptop', price: 1200 },
  { id: 102, name: 'Mouse', price: 25 },
  { id: 103, name: 'Keyboard', price: 75 },
];

// A simple ProductItem component to render each product
const ProductItem = ({ product }) => { // Using destructuring for props
  return (
    <li style={{ marginBottom: '5px' }}>
      <strong>{product.name}</strong> - ${product.price}
    </li>
  );
};

const ListDisplay = () => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f5f5dc'
    }}>
      <h2>List Rendering</h2>

      {/* --- Example 1: Simple List of Strings with Index as Key (less ideal for dynamic lists) --- */}
      <h3>Fruits List (Index as Key - Use with Caution)</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}> {/* Using index as key. OK if list is static and never reordered/filtered */}
            {fruit}
          </li>
        ))}
      </ul>

      {/* --- Example 2: List of Objects with Unique ID as Key (Recommended) --- */}
      <h3>Products List (Unique ID as Key - Best Practice)</h3>
      <ul>
        {products.map((product) => (
          // IMPORTANT: Use product.id as the key, as it's unique and stable
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {/* --- Example 3: List with Inline Component Definition --- */}
      <h3>Inline User List</h3>
      {(() => { // Using an IIFE to define data and map within JSX if needed
        const users = [
          { id: 'u1', name: 'Alice', role: 'Admin' },
          { id: 'u2', name: 'Bob', role: 'Editor' },
          { id: 'u3', name: 'Charlie', role: 'Viewer' },
        ];
        return (
          <ul>
            {users.map((user) => (
              <li key={user.id}> {/* Unique ID is crucial here */}
                {user.name} ({user.role})
              </li>
            ))}
          </ul>
        );
      })()}

      {/* --- Example 4: Simple Dropdown (Select/Option) --- */}
      <h3>Select Option List</h3>
      <select style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
        {fruits.map((fruit, index) => (
          <option key={index} value={fruit.toLowerCase()}>
            {fruit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListDisplay;