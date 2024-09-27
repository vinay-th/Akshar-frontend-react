import React from 'react';
import ClassroomTableItem from './ClassroomTableItem.jsx';

function ClassroomTable() {
  //   const { classroomList, numberOfClassroom } = useSelector(
  //     (store) => store.classroomStore
  //   );
  //   const dispatch = useDispatch();

  //   const [selectAll, setSelectAll] = useState(false);
  //   const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  //   const [editClassroomVo, setEditClassroomVo] = useState({});
  //   const [isCheck, setIsCheck] = useState([]);

  //   const presentClassroom = (e, student) => {
  //     e.stopPropagation();
  //     setFeedbackModalOpen(true);
  //     setEditClassroomVo(student);
  //   };

  //   const absentClassroom = (e, student) => {
  //     e.stopPropagation();
  //     setFeedbackModalOpen(true);
  //     setEditClassroomVo(student);
  //   };

  //   const handleSelectAll = () => {
  //     setSelectAll(!selectAll);
  //     setIsCheck(classroomList.map((li) => li.id));
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

  const classroomList = [
    {
      id: 1,
      name: 'Classroom 1',
      topLeftLatitude: '23.780884',
      topLeftLongitude: '90.356835',
      topRightLatitude: '23.780884',
      topRightLongitude: '90.356835',
      bottomLeftLatitude: '23.780884',
      bottomLeftLongitude: '90.356835',
      bottomRightLatitude: '23.780884',
      bottomRightLongitude: '90.356835',
    },
    {
      id: 2,
      name: 'Classroom 2',
      topLeftLatitude: '23.780884',
      topLeftLongitude: '90.356835',
      topRightLatitude: '23.780884',
      topRightLongitude: '90.356835',
      bottomLeftLatitude: '23.780884',
      bottomLeftLongitude: '90.356835',
      bottomRightLatitude: '23.780884',
      bottomRightLongitude: '90.356835',
    },
    {
      id: 3,
      name: 'Classroom 3',
      topLeftLatitude: '23.780884',
      topLeftLongitude: '90.356835',
      topRightLatitude: '23.780884',
      topRightLongitude: '90.356835',
      bottomLeftLatitude: '23.780884',
      bottomLeftLongitude: '90.356835',
      bottomRightLatitude: '23.780884',
      bottomRightLongitude: '90.356835',
    },
    {
      id: 4,
      name: 'Classroom 4',
      topLeftLatitude: '23.780884',
      topLeftLongitude: '90.356835',
      topRightLatitude: '23.780884',
      topRightLongitude: '90.356835',
      bottomLeftLatitude: '23.780884',
      bottomLeftLongitude: '90.356835',
      bottomRightLatitude: '23.780884',
      bottomRightLongitude: '90.356835',
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-3 py-4">
        <h2 className="font-semibold text-slate-800">
          Classrooms{' '}
          {/* <span className="text-slate-400 font-medium">
            {' '}
            {numberOfClassroom}
          </span> */}
        </h2>
      </header>
      {/* <ClassroomEditModel
        feedbackModalOpen={feedbackModalOpen}
        setFeedbackModalOpen={setFeedbackModalOpen}
        editClassroomVo={editClassroomVo}
      ></ClassroomEditModel> */}
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
                  <div className="font-semibold text-left">Serial No</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Classroom Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Top Left Latitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Top Left Longitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Top Right Latitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Top Right Longitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Bottom Left Latitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Bottom Left Longitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Bottom Right Latitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Bottom Right Longitude
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Delete</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {classroomList.map((classroom) => {
                return (
                  <ClassroomTableItem
                    key={classroom.id}
                    id={classroom.id}
                    name={classroom.name}
                    topLeftLatitude={classroom.topLeftLatitude}
                    topLeftLongitude={classroom.topLeftLongitude}
                    topRightLatitude={classroom.topRightLatitude}
                    topRightLongitude={classroom.topRightLongitude}
                    bottomLeftLatitude={classroom.bottomLeftLatitude}
                    bottomLeftLongitude={classroom.bottomLeftLongitude}
                    bottomRightLatitude={classroom.bottomRightLatitude}
                    bottomRightLongitude={classroom.bottomRightLongitude}
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

export default ClassroomTable;
