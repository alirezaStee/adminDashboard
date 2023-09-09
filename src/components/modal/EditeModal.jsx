import React, { useEffect } from "react";
import LoadingSpiner from "../alert/LoadingSpiner";

export default function EditeModal({
  isShow,
  onClose,
  data,
  setData,
  confirm,
  action,
  isLoading,
}) {
  const submitHundeler = (e) => {
    e.preventDefault();
    confirm();
  };
  return (
    <>
      <div
        open={isShow}
        className="fixed inset-0 z-[99999] hidden bg-gray-400/25 open:block "
      ></div>
      <div
        open={isShow}
        className="fixed inset-0 z-[999999]  hidden items-center justify-center p-4 open:flex sm:p-0"
      >
        <div className="mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm">
          <form className="relative p-5" onSubmit={submitHundeler}>
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>
              </div>
              <div>
                <label
                  htmlFor="helper-text-firstname"
                  className="mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white"
                >
                  Id
                </label>
                <input
                  type="text"
                  value={data.id || ""}
                  onChange={(e) => {
                    setData({ ...data, id: e.target.value });
                  }}
                  id="helper-text-firstname"
                  aria-describedby="helper-text-explanation"
                  className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="it will automaticly make"
                  disabled
                />
                <label
                  htmlFor="helper-text-firstname"
                  className="mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  value={data.firstName || ""}
                  onChange={(e) => {
                    setData({ ...data, firstName: e.target.value });
                  }}
                  id="helper-text-firstname"
                  aria-describedby="helper-text-explanation"
                  className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="helper-text-lastname"
                  className="mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  value={data.lastName || ""}
                  onChange={(e) => {
                    setData({ ...data, lastName: e.target.value });
                  }}
                  id="helper-text-lastname"
                  aria-describedby="helper-text-explanation"
                  className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="helper-text-email"
                  className="mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  value={data.email || ""}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  type="email"
                  id="helper-text-email"
                  aria-describedby="helper-text-explanation"
                  className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required
                />

                <label
                  htmlFor="helper-text-age"
                  className="mb-2 block text-start text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  value={data.age || ""}
                  onChange={(e) => {
                    setData({ ...data, age: e.target.value });
                  }}
                  type="number"
                  min={0}
                  max={100}
                  id="helper-text-age"
                  aria-describedby="helper-text-explanation"
                  className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={onClose}
                type="button"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-600 hover:bg-primary-600 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
              >
                {isLoading && <LoadingSpiner></LoadingSpiner>}
                <span className="ml-2">
                  {" "}
                  {action == "update" ? "update" : "add user"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
