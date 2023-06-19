/* eslint-disable react/prop-types */
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

function SearchBar({ formSubmit, value, handleSearchKey }) {
  let dropdownValue = "";
  if (value == "All") {
    dropdownValue = "Category";
  } else if (value) {
    dropdownValue = value;
  }

  return (
    <>
      <div className="bg-[#f0f0f0] w-fit mt-10 mr-auto mb-16 ml-auto p-2 rounded-md">
        <form className="flex items-center" onSubmit={formSubmit}>
          <CDropdown>
            <CDropdownToggle color="secondary">{dropdownValue}</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={handleSearchKey}>
                Development
              </CDropdownItem>
              <CDropdownItem onClick={handleSearchKey}>Shoping</CDropdownItem>
              <CDropdownItem onClick={handleSearchKey}>Travel</CDropdownItem>
              <CDropdownItem onClick={handleSearchKey}>Game</CDropdownItem>
              <CDropdownItem onClick={handleSearchKey}>All</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <button className="outline-none border-none py-1 px-4 rounded-md bg-[#0080ff] hover:bg-[#0f52ba] text-[#fff] ml-5">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
