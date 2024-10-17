'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { SearchIcon, SpinnerIcon } from './ui/icons';

export default function Search() {
  const searching = false;
  // const { q } = useSafeSearchParams('home');
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const router = useRouter();

  return (
    <form role="search">
      <input
        onChange={e => {
          router.push(`?q=${e.target.value}`);
        }}
        className="w-full pl-8 outline-offset-1"
        aria-label="Search contacts"
        name="q"
        defaultValue={q}
        placeholder="Search"
        type="search"
      />
      <div aria-hidden="true" className="absolute left-10 top-7">
        {searching ? (
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} className="text-gray-dark" />
          </div>
        ) : (
          <SearchIcon width={16} height={16} className="text-gray-dark" />
        )}
      </div>
    </form>
  );
}
