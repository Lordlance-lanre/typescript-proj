export type User = {
    id: number;
    name: string;
    email: string;
  };
  
  export const data: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Jane Smart', email: 'janet@example.com' }
  ];
  
  export const columns = [
    { header: 'ID', accessor: 'id' as const },
    { header: 'Name', accessor: 'name' as const },
    { header: 'Email', accessor: 'email' as const },
    { header: 'Username', accessor: 'email' as const },
  ];