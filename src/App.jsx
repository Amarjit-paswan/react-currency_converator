import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-3 shadow bg-white rounded">
          <form action="" className=''>
            {/* from box container  */}
            <div className="box d-flex gap-2 ">
              <div className="input_box d-flex flex-column justify-content-start align-items-start">
                <label htmlFor="" className="form-label fw-bold">From</label>
                <input type="number" name="" id="" className="form-control" placeholder='Enter Value' />
              </div>
              <div className="current_select_box">
                <label htmlFor="" className="form-label fw-bold">Select Currency</label>
                <select name="" id="" className="form-select">
                  <option value="">INR</option>
                </select>
              </div>

             
              
            </div>
            {/* swap box container */}
            <div className="swap_box d-flex justify-content-center align-items-center">
              <button type='button' className="swapItem fs-2 border-0 bg-transparent py-0 my-2 px-3">🔀</button>
            </div>
            {/* to box container  */}
            <div className="box d-flex gap-2 ">
              <div className="input_box d-flex flex-column justify-content-start align-items-start">
                <label htmlFor="" className="form-label fw-bold">To</label>
                <input type="number" name="" id="" className="form-control" placeholder='Enter Value' />
              </div>
              <div className="current_select_box">
                <label htmlFor="" className="form-label fw-bold">Select Currency</label>
                <select name="" id="" className="form-select">
                  <option value="">INR</option>
                </select>
              </div>

              

             
              
            </div>
            {/* submit btn container  */}
            <div className="d-grid mt-3">
              <button type='submit' className="btn btn-success">Convert USD to INR</button>
            </div>

          </form>
      </div>
    </>
  )
}

export default App
