import React, { useState, useEffect } from 'react';

function RecentLectureTableItem(props) {
  const [status, setStatus] = useState(props.status);
  const [attendanceStatus, setAttendanceStatus] = useState(
    props.attendanceStatus
  );

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    props.onStatusChange(props.id, newStatus);
  };

  const statusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-emerald-100 text-emerald-600';
      case 'Completed':
        return 'bg-rose-100 text-rose-500';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  return (
    <tr>
      <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={'font-medium text-sky-500'}>{props.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-black-500">
          {new Date(props.date).toLocaleDateString()}
        </div>
      </td>
      <td>
        <div className="font-medium text-left text-slate-800">
          {new Date(props.lectureStartTime).toLocaleTimeString()}{' '}
        </div>
      </td>
      <td>
        <div className="font-medium text-left text-slate-800">
          {props.lectureStartTime}
        </div>
      </td>
      <td>
        <div className="font-medium text-left text-slate-800">
          {props.lectureEndTime}
        </div>
      </td>
      <td>
        <div className="font-medium text-left text-slate-800">
          {props.lectureStatus}
        </div>
      </td>

      <td>
        <div>
          {status === 'In Progress' ? (
            <div
              className={`font-medium text-center text-white bg-green-500 hover:bg-emerald-700 px-1 py-1 rounded-md w-40`}
            >
              <button>End Lecture</button>
            </div>
          ) : (
            <div
              className={`font-medium text-center text-white bg-gray-400 px-1 py-1 rounded-md w-40`}
            >
              - -
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default RecentLectureTableItem;
