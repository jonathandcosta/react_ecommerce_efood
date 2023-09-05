import { TagContainer } from "./styles";

export type Props = {
  size?: "small"
  children: string[]
}

const Tag = ({ children }: Props) => (
  <TagContainer>{children}</TagContainer>
)

export default Tag