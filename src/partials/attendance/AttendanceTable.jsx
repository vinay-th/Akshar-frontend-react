import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AttendanceTableItem from './AttendanceTableItem';

import DoughnutChart from '../../charts/DoughnutChart';

function AttendanceTable({ selectedItems }) {
  //   const { attendanceList, numberOfAttendance } = useSelector(
  //     (store) => store.attendanceStore
  //   );
  //   const dispatch = useDispatch();

  //   const [selectAll, setSelectAll] = useState(false);
  //   const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  //   const [editAttendanceVo, setEditAttendanceVo] = useState({});
  //   const [isCheck, setIsCheck] = useState([]);

  //   const presentAttendance = (e, student) => {
  //     e.stopPropagation();
  //     setFeedbackModalOpen(true);
  //     setEditAttendanceVo(student);
  //   };

  //   const absentAttendance = (e, student) => {
  //     e.stopPropagation();
  //     setFeedbackModalOpen(true);
  //     setEditAttendanceVo(student);
  //   };

  //   const handleSelectAll = () => {
  //     setSelectAll(!selectAll);
  //     setIsCheck(attendanceList.map((li) => li.id));
  //     if (selectAll) {
  //       setIsCheck([]);
  //     }
  //   };

  //   const handleClick = (e) => {
  //     const { id, checked } = e.target;
  //     setSelectAll(false);
  //     setIsCheck([...isCheck, id]);
  //     if (!checked) {
  //       setIsCheck(isCheck.filter((item) => item !== id));
  //     }
  //   };

  // useEffect(() => {
  //   selectedItems(isCheck);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isCheck]);

  const attendanceList = [
    {
      id: 1,
      enrollmentNo: 'EN001',
      name: 'John Doe',
      status: 'Present',
    },
    {
      id: 2,
      enrollmentNo: 'EN002',
      name: 'Jane Smith',
      status: 'Absent',
    },
    {
      id: 3,
      enrollmentNo: 'EN003',
      name: 'Mike Johnson',
      status: 'Present',
    },
    {
      id: 4,
      enrollmentNo: 'EN004',
      name: 'Emily Brown',
      status: 'Present',
    },
    {
      id: 5,
      enrollmentNo: 'EN005',
      name: 'Chris Wilson',
      status: 'Absent',
    },
  ];

  const presentCount = attendanceList.filter(
    (attendance) => attendance.status === 'Present'
  ).length;
  const absentCount = attendanceList.filter(
    (attendance) => attendance.status === 'Absent'
  ).length;

  const chartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'My Dataset',
        data: [presentCount, absentCount],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-3 py-4">
        <h2 className="font-semibold text-slate-800">
          Attendances{' '}
          {/* <span className="text-slate-400 font-medium">
            {' '}
            {numberOfAttendance}
          </span> */}
        </h2>
      </header>
      {/* <AttendanceEditModel
        feedbackModalOpen={feedbackModalOpen}
        setFeedbackModalOpen={setFeedbackModalOpen}
        editAttendanceVo={editAttendanceVo}
      ></AttendanceEditModel> */}
      <div>
        <div style={{ position: 'absolute', top: '-200px', left: '55%' }}>
          <DoughnutChart data={chartData} width={120} height={120} />
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    {/* <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </label> */}
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Enrollment no.</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Manual Attendance
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {attendanceList.map((attendance) => {
                return (
                  <AttendanceTableItem
                    key={attendance.id}
                    id={attendance.id}
                    enrollmentNo={attendance.enrollmentNo}
                    name={attendance.name}
                    status={attendance.status}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}

export default AttendanceTable;
