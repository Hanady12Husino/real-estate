import { useEffect, useState } from 'react';

import SideBar from '../components/SideBar';

const Agents = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 5;
  const lastIndex = currentPage * userPerPage;
  const firstIndex = lastIndex - userPerPage;
  const agents = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / userPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/get/:id');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-3 sm:p-7">
        <h1 className="text-emerald-900 font-semibold text-xl lg:text-3xl boerder-b mt-2">
          All agents
        </h1>
        {users && users.length > 0 && (
          <div className="flex flex-col gap-4 mt-[20px]">
            <table className="table-auto ">
              <thead className="bg-emerald-50 border-b px-10 text-left sr-only sm:not-sr-only">
                <th className="text-lg font-semibold text-emerald-900 py-4 px-4">
                  ID
                </th>
                <th className="text-lg font-semibold text-emerald-900 py-4 px-4">
                  Avatar
                </th>
                <th className="text-lg font-semibold text-emerald-900 py-4 px-4">
                  Name
                </th>
                <th className="text-lg font-semibold text-emerald-900 py-4 px-4">
                  Email
                </th>
              </thead>
              <tbody>
                {agents.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b flex flex-col mb-4 sm:table-row"
                  >
                    <td
                      className=" text-sm  text-emerald-500   @apply px-4 py-3   first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg
"
                    >
                      {user._id}
                    </td>
                    <td className="p-4 text-sm  text-emerald-500">
                      <img
                        src={user.avatar}
                        alt="listing cover"
                        className="h-10 w-10 object-cover rounded-full"
                      />
                    </td>
                    <td className="p-4 text-sm  text-emerald-500">
                      {user.fullname}
                    </td>
                    <td className="p-4 text-sm  text-emerald-500">
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav className="w-full flex justify-center">
              <ul className="inline-flex gap-2 -space-x-px text-sm">
                <li>
                  <a
                    href=""
                    onClick={prevPage}
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`hidden sm:inline ${
                      currentPage === n ? 'active' : ''
                    }`}
                    key={i}
                  >
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        changePage(n);
                      }}
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {n}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href=""
                    onClick={nextPage}
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;
