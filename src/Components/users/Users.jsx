import { useEffect, useState } from "react";
import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import ReactPaginate from "react-paginate";
import UserCard from "./UserCard";

function Users({source}) {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState(source);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)

  const getData = () => {
 
              const slice = data.slice(offset, offset + perPage)
              // const postData = slice.map(re => <div key={re.id}>
              //    <UserCard id={re.id} name={re.name} avatar={re.avatar} />
              // </div>)
              setData(slice)
              setPageCount(Math.ceil(data.length / perPage))
}


useEffect(() => {
  getData();
},[offset]) 

const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage + 1)
};

  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>

      <div>
        {data.map((re) => <UserCard id={re.id} name={re.name} avatar={re.avatar} />)}
      </div>
      {/* <UserCard /> */}
      <Filters/>
      <Pagination onChange={handlePageClick} current={pageCount} />
      <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default Users;
