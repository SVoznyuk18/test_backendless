// import React, { Suspense, lazy, memo } from 'react';

// function DynamicLoader({ path }) {
//   const LazyComponent = lazy(() => import(path));  //Cannot find module
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </Suspense>
//   );
// }

// export default memo(DynamicLoader);