import Head from 'next/head';
import React, { use, useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    sampe();
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
  };

  return (
    <>
      <h1>Test</h1>
    </>
  );
}
