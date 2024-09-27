import React, { useState, useEffect } from 'react';
import present from '../../../public/svgs/present.svg';
import absent from '../../../public/svgs/absent.svg';

function AttendanceTableItem(props) {
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    props.onStatusChange(props.id, newStatus);
  };

  return (
    <tr>
      <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              id={props.id}
              className="form-checkbox"
              type="checkbox"
              onChange={props.handleClick}
              checked={props.isChecked}
            />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-sky-500">#{props.enrollmentNo}</div>
      </td>
      <td className="px-1 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`font-medium text-slate-800`}>{props.name}</div>
      </td>
      <td>
        <div className={`font-medium text-center text-slate-800`}>
          <img src={status === 'Present' ? present : absent} alt={status} />
        </div>
      </td>
      <td className="px-3 first:pl-5 last:pr-7 py-3 whitespace-nowrap w-px text-center">
        <div className="space-x-1">
          <div className="flex flex-row items-center -m-3">
            <div className="m-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`attendance-${props.id}`}
                  value="Present"
                  checked={status === 'Present'}
                  onChange={() => handleStatusChange('Present')}
                  className="form-radio"
                />
                <span className="text-sm ml-2">Present</span>
              </label>
            </div>
            <div className="m-2 pr-4">
              <label className="flex-rows items-center">
                <input
                  type="radio"
                  name={`attendance-${props.id}`}
                  value="Absent"
                  checked={status === 'Absent'}
                  onChange={() => handleStatusChange('Absent')}
                  className="form-radio"
                />
                <span className="text-sm ml-2 pr-2">Absent</span>
              </label>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default AttendanceTableItem;
