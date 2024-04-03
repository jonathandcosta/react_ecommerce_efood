import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`
