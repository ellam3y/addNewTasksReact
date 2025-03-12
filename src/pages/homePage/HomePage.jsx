import { useRef, useState } from "react";
import "./HomePage.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
export default function HomePage() {
  const [task, setTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const taskName = useRef();
  const taskDescription = useRef();
  const taskDate = useRef();
  const taskTime = useRef();

  let AddNewTask = (e) => {
    e.preventDefault();
    let addTask = [
      {
        taskName: taskName.current.value,
        taskDescription: taskDescription.current.value,
        taskDate: taskDate.current.value,
        taskTime: taskTime.current.value,
      },
    ];
    setTask((prevTasks) => [...prevTasks, ...addTask]);
    Swal.fire({
      title: "task added",
      icon: "success",
      timer: 2500,
    }).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className="HomePage col-12 bg-danger d-flex flex-column justify-content-start align-items-center  gap-5">
      <header className="w-75 bg-black d-flex flex-row justify-content-between align-items-center  p-3">
        <h1 className="text-white">Home Page</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleShowModal}
        >
          add new task
        </button>
      </header>
      <table className="table table-bordered table-danger">
        <thead>
          <tr>
            <th>-</th>
            <th>Name</th>
            <th>Des</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {task.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.taskName}</td>
                <td>{el.taskDescription}</td>
                <td>{el.taskDate}</td>
                <td>{el.taskTime}</td>
                <td>
                  {
                    <div className="d-flex justify-content-evenly align-content-center">
                      <MdDeleteForever
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then(() => {
                            setTask(task.filter((_, i) => i !== index));
                            setShowModal(false);
                          });
                        }}
                      />

                      <FaEdit onClick={() => {}} />
                    </div>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal ? (
        <div
          className="MyModal w-100 d-flex  justify-content-center align-items-center animate__animated animate__fadeIn"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div
            className="modal-content w-25 bg-white p-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form
              action=""
              method="get"
              onSubmit={() => {
                AddNewTask();
                setShowModal(false);
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="taskName" className="form-label">
                    Task Name
                  </label>
                  <input
                    ref={taskName}
                    type="text"
                    className="form-control"
                    id="taskName"
                    name="taskName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">
                    Task Description
                  </label>
                  <textarea
                    ref={taskDescription}
                    className="form-control"
                    id="taskDescription"
                    name="taskDescription"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDate" className="form-label">
                    Task Date
                  </label>
                  <input
                    ref={taskDate}
                    type="date"
                    className="form-control"
                    id="taskDate"
                    name="taskDate"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskTime" className="form-label">
                    Task Time
                  </label>
                  <input
                    ref={taskTime}
                    type="time"
                    className="form-control"
                    id="taskTime"
                    name="taskTime"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={AddNewTask}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
