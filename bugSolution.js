// bugSolution.js
import { Suspense } from 'react';

export default async function Page() {
  const data = await fetchData().catch(error => {
    console.error('Error fetching data:', error);
    // Return fallback data or handle the error appropriately
    return { error: true, message: 'Failed to fetch data' }; 
  });
  
  if (data.error) {
    return <div>Error: {data.message}</div>;
  }

  return (
    <div>
      <h1>Data from server component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

async function fetchData() {
  // Simulate async data fetching with potential errors
  await new Promise(resolve => setTimeout(resolve, 1000));  // Simulate a delay
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

//Error handling with suspense for better user experience
export default function Page(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <DataFetcher/>
    </Suspense>
  )
}

function DataFetcher(){
  const {data, error} = useAsyncData();
  if(error){
    return <div>Error:{error}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}