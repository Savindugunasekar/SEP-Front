import React, { useState } from "react";

const OrphanageForm = () => {
  const [orphanageDetails, setOrphanageDetails] = useState({
    orphanagename: '',
    address: '',
    capacity: 0,
    tel: '',
    facilities: '',
    funding: '',
    headname: '',
    email: ''
  });

const detailHandler = (e)=>{
  setOrphanageDetails({...orphanageDetails,[e.target.name]:e.target.value})
}

  const addOrphanage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/addOrphanage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orphanageDetails)
      });

      if (response.ok) {
        console.log('Orphanage added successfully');
        
        setOrphanageDetails({
          orphanagename: '',
          address: '',
          capacity: 0,
          tel: '',
          facilities: '',
          funding: '',
          headname: '',
          email: ''
        });
      } else {
        console.error('Failed to add orphanage');
        
      }
    } catch (error) {
      console.error('An error occurred:', error);
      
    }
  };

  return (
    <div className="mx-10">
      <h1 className="text-2xl font-bold text-center my-10 relative">
        Submit New Orphanage
        <span className="block w-[100px] h-1 bg-primary mx-auto mt-3"></span>
      </h1>

      <form className="flex flex-col gap-5" onSubmit={addOrphanage}>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="orphanagename">
              Orphanage Name:
            </label>
            <input
              className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              type="text"
              onChange={detailHandler}
              id="orphanagename"
              name="orphanagename"
              value={orphanageDetails.orphanagename}
              required
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="address">
              Address:
            </label>
            <input
              className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              type="text"
              onChange={detailHandler}
              id="address"
              name="address"
              value={orphanageDetails.address}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="capacity">
              Capacity:
            </label>
            <input
              className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              type="number"
              onChange={detailHandler}
              id="capacity"
              name="capacity"
              value={orphanageDetails.capacity}
              min="0"
              required
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="tel">
              Tel Number:
            </label>
            <input
              className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              type="tel"
              onChange={detailHandler}
              id="tel"
              name="tel"
              value={orphanageDetails.tel}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="facilities">
              Facilities:
            </label>
            <textarea
              className="w-full bg-gray-100 h-[150px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              id="facilities"
              onChange={detailHandler}
              name="facilities"
              value={orphanageDetails.facilities}
              required
            ></textarea>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="funding">
              Funding Sources:
            </label>
            <textarea
              className="w-full bg-gray-100 h-[150px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              id="funding"
              onChange={detailHandler}
              name="funding"
              value={orphanageDetails.funding}
              required
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="headname">
              Name of Orphanage Head:
            </label>
            <input
              className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              type="text"
              id="headname"
              onChange={detailHandler}
              name="headname"
              value={orphanageDetails.headname}
              required
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-md font-semibold mb-3" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full bg-gray-100 h-[40px] rounded-md px-4 py-3 border-none focus-visible:ring-primary !important"
              type="email"
              id="email"
              onChange={detailHandler}
              name="email"
              value={orphanageDetails.email}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-white font-semibold mb-10 w-1/4 py-3 hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OrphanageForm;
