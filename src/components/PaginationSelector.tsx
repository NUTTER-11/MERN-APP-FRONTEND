import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination";
  
  type Props = {
    page: number;//current page no this gonna come from parent where we gona store the state
    pages: number;//total pages that exist
    onPageChange: (page: number) => void;//aby time page no is changed this function is going to be called
  };
  
  const PaginationSelector = ({ page, pages, onPageChange }: Props) => {// all the prop types are destructured in the compnent
    const pageNumbers = [];
    //generating an array of page no
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => onPageChange(page - 1)}
              />
            </PaginationItem>
          )}
  
          {pageNumbers.map((number) => (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => onPageChange(number)}
                isActive={page === number}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
  {/* this function will make thw next button display id the page  is not equal to the last page*/}
          {page !== pageNumbers.length && (
            <PaginationItem>
              <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    );
  };
  
  export default PaginationSelector;