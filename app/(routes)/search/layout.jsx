import React from 'react'
import CategorySideBar from './_components/CategorySideBar';

function layout ({ children }) {
  return (

    <div>
        <div className="grid grid-cols-4">
            <div>
    {/* <Side Category Nav bar /> */}
            <CategorySideBar />

            </div>
            <div className='col-span-3'>
                {children}
            </div>

        </div>
        </div>
  )
}

export default layout;