import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  console.log(ref.current?.value);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <InputGroup>
          <InputRightElement
            children={
              <BsSearch
                onClick={() => {
                  if (ref.current) {
                    onSearch(ref.current.value);
                  }
                }}
              />
            }
          />
          <Input
            placeholder="Search"
            variant="filled"
            borderRadius={20}
            ref={ref}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default Search;
