import './App.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {


  const friendListFilter = ['Select Friend', 'Andy', 'Mandy', 'Shandy', 'Randy', 'Candy'];

  const currencyListFilter = ['Select Currency', 'USD', 'INR', 'BIT COIN'];

  const friendList = ['Andy', 'Mandy', 'Shandy', 'Randy', 'Candy'];
  const typeList = ['Cash', 'Online', 'Paytm'];
  const currencyList = ['USD', 'INR', 'BIT COIN'];



  const [tableData, setTableData] = useState([]);






  const [formData, setFormData] = useState({
    id: '',
    type: typeList[0],
    currency: currencyList[0],
    friend: friendList[0],
    filterFriend: friendListFilter[0],
    filterCurrency: currencyListFilter[0],
    name: '',
    date: '',
    amount: ''
  })


  const [errorForm, setErrorForm] = useState(
    {
      type: false,
      currency: false,
      friend: false,
      name: false,
      date: false,
      amount: false
    }
  )

  function addFriend(str) {
    friendList.push("hello");
  }

  function handleChange(event) {
    setFormData({ ...formData, type: event.target.value });
  }

  function handleChangeCurrency(event) {
    setFormData({ ...formData, currency: event.target.value });
  }
  function handleChangeFriend(event) {
    setFormData({ ...formData, friend: event.target.value });
  }


  function handleFilterChangeCurrency(event) {
    setFormData({ ...formData, filterCurrency: event.target.value });
  }
  function handleFilterChangeFriend(event) {
    setFormData({ ...formData, filterFriend: event.target.value });
  }


  const areErrors = () => {
    let hasNameError = false;
    let hasDateError = false;
    let hasAmountError = false;

    if (!formData.name) {
      hasNameError = true;
    }

    if (!formData.date) {
      hasDateError = true;
    }

    if (!formData.amount) {
      hasAmountError = true;
    }

    setErrorForm({
      ...errorForm,
      name: hasNameError,
      date: hasDateError,
      amount: hasAmountError,
    });

    return hasNameError || hasDateError || hasAmountError;
  }





  function deleteAndAdd(id) {
    let newTable = tableData.filter((item) => item.id !== id);



    let data = {
      id: formData.id,
      type: formData.type,
      currency: formData.currency,
      friend: formData.friend,
      name: formData.name,
      date: formData.date,
      amount: formData.amount
    }


    newTable.push(data);
    setTableData(newTable);
    setFormData({
      type: 'Cash',
      currency: 'USD',
      friend: 'Andy',
      filterFriend: 'Andy',
      filterCurrency: 'USD',
      name: '',
      date: '',
      amount: ''
    })
  }



  function submitAllData() {
    if (!areErrors()) {
      if (formData.id) {
        deleteAndAdd(formData.id);
      } else {
        let data = {
          id: uuidv4(),
          type: formData.type,
          currency: formData.currency,
          friend: formData.friend,
          name: formData.name,
          date: formData.date,
          amount: formData.amount
        }
        addToTable(data);
      }
    }
  }


  const addToTable = (data) => {
    let newTable = tableData;
    tableData.push(data);
    setTableData(newTable);
    setFormData({
      type: typeList[0],
      currency: currencyList[0],
      friend: friendList[0],
      filterFriend: friendListFilter[0],
      filterCurrency: currencyListFilter[0],
      name: '',
      date: '',
      amount: ''
    })
  }



  function deleteFromList(id) {
    let newTable = tableData.filter((item) => item.id !== id);
    setTableData(newTable);
  }

  function editFormList(id) {

    let editObject = tableData.filter((item) => item.id === id);
    setFormData(editObject[0]);

  }




  return (
    <div className="App w-full h-screen text-white bg-green-400">
      <h1 className='text-3xl'>Simple expense manager project</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col w-3/5 '>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>

                <tr className="  bg-inherit dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div>Add a new Item: </div>
                  </th>

                  <td className="px-6 py-4">
                    <div
                    // onClick={() => addFriend()}
                    >Add <span>+</span></div>
                  </td>
                </tr>




















                <tr className="   bg-inherit dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Type
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select onChange={handleChange} className="w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                {
                                  typeList.map((item) => (<option key={item} value={item}>{item}</option>))
                                }
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>

                  <td className="px-6 py-4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Add Friend
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select value={formData.friend} onChange={handleChangeFriend} className="w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                {
                                  friendList.map((item) => (<option key={item} value={item}>{item}</option>))
                                }
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr className="  bg-inherit dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Name
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder='What did you spend On?' name="" id="" className='w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600' />
                            </div>
                            <span className='redColor'>{errorForm.name == true ? "Please Enter Name" : ""}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>

                  <td className="px-6 py-4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="bg bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Date
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <input value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} type="date" name="" id="" className='w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600' />
                            </div>
                            <span className='redColor'>{errorForm.date == true ? "Please Select Date" : ""}</span>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr className="  bg-inherit dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Currency
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select onChange={handleChangeCurrency} className="w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                {
                                  currencyList.map((item) => (<option key={item} value={item}>{item}</option>))
                                }
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>

                  <td className="px-6 py-4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Amount
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <input value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} type="number" placeholder='How much?' name="" id="" className='w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600' />
                            </div>
                            <span className='redColor'>{errorForm.amount == true ? "Please Enter Amount" : ""}</span>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={submitAllData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-auto my-2 py-2 px-4 rounded-lg">
              {formData.id ? "Edit" : "Add a new expense"}
            </button>
          </div>




          <div className="relative overflow-x-auto">

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="  bg-inherit w-full dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Filter by Friend :
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select onChange={handleFilterChangeFriend} className="w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                {
                                  friendListFilter.map((item) => (<option key={item} value={item}>{item}</option>))
                                }
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                  <td className="px-6 py-4">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="  bg-inherit dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Currency
                          </th>
                          <td className="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select onChange={handleFilterChangeCurrency} className="w-full p-2.5 text-gray-500  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                {
                                  currencyListFilter.map((item) => (<option key={item} value={item}>{item}</option>))
                                }
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="relative overflow-x-auto">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Friends
                    </th>
                    <th scope="col" className="px-6 py-3">
                      date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      edit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody>


                  {
                    tableData && tableData.length > 0 ?


                      tableData.filter((item) =>

                        formData.filterFriend === 'Select Friend' ? true :

                          item.friend == formData.filterFriend


                      ).filter((item) =>

                        formData.filterCurrency === 'Select Currency' ? true :
                          item.currency == formData.filterCurrency
                      )


                        .map((item) => (

                          <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {item.type}
                            </th>
                            <td className="px-6 py-4">
                              {item.name}
                            </td>
                            <td className="px-6 py-4">
                              {item.friend}
                            </td>
                            <td className="px-6 py-4">
                              {item.date}
                            </td>
                            <td className="px-6 py-4">
                              {item.amount}
                            </td>
                            <td className="px-6 py-4" onClick={() => editFormList(item.id)}>
                              Edit
                            </td>
                            <td className="px-6 py-4" onClick={() => deleteFromList(item.id)}>
                              Delete
                            </td>
                          </tr>
                        ))
                      :
                      <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          No Data
                        </th>
                      </tr>
                  }
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
