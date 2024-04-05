import React from "react";
import NavBar from "../Navbar/Navbar";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Register() {
  return (
    <div className="min-h-screen p-6  flex items-center justify-center font-RedHat ">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-black">Register</h2>
      

      <div className="bg-primary rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-white">
            <p className="font-medium text-lg  ">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label for="country">Country / region</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                  <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    
                  </button>
                  <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label for="state">State / province</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                  <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    
                  </button>
                  <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
              </div>

              {/* <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                  <label for="billing_same" className="ml-2">My billing address is different than above.</label>
                </div>
              </div> */}

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end  ">
                  <button className="bg-primary hover:bg-white border-2 hover:text-primary hover:border-primary hover:border-2  text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
  );
}
