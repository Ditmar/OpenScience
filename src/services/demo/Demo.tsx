interface MockData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function Demo({ posts }: { posts: MockData[] }) {
  return (
    <div>
      <h1>Demo</h1>
      <h2>Fetched Data:</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> (User ID: {item.userId}, Completed:{' '}
              {item.completed.toString()})
            </li>
          ))}
        </ul>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
}
