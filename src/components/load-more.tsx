'use client';

import { TBeer } from '@/types';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Spinner } from './ui/spinner';
import { fetchBeers } from '@/app/actions/fetch-products';
import { Beers } from './beers';

export function LoadMore() {
  const [beers, setBeers] = useState<TBeer[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreBeers = async () => {
    const nextPage = pagesLoaded + 1;
    const newBeers = (await fetchBeers(nextPage)) ?? [];

    setBeers((prevBeers: TBeer[]) => [...prevBeers, ...newBeers]);
    setPagesLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      console.log('scrolled to the end');
      loadMoreBeers();
    }
  }, [inView]);

  return (
    <>
      <Beers beers={beers} />
      <div
        className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3'
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
