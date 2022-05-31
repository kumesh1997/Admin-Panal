import React, { useState } from "react";
const CREATE_NEW_TITLE = "Create new title";

function SearchableDropDown({
  data,
  placeholder = "Sample Placeholder",
  createmode = false,
  extraTailwind = {},
}) {
  const [input, setInput] = useState("");
  const [ListOpened, setListOpened] = useState(true);
  const [List, setList] = useState(data);
  const [createModeStatus, setCreateModeStatus] = useState(false);

  const filterList = (needle) => {
    const query = needle.toLowerCase();
    let sortedData = data.filter(({ title }) => title.toLowerCase().indexOf(query) >= 0);
    if (createmode) {
      if (sortedData.length === 0) {
        setCreateModeStatus(true);
      }
    }
    setList(sortedData);
  };

  const setNewList = (e) => {
    setInput(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setList(data);
    } else {
      filterList(input);
    }
  };

  const setChecked = (item) => {
    setInput(item);
    setListOpened(true);
  };

  const inputHandler = (e) => {
    setNewList(e);
    if (createModeStatus) {
      setList((oldList) => [
        ...oldList,
        { id: oldList[oldList.length - 1]?.id + 1, title: CREATE_NEW_TITLE },
      ]);
    }
  };

  const buttonClickHandler = (e, item) => {
    if (item === CREATE_NEW_TITLE) {
      setChecked(input);
    } else {
      setChecked(item);
    }
  };

  return (
    <div className="searchable-dropdown relative">
      {/* Dropdown Icon */}

     
      <button type="button" onClick={() => setListOpened(false)}>
        <svg
          className={`h-6 w-6 absolute transform transition-all duration-150 right-6 z-5 ${
            ListOpened ? "rotate-0  top-4 " : "rotate-180 top-4"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <input
        type="text"
        className="border border-drop-primary p-3 rounded-full w-full"
        placeholder={placeholder}
        onFocus={() => setListOpened(false)}
        onChange={(e) => inputHandler(e)}
        value={input}
      />


      <ul
        className={`price-list bg-white w-4/5 shadow-2xl text-drop-grey overflow-hidden flex-col rounded-lg absolute ${
          ListOpened ? "hidden" : "flex"
        }`}
      >
        {List.map(({ id, title }) => (
          <button
            key={id}
            type="button"
            onClick={(e) => buttonClickHandler(e, title)}
            className={`capitalize px-4 py-2 transition-all duration-100 ease-linear text-left ${
              extraTailwind?.item
            } ${
              title === CREATE_NEW_TITLE
                ? // eslint-disable-next-line no-template-curly-in-string
                  `text-drop-white ${extraTailwind?.createButton}`
                : ""
            }`}
          >
            {title}
          </button>
        ))}
      </ul>

      
    </div>
  );
}

export default SearchableDropDown;
