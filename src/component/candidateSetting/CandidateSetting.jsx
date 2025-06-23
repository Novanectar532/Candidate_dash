import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Profile from './Profile';
import Resume from './Resume';
import Login from './Login';

function CandidateSetting() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'profile';
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <section className='p-8'>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Setting</h1>
      <div className='flex gap-4 p-4 border-b-1 border-[#DEE0E4]'>
        {['profile', 'resume', 'login'].map((tab) => (
          <p
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`cursor-pointer font-semibold text-[16px] ${
              activeTab === tab
                ? 'border-[#4640DE] text-[#4640DE] border-b-2'
                : 'border-b-0 text-[#A0A0A0]'
            }`}
          >
            {tab === 'profile' && 'My Profile'}
            {tab === 'resume' && 'Resume'}
            {tab === 'login' && 'Login Details'}
          </p>
        ))}
      </div>

      {activeTab === 'profile' && <Profile />}
      {activeTab === 'resume' && <Resume />}
      {activeTab === 'login' && <Login />}
    </section>
  );
}

export default CandidateSetting;
