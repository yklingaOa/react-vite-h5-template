
import {Suspense} from 'react';
import Routes from '@/router/index'

function App() {

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Routes></Routes>
      </Suspense>
    </>
  )
}

export default App
