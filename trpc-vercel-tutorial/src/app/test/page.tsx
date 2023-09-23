"use client"

import { useEffect, useState } from 'react';

export default function Page() {
  const [dataa, setData] = useState(null);
  useEffect(() => {
    sampe();
    console.log(dataa);
  }, []);

  const sampe = async () => {
    const response = await fetch('/api/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // レスポンスをJSONとしてパース
    const data = await response.json();
    console.log(data);
    setData({...data});
  };

  return (
    <main>
      <h1>Test</h1>
      <div>{JSON.stringify(dataa)}</div>
    </main>
  );
}
