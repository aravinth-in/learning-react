const TableRow = ({ data }) => {
  return (
    // Notice: We do NOT wrap these <td> elements in a <div> here.
    // If we did, it would be invalid HTML inside a <tr>.
    // So, we don't need a fragment here as <tr> is the single root.
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.value}</td>
    </tr>
  );
};

// A component that renders multiple TableRow components
const DataTable = () => {
  const tableData = [
    { id: 1, name: 'Alice', value: 100 },
    { id: 2, name: 'Bob', value: 150 },
    { id: 3, name: 'Charlie', value: 200 },
  ];

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    }}>
      <h2>Data Table (Valid HTML Structure)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            // Each TableRow is a <tr>, which is a valid child of <tbody>
            // We need a key here for list rendering
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// This component shows how to use Fragments when a component needs to return multiple siblings
// but you don't want an extra wrapper div.
const MultiChildComponent = () => {
  return (
    // Using the shorthand fragment <> </>
    <>
      <h3 style={{ color: '#0056b3' }}>Fragment Example: Header & Paragraph</h3>
      <p>This paragraph is a sibling to the header.</p>
      <p>Both are wrapped in a fragment, so no extra div appears in the DOM.</p>
    </>
  );
};


const FragmentExample = () => {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            margin: '20px',
            borderRadius: '8px',
            backgroundColor: '#e6ffe6',
        }}>
            <h2>React Fragments in Action</h2>
            <DataTable />
            <MultiChildComponent />
        </div>
    );
};

export default FragmentExample;