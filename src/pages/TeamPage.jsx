import React, { useState } from 'react';
import Section from '../components/Section';
import teamData from '../components/teamData.json';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import buggimg from "../assets/images/Group 7.svg";

const TeamPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('people');

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [location.state]);

  const renderPeople = () => {
    return (
      <div className="flex flex-col items-center m-5">
        <p className="text-center mb-12 max-w-2xl">
          {teamData.people.description}
        </p>
        <div className="flex flex-wrap justify-center mb-16 gap-48">
          {teamData.people.leadership.map((member, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <p className="font-bold mb-3">{member.role}</p>
              <div className="bg-gray-200 rounded-full w-32 h-32 mb-3"></div>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
        {teamData.people.teams.map((team, index) => (
          <div key={index} className="mb-16 w-full">
            <h2 className="text-center text-2xl font-bold mb-8">{team.teamName}</h2>
            <div className="flex flex-wrap justify-center mb-8 gap-48">
              {team.members.slice(0, 3).map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gray-200 rounded-full w-32 h-32 mb-3"></div>
                  <p>{member.name}</p>
                  {idx === 0 && <p className="font-bold mb-3">Head</p>}
                </div>
              ))}
            </div>
            {team.members.length > 3 && (
              <div className="flex flex-wrap justify-center gap-48">
                {team.members.slice(3).map((member, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-gray-200 rounded-full w-32 h-32 mb-3"></div>
                    <p>{member.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderBuggy = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center mb-8">
          <img src={buggimg} alt="Buggy Car" className="h-[300px] lg:h-[600px] w-auto" />
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-40 mt-10">
          {teamData.buggy.performance.map((perf, index) => (
            <div key={index} className="text-center">
              {perf.value.includes('@') ? (
                <>
                  <p className="text-xl font-extrabold">{perf.value.split('@')[0]}@</p>
                  <p className="text-xl">{perf.value.split('@')[1]}</p>
                </>
              ) : (
                <p className="text-xl font-extrabold">{perf.value}</p>
              )}
              <p className="text-sm mt-2">{perf.label}</p>
              {perf.label === "Transmission Type" && <p className="text-sm">Type</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0033CC] text-white">
      <Section>
        <h5 className="text-5xl text-center font-bold mb-8">Meet the Team</h5>
        <div className="flex justify-center mb-8">
          <div className="flex items-center text-xl font-bold">
            <button
              className={`px-4 py-2 relative ${
                activeTab === 'people' ? 'text-white' : 'text-gray-300'
              }`}
              onClick={() => setActiveTab('people')}
            >
              The People
              {activeTab === 'people' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
              )}
            </button>
            <div className="text-white mx-2 font-extrabold">|</div>
            <button
              className={`px-4 py-2 relative ${
                activeTab === 'buggy' ? 'text-white' : 'text-gray-300'
              }`}
              onClick={() => setActiveTab('buggy')}
            >
              The Buggy
              {activeTab === 'buggy' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
              )}
            </button>
          </div>
        </div>
        {activeTab === 'people' ? renderPeople() : renderBuggy()}
      </Section>
      
      {/* Separator */}
      <div className="h-[1px] w-full bg-[#0033CC] flex justify-center">
        <div className="w-full bg-white h-[1px] opacity-50"></div>
      </div>
    </div>
  );
};

export default TeamPage;