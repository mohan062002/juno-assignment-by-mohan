import React, { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
 ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineExternalLink } from "react-icons/hi";
import Modal from "react-modal";

const people = [
  { name: "High Flag" },
  { name: "Temp Flag" },
  { name: "Restricted Un Flag" },
  { name: "Restricted Flag" },
  { name: "Reviewed" },
];

const riskLevel = [
  { name: "Low" },
  { name: "Medium" }, 
  { name: "High" }
   ];

const item = [
  {
    name: "Mohan Agarmore",
    email: "mohanagarmore@gmail.com",
    riskLevel: "Low",
    triggeredReason: "IP Change",
    inQueueFor: "5 Days",
    dataAddedOn: "12 Octs , 2023",
    previouslyReviewed: "Yes",
  },
  {
    name: " Duressh Solanke",
    email: "durgesh@gmail.com",
    riskLevel: "Medium",
    triggeredReason: "IP Change",
    inQueueFor: "3 Days",
    dataAddedOn: "12 Octs , 2023",
    previouslyReviewed: "Yes",
  },
  {
    name: "Sachin Tendulkar",
    email: "sachin@gmail.com",
    riskLevel: "High",
    triggeredReason: "IP Change",
    inQueueFor: "4 Days",
    dataAddedOn: "12 Octs , 2023",
    previouslyReviewed: "Yes",
  },
  {
    name: "Rahul Dravid",
    email: "rahul@gmail.com",
    riskLevel: "Low",
    triggeredReason: "IP Change",
    inQueueFor: "1 Days",
    dataAddedOn: "12 Octs , 2023",
    previouslyReviewed: "Yes",
  },
];

const completed = [
  {
    name: "sam altman",
    email: "samaltman@gmail.com",
    riskLevel: "High",
    triggeredReason: "closed",
    inQueueFor: "5 Days",
    dataAddedOn: "15 Dec , 2023",
    actionTakenBy: "Mohan Agarmore",
    actionTakenMail: "mohan@gmail.com",
  },
  {
    name: "ram ratan",
    email: "ramratan@gmail.com",
    riskLevel: "High",
    triggeredReason: "closed",
    inQueueFor: "3 Days",
    dataAddedOn: "10 Nov , 2023",
    actionTakenBy: "Durgesh Solanke",
    actionTakenMail: "durgesh@gmail.com",
  },
  {
    name: "rajni rathod",
    email: "rajnorathod@gmail.com",
    riskLevel: "Low",
    triggeredReason: "SOI request",
    inQueueFor: "5 Days",
    dataAddedOn: "15 Dec , 2023",
    actionTakenBy: "Mohan Agarmore",
    actionTakenMail: "mohan@gmail.com",
  },
  {
    name: "sam altman",
    email: "samaltman@gmail.com",
    riskLevel: "Medium",
    triggeredReason: "closed",
    inQueueFor: "5 Days",
    dataAddedOn: "15 Dec , 2023",
    actionTakenBy: "Mohan Agarmore",
    actionTakenMail: "mohan@gmail.com",
  },
];
export default function Mainbar() {

  const [selected, setSelected] = useState(people[0]);
  const [selected2, setSelected2] = useState(riskLevel[0]);
  
  const [flag, setFlag] = useState(false);

  const [flag2, setFlag2] = useState(false);
  const [toggle, setToggle] = useState(item);

  const fliptable = () => {
    setToggle(flag2 ? completed : item);
  };

  useEffect(() => {
    fliptable();
  }, [flag2]);

  function closeModal() {
    setFlag(false);
  }

  const sortByRiskLevel = (a, b) => {
    const riskLevelOrder = { Low: 1, Medium: 2, High: 3 };
    return riskLevelOrder[a.riskLevel] - riskLevelOrder[b.riskLevel];
  };

  const risklevelsorting = () => {
    setToggle(toggle.slice().sort(sortByRiskLevel));
  };

  const sortByInQueueFor = (a, b) => {
    // Assuming 'inQueueFor' values are represented as strings with ' Days' suffix
    const parseInQueueFor = (item) => parseInt(item.inQueueFor.split(" ")[0]);
    return parseInQueueFor(a) - parseInQueueFor(b);
  };

   const inQueueForSotring = () => {
    setToggle(toggle.slice().sort(sortByInQueueFor));
  };

  const sortByDateAddedOn = (a, b) => {
  const dateA = new Date(a.dataAddedOn);
  const dateB = new Date(b.dataAddedOn);

  return dateA - dateB;
};
  
  const sortbydate=()=>{
    setToggle(toggle.slice().sort(sortByDateAddedOn))
  }


  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      background: "white",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "476px",
      height: "465px",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
  };

  const getRiskLevelStyle = (riskLevel) => {
    switch (riskLevel) {
      case "Low":
        return { color: "green" }; // Example style for Low risk level
      case "Medium":
        return { color: "orange" }; // Example style for Medium risk level
      case "High":
        return { color: "red" }; // Example style for High risk level
      default:
        return {}; // Default style
    }
  };

  const getRiskLevelBackgroundColor = (riskLevel) => {
    switch (riskLevel) {
      case "Low":
        return { backgroundColor: "darkgreen" };
      case "Medium":
        return { backgroundColor: "#EE7600" };
      case "High":
        return { backgroundColor: "darkred" };
      default:
        return {};
    }
  };


  const [email, setEmail] = useState("");
  const [uar, setUar] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [charge, setCharge] = useState("");

  const handleUarChange = (value) => {
    setUar(value);
  };

  const shadowModalButton = () => {
    let flag = false;
    if (
      email !== "" &&
      uar !== "" &&
      reason !== "" &&
      note !== "" &&
      charge !== ""
    ) {
      flag = true;
    }

    switch (flag) {
      case true:
        return { backgroundColor: "red" };
      case false:
        return { backgroundColor: "#C0C0C0" };
      default:
        return {};
    }
  };

  const modalvalues = () => {
    setEmail("");
    setUar("");
    setReason("");
    setNote("");
    setCharge("");
    setFlag(false);
  };

  return (
    <div className="mx-12">
      <div className="my-12 text-4xl font-semibold">Monitoring</div>

      <div className="border-b-4 border-gray-200 flex justify-between   ">
        <div className="col-span-1 flex justify-start items-end gap-5 ">
          <button
            className="w-[200px] h-10 hover:border-b-4 leading-4 hover:text-blue-700  font-medium text-gray-500 hover:border-blue-700 hover:shadow-xl hover:shadow-white flex justify-center place-item-end"
            onClick={() => {
              setFlag2(false);
              fliptable();
            }}
          >
            Pending
          </button>
          <button
            className="w-[200px] h-10 hover:border-b-4 leading-4 hover:text-blue-700 font-medium text-gray-500 hover:border-blue-700 hover:shadow-xl hover:shadow-white flex justify-center place-item-end"
            onClick={() => {
              setFlag2(true);
              fliptable();
            }}
          >
            Completed
          </button>
        </div>

        <div className="col-span-1 flex justify-end mb-2 ">
          <button
            className="flex gap-2 bg-faintred p-2 rounded-md "
            onClick={() => {
              setFlag(true);
            }}
          >
            <span className="mt-1">
              <RxCrossCircled color="#D13B3B" />
            </span>
            <p className="text-customRed"> Close Account</p>
          </button>
        </div>
      </div>

      {flag && (
        <Modal
          isOpen={flag}
          // onRequestClose={closeModal}
          style={customStyles}
          className=" md:absolute md:left-1/3 mt-[80px] md:mt-0 md:top-1/3 rounded-lg p-4"
          contentLabel="Example Modal"
        >
          <div className="flex justify-between mx-2">
            <div className="text-2xl font-medium">Close Account</div>
            <button onClick={closeModal}>
              <RxCross2 style={{ fontSize: "2em" }} />
            </button>
          </div>
          <form className="flex-col gap-3 mx-2 mt-6" onSubmit={modalvalues}>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="" className=" text-gray-500">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                required
                className="border-2 border-gray-200 p-1 rounded-lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex pt-4">
              <p className="text-gray-500">Want to file UAR ?</p>

              <div className="flex ml-8 gap-6">
                <div className="item-center">
                  <input
                    type="radio"
                    className="w-4 h-4 ml-2"
                    onClick={() => handleUarChange("Yes")}
                  />
                  <label htmlFor="" className="ml-2">
                    Yes
                  </label>
                </div>

                <div className="item-center">
                  <input
                    type="radio"
                    className="w-4 h-4 ml-2"
                    onClick={() => handleUarChange("No")}
                  />
                  <label htmlFor="" className="ml-2">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-1 pt-4">
              <label htmlFor="" className="text-gray-500">
                Reason
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 p-1 rounded-lg"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
            </div>

            <div className=" flex flex-col pt-4 gap-y-1">
              <label htmlFor="" className="text-gray-500">
                Note
              </label>
              <textarea
                id="message"
                rows="2"
                class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200"
                placeholder="Write your thoughts here..."
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="flex justify-between pt-8">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-4 h-4 ml-2"
                  onChange={() => setCharge("Yes")}
                />
                <label htmlFor="" className="text-gray-500 ml-2">
                  Charge closure fee
                </label>
              </div>

              <button
                style={shadowModalButton()}
                className="bg-gray-500 text-white p-3 rounded-md max-w-full"
              >
                close account
              </button>
            </div>
          </form>
        </Modal>
      )}
      <div className="flex justify-start place-items-center gap-2 mt-9">
        <div class="w-[370px] h-10 mt-[11px]  ">
          <div class="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-2 border-gray-300">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

        <div className="flex gap-4 place-items-center">
          <div className=" w-36  h-8 ">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate font-medium text-gray-500 text-center">
                    {selected.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute right-0 justify-items-start mt-3 w-[190px]  overflow-visible rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-blue-200 text-blue-900 m-1 rounded-md"
                              : "text-gray-500"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <div className=" w-36 h-8 b">
            <Listbox value={selected2} onChange={setSelected2}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate font-medium text-gray-500 text-center">
                    {selected2.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-3 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                    {riskLevel.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-blue-200 text-blue-900 m-1 rounded-md"
                              : "text-gray-500 font-medium"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 bg-gray-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Risk Level
                    <button onClick={risklevelsorting}>
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Triggered Reason</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    In Queue For
                    <button onClick={inQueueForSotring}>
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </button>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Data Added On
                    <button onClick={sortbydate}>
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </button>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    {flag2 === false ? (
                      <h1>Previously Reviwed</h1>
                    ) : (
                      <h1>Action Taken By</h1>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {toggle.map((item, index) => (
                <tr key={index} className="bg-white border-b h-[72px]">
                  <th
                    scope="row"
                    className="flex max-w-full justify-around px-6 py-4"
                  >
                    <div className="font-medium text-gray-900 whitespace-nowrap w-2/3">
                      <p className="mb-2">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.email}</p>
                    </div>
                    <div className="flex items-center justify-center w-1/3">
                      <HiOutlineExternalLink
                        style={{ color: "blue", fontSize: "20px" }}
                      />
                    </div>
                  </th>

                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2 b"
                        style={getRiskLevelBackgroundColor(item.riskLevel)}
                      ></div>
                      <p style={getRiskLevelStyle(item.riskLevel)}>
                        {item.riskLevel}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">{item.triggeredReason}</td>
                  <td className="px-6 py-4">{item.inQueueFor}</td>
                  <td className="px-6 py-4">{item.dataAddedOn}</td>
                  <td className="px-6 py-4">
                    {flag2 === false ? (
                      item.previouslyReviewed === "Yes" ? (
                        <div className="text-gray-900 whitespace-nowrap w-2/3">
                          <p className="mb-2">{item.previouslyReviewed}</p>
                          <p className="text-sm text-gray-500">
                            {item.dataAddedOn}
                          </p>
                        </div>
                      ) : (
                        <h1>No</h1>
                      )
                    ) : (
                      <div className="font-medium text-gray-900 whitespace-nowrap w-2/3">
                        <p className="mb-2">{item.actionTakenBy}</p>
                        <p className="text-sm text-gray-500">
                          {item.actionTakenMail}
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
