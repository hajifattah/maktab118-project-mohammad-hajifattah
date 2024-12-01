
export const SubCategory: React.FC<{list : string[]}> = ({list}) => {
  return (
    <div>
      <ul className="grid sm:grid-cols-3 grid-cols-1 text-center xs_app:text-start gap-y-1 gap-x-4 xs_app:grid-cols-2">
        {list.map((item,index) => {
            return <li key={index} className="hover:bg-gray-200 hover:text-black rounded-sm p-1">{item}</li>
        })}
      </ul>
    </div>
  );
};
