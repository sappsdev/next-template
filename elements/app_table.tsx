import { AppEmpty } from "./app_empty";

type AppTable = {
  columns: Array<string>;
  rows: any;
  count: number
}

export const AppTable = ({
  columns,
  rows,
  count
}:AppTable) => {
  return(
    <div className="w-24 min-w-full">
    <div className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-x-scroll">
      <table className="rounded-b-md min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>              
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          { count > 0 && rows }
        </tbody>
      </table>
      { count == 0 &&
        <AppEmpty />
      }
    </div>
  </div>    
  )
}