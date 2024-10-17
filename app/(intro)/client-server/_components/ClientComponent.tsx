'use client';

import React from 'react';

type Props = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent({ children, content, mutateData }: Props) {
  // Without "use client" we cannot use onClick, useState, useEffect, window.location etc
  return (
    <div className="border-2 border-red-500 p-4">
      ClientComponent
      {content}
      {children}
      <button
        onClick={async () => {
          const data = await mutateData();
          return alert(data);
        }}
      >
        Click
      </button>
    </div>
  );
}
