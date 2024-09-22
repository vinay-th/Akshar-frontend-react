import ModalBasic from "../../components/ModalBasic";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { checkForDepartmentIdAvail } from "../../apis/admin/departments";
import { getAllTeacherByDepartment } from "../../apis/admin/teacher";

const DepartmentEditModel = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    const fetchTeachers = async ({ id, departmentId }) => {
      const response = await getAllTeacherByDepartment({ id, departmentId });
      console.log(response);
    };

    if (props.editDepartmentVo.departmentId) {
      fetchTeachers({
        id: props.editDepartmentVo.id,
        departmentId: props.editDepartmentVo.departmentId,
      });
      // console.log(response);
      setValue("departmentId", props.editDepartmentVo.departmentId);
      setValue("departmentName", props.editDepartmentVo.departmentName);
      setValue(
        "departmentShortName",
        props.editDepartmentVo.departmentShortName
      );
    }
    // You can do the same for other fields like this:
    // setValue('field_name', editStudent.some_other_field);
  }, [props.editDepartmentVo]);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      // const response = await registerUser(
      //     data.email,
      //     data.username,
      //     data.password
      // );
      // if (response.status) {
      //     setRegisterUsername(response.object.username);
      //     setRegisterOtpExp(response.object.timeStamp);
      //     navigate("/confirmRegistration");
      // }
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ModalBasic
      id="edit-department-model"
      modalOpen={props.feedbackModalOpen}
      setModalOpen={props.setFeedbackModalOpen}
      title="Edit Department"
    >
      {/* Modal content */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-5 py-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Department Unique Id<span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                className="form-input w-full px-2 py-1"
                type="text"
                required
                {...register("departmentId", {
                  required: "Department Id is required.",
                  validate: async (value) => {
                    let response = await checkForDepartmentIdAvail(value);
                    return response.status || "Department Id already in use.";
                  },
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Invalid Department Id",
                  },
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name<span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                className="form-input w-full px-2 py-1"
                type="text"
                required
                {...register("departmentName", {
                  required: "Department Name is  Required.",
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Short Name<span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                className="form-input w-full px-2 py-1"
                type="text"
                required
                {...register("departmentShortName", {
                  required: "Department ShortName is  Required.",
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Choose Department Head<span className="text-rose-500">*</span>
              </label>
              <select
                id="country"
                className="form-select"
                {...register("teacherVo", {
                  required: "Department ShortName is  Required.",
                })}
              >
                <option>Choose Teacher Id</option>
                <option>USA</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
        </div>
        {/* Modal footer */}
        <div className="px-5 py-4 border-t border-slate-200">
          <div className="flex flex-wrap justify-end space-x-2">
            <button
              className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
              onClick={(e) => {
                e.stopPropagation();
                props.setFeedbackModalOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              type={"submit"}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </ModalBasic>
  );
};

export default DepartmentEditModel;
