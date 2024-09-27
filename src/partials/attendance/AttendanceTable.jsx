import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AttendanceTableItem from './AttendanceTableItem';

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
      course: 'Computer Science',
      batch: '2023A',
      status: 'Present',
    },
    {
      id: 2,
      enrollmentNo: 'EN002',
      name: 'Jane Smith',
      course: 'Electrical Engineering',
      batch: '2023B',
      status: 'Absent',
    },
    {
      id: 3,
      enrollmentNo: 'EN003',
      name: 'Mike Johnson',
      course: 'Mechanical Engineering',
      batch: '2023A',
      status: 'Present',
    },
    {
      id: 4,
      enrollmentNo: 'EN004',
      name: 'Emily Brown',
      course: 'Civil Engineering',
      batch: '2023B',
      status: 'Present',
    },
    {
      id: 5,
      enrollmentNo: 'EN005',
      name: 'Chris Wilson',
      course: 'Information Technology',
      batch: '2023A',
      status: 'Absent',
    },
  ];

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
                  <div className="font-semibold text-left">Course</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Batch</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Attendance</div>
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
                    course={attendance.course}
                    batch={attendance.batch}
                    status={attendance.status}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceTable;
