import React, { useState, useEffect } from 'react';
import RecentLectureTableItem from './RecentLectureTableItem.jsx';
import { getLecturesForStudent } from '../../apis/student/attendLecture.js';

function RecentLecturesContainer() {
  const [lectures, setLectures] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch lectures based on studentId
  const fetchLectures = async () => {
    setLoading(true);
    setError(null);
    let id = localStorage.getItem('id');

    try {
      const response = await getLecturesForTeacher({ id });
      if (response.status) {
        setLectures(response.body.lectureDto || []); // Default to an empty array
      } else {
        setError('Failed to fetch lectures.');
      }
    } catch (error) {
      setError('Error occurred while fetching lectures.');
    } finally {
      setLoading(false);
    }
  };

  // Set up interval to fetch data every 5 seconds
  useEffect(() => {
    // Initial fetch
    fetchLectures();

    // Set up interval
    const intervalId = setInterval(() => {
      fetchLectures();
    }, 5000); // Fetch every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures it runs once on mount and sets the interval

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-3 py-4">
        <h2 className="font-semibold text-slate-800">
          Attendances{' '}
          <span className="text-slate-400 font-medium">
            ({lectures.length} lectures)
          </span>
        </h2>
      </header>

      {/* Display loading or error message */}
      {loading ? (
        <p className="px-3 py-4">Loading lectures...</p>
      ) : error ? (
        <p className="px-3 py-4 text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"></th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Lecture Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Time</div>
                </th>

                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Start Time</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">End Time</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {lectures.length > 0 ? (
                lectures.map((lecture) => (
                  <RecentLectureTableItem
                    key={lecture.id}
                    id={lecture.id}
                    name={lecture.subjectName}
                    date={lecture.lectureStartTime}
                    startTime={lecture.lectureStartTime}
                    endTime={lecture.lectureEndTime}
                    status={lecture.lectureStatus}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-3 py-4 text-center">
                    No lectures available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RecentLecturesContainer;
