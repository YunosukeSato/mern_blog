/* eslint-disable react/prop-types */

const Category = ({ label }) => (
  <p className="text-xs bg-gradient-to-r from-blue-500 to-blue-200 text-white w-fit py-1 px-2 rounded-md whitespace-nowrap capitalize">
    {label}
  </p>
);

export default Category;
