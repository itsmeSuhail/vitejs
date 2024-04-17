import React from 'react'

const Tables = () => {
 const arr=   [
        {
          "id": 1,
          "name": "John",
          "email": "johndoe@gmail.com",
          "password": "password"
        },
        {
          "id": 2,
          "name": "Jane",
          "email": "janedoe@gmail.com",
          "password": "password"
        },
        {
          "id": 3,
          "name": "Jim",
          "email": "jimdoe@gmail.com",
          "password": "password"
        },
        {
          "id": 4,
          "name": "Judy",
          "email": "judydoe@gmail.com",
          "password": "password"
        },
        {
          "id": 5,
          "name": "Joe",
          "email": "joedoe@gmail.com",
          "password": "password"
        },
        {
          "id": 6,
          "name": "Jay",
          "email": "jaydoe@gmail.com",
          "password": "password"
        },
        {
          "id": 7,
          "name": "Jill",
          "email": "jilledoe@gmail.com",
          "password": "password"
        },
        {
          "id": 8,
          "name": "Joseph",
          "email": "josephdoe@gmail.com",
          "password": "password"
        },
        {
          "id": 9,
          "name": "Jacqueline",
          "email": "jacquelinedoe@gmail.com",
          "password": "password"
        },
        {
          "id": 10,
          "name": "Jessica",
          "email": "jessicadoe@gmail.com",
          "password": "password"
        }
      ]
  return <>
  <div className="relative overflow-auto">
    <table className="w-full text-sm border text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope='col' className='px-6 py-3'>
product name
          </th>
          <th scope='col' className='hidden sm:table-cell px-6 py-3'>
Email
          </th>
          <th scope='col' className='hidden lg:table-cell px-6 py-3'>
passowrd
          </th>
          <th scope='col' className='px-6 py-3'>
Edit
          </th>
          <th scope='col' className='px-6 py-3'>
Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white
        border-b
        ">
          <td scope='row' className="px-6 py-4">
            babu
          </td>
          <td scope='row' className="hidden sm:table-cell px-6 py-4">
            spidy12k@gmai.com
          </td>
          <td scope='row' className="hidden lg:table-cell px-6 py-4">
            2323kjd
          </td>
          <td scope='row' className="px-6 py-4">
            Edit
          </td>
          <td scope='row' className="px-6 py-4">
            Delete
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </>
}

export default Tables