/* eslint-disable react/prop-types */
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

function SearchBar({ formSubmit, value, handleSearchKey, clearSearch }) {
  let dropdownValue = "";
  if (value) {
    dropdownValue = value;
  } else if (value == "All") {
    dropdownValue = "Category";
  }

  return (
    <div className="bg-[#f0f0f0] w-fit mt-10 mr-auto mb-16 ml-auto p-2 rounded-md">
      <form className="flex items-center" onSubmit={formSubmit}>
        {/* <input
          className="bg-[#f0f0f0] outline-none cursor-pointer"
          type="text"
          placeholder="Search by category"
          value={value}
          onChange={handleSearchKey}
        /> */}
        <CDropdown>
          <CDropdownToggle color="secondary">{dropdownValue}</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem onClick={handleSearchKey}>Development</CDropdownItem>
            <CDropdownItem onClick={handleSearchKey}>Shoping</CDropdownItem>
            <CDropdownItem onClick={handleSearchKey}>Travel</CDropdownItem>
            <CDropdownItem onClick={handleSearchKey}>All</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        {value && <span onClick={clearSearch}>X</span>}
        <button className="outline-none border-none py-1 px-4 rounded-md bg-[#0f52ba] text-[#fff]">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
