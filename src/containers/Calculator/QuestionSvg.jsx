import React from 'react'
import { Tooltip, TooltipGroup } from 'components/Tooltip'

const QuestionSvg = ({ help = 'help text', ...props }) => (
  <TooltipGroup>
    <Tooltip label={help} position="right">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        shape-rendering="geometricPrecision"
        style={{ display: 'block' }}
        {...props}
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r=".5" />
      </svg>
    </Tooltip>
  </TooltipGroup>
)

export { QuestionSvg }
