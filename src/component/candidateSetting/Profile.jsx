import React, { useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi';
import { HiOutlineUserCircle } from "react-icons/hi";

function Profile() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setImage(URL.createObjectURL(file));
    } else {
      alert('Only PNG or JPG formats are supported.');
    }
  };
  return (
    <div>
      <div className='py-4'>
        <p className='font-medium text-[18px] text-[#1C2638]'>Basic Information</p>
        <p className='font-normal text-[16px] text-[#A0A0A0]'>This information will be displayed publicly.</p>
      </div>
      {/* file upload */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1'>Profile Photo</div>
        <div className='flex-1 flex flex-col md:flex-row items-center gap-6'>
          <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
            {image ? (
              <img src={image} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <HiOutlineUserCircle className='w-full h-full text-[#A0A0A0]' />
            )}
          </div>
          <label
            htmlFor="file-upload"
            className="cursor-pointer w-64 h-32 border-2 border-dashed border-[#4640DE] rounded-md flex flex-col items-center justify-center text-center hover:bg-purple-50 transition"
          >
            <FiUploadCloud className="text-[#4640DE] text-3xl mb-2" />
            <p className="text-[16px] text-[#A0A0A0]">
              <span className="text-blue-600 font-medium">Click to replace</span> or drag and drop<br />
              PNG or JPG (max. 400 x 400px)
            </p>
            <input
              type="file"
              id="file-upload"
              accept=".png, .jpg, .jpeg"
              className="hidden"
              onChange={handleImageChange}

            />
          </label>
        </div>
      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>
      {/* candidate personal info */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1'>Personal Details</div>
        <div className='flex-1'>
          <form action="" className=' grid gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter full name'
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your email address'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Phone Number'
                />
              </div>
            </div>


            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Date of Birth</label>
                <input
                  type="Date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your email address'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Gender</label>
                <select id="" className='border border-[#DEE0E4] p-3 font-normal text-[14px] text-[#1E283C]'>
                  <option value="">Enter Your Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                rows={5}
                name=""
                id=""
                className='border w-full border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0] resize-none'
                placeholder='Terms and conditions goes here...'
              />
              <div className='flex justify-between'>
                <p className='text-[#A0A0A0] font-normal text-[14px]'>Minimum 250 characters</p>
                <p className='font-normal text-[14px] text-[#1C2638]'>0/500</p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>
      {/* address*/}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1'>Address Information</div>
        <div className='flex-1'>
          <form action="" className='grid gap-6'>
            
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Country*</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your country'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">City/Town*</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your city'
                />
              </div>
            </div>

            
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">State</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your state'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Pin Code</label>
                <input
                  type="number"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Pin Code'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Address line1</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter address line1'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Address line2 (Optional)</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter address line2'
              />
            </div>

            <div className='flex justify-end flex-wrap gap-2.5'>
              <button className='border border-[#C6C4F5] text-[#4640DE] font-medium text-[18px] px-8 py-2 rounded-xl cursor-pointer'>Cancel</button>
              <button className='border bg-[#4640DE] text-white font-medium text-[18px] px-8 py-2 rounded-xl cursor-pointer'>Save Account Setting</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Profile
