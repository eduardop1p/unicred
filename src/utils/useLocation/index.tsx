'use client';

import { useCallback, useEffect, useState } from 'react';

import getClientLocation from '@/functions/getClientLocation';

export default function useLocation() {
  const [location, setLocation] = useState('');

  const handleGetLocation = useCallback(async () => {
    const locationRes = await getClientLocation();
    const formatedLocation = locationRes
      ? `${locationRes.city}, ${locationRes.region} - ${locationRes.country}`
      : 'Indisponivel';
    setLocation(formatedLocation);
  }, []);

  useEffect(() => {
    handleGetLocation();
  }, [handleGetLocation]);

  return location;
}
