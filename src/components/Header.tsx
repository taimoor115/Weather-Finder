import { Heading } from "@chakra-ui/react";

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return <Heading as="h1">{name}</Heading>;
};

export default Header;
