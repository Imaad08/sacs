import { Suspense } from 'react';
import Receipt from './receipt'; 

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Receipt />
    </Suspense>
  );
}
