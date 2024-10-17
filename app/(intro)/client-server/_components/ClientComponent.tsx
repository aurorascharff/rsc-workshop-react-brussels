'use client';

import React from 'react';

export default function ClientComponent() {
  return (
    <div className="border-2 border-red-500 p-4">
      ClientComponent
      <button
        onClick={() => {
          return alert('ServerComponent button clicked');
        }}
      >
        Click
      </button>
    </div>
  );
}
