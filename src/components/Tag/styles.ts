import styled from "styled-components";
import { cores } from "../../styles";

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.primary};
  color: ${cores.secondary};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`