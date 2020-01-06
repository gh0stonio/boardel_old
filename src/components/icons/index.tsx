import React from 'react'

const SVG: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '2rem', height = '2rem', viewBox = '0 0 100 125', ...props }) => (
  <svg viewBox={viewBox} width={width} height={height} {...props}>
    {props.children}
  </svg>
)

export const DoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '2.2rem', height = '2.2rem', ...props }) => (
  <SVG {...{ width, height, ...props }}>
    <path d="M33.29,82,7.46,47.54h0A10.63,10.63,0,0,1,22,47.09L40,63,81.49,20.59A9.19,9.19,0,0,1,95,21h0L46.91,82.2A8.58,8.58,0,0,1,33.29,82Z" />
  </SVG>
)

export const PostponeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '2.6rem', height = '2.6rem', ...props }) => (
  <SVG {...{ width, height, ...props }}>
    <path d="M45.2,64.4c-0.4-1.1-1.5-1.9-2.7-2l-18-0.8c-1.6-0.1-3.1,1.2-3.1,2.9l-0.8,18c-0.1,1.2,0.6,2.3,1.7,2.9   c0.4,0.2,0.8,0.3,1.3,0.3c0.7,0,1.5-0.3,2-0.8l5.7-5.2c0.1,0.1,0.2,0.2,0.4,0.3C37.2,83.2,43.5,85,50,85c19.3,0,35-15.7,35-35   S69.3,15,50,15S15,30.7,15,50c0,2.2,1.8,4,4,4s4-1.8,4-4c0-14.9,12.1-27,27-27s27,12.1,27,27S64.9,77,50,77   c-4.4,0-8.7-1.1-12.5-3.1l6.9-6.3C45.3,66.8,45.6,65.5,45.2,64.4z" />
  </SVG>
)

export const TodayIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <SVG {...props}>
    <path d="M88.4 13H84V8c0-1.7-1.3-3-3-3h-2c-1.6 0-3 1.3-3 3v5H24V8c0-1.7-1.3-3-3-3h-2c-1.6 0-3 1.3-3 3v5h-4.4C8 13 5 16.1 5 19.9V88c0 3.8 3 6.9 6.6 6.9h76.8c3.6 0 6.6-3.1 6.6-6.9V19.9c0-3.8-3-6.9-6.6-6.9zM87 21v13H13V21h74zM13 87V42h74v45H13zm53.6-29.2L46 78.4c-.3.3-.6.4-1 .4s-.7-.1-1-.4L32.8 67.1c-.5-.5-.5-1.4 0-1.9l4.9-4.9c.5-.5 1.4-.5 1.9 0l5.6 5.6L60 51.2c.5-.5 1.4-.5 1.9 0l4.7 4.7c.5.5.5 1.4 0 1.9z" />
  </SVG>
)

export const BurgerMenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ viewBox = '0 0 22 24', ...props }) => (
  <SVG {...{ viewBox, ...props }}>
    <path
      d="M4 16h12a1 1 0 010 2H4a1 1 0 010-2zm0-5h16a1 1 0 010 2H4a1 1 0 010-2zm0-5h14a1 1 0 010 2H4a1 1 0 110-2z"
      fillRule="nonzero"
      fill="#000"
    />
  </SVG>
)

export const SuccessIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  viewBox = '0 0 67 83.75',
  height = '10rem',
  width = '10rem',
  ...props
}) => (
  <SVG {...{ viewBox, height, width, ...props }}>
    <path d="M6.5 6c-.6 0-1 .4-1 1 0 10.1 6 19.1 15.3 23.1 2.2 3.4 4.9 6.4 8.1 8.8v13.8h-1.4c-.6 0-1 .4-1 1v4.9h-2.4c-.6 0-1 .4-1 1v5.9c0 .6.4 1 1 1h18.8c.6 0 1-.4 1-1v-5.9c0-.6-.4-1-1-1h-2.4v-4.9c0-.6-.4-1-1-1h-1.4V38.9c3.2-2.5 5.9-5.4 8.1-8.9 3-1.3 5.6-3 7.9-5.3 4.7-4.7 7.3-11 7.3-17.7 0-.6-.4-1-1-1h-8.7c0-1.7-.1-3.1 0-4.4 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.7-.3H16.2c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.8.1 1.3.1 2.7 0 4.4H6.5zm1 2h7.7c-.1 6.7.5 12.5 3.8 19C12.2 23 7.9 15.9 7.5 8zm34.4 56.5H25.1v-3.9h16.8v3.9zm-3.4-5.9h-10v-3.9h10.1v3.9zm-7.7-5.9V40.4s.1 0 .1.1c.7.4 1.4.9 2.1 1.3.2.1.3.1.5.1s.3 0 .5-.1c.7-.4 1.4-.8 2.1-1.3 0 0 .1 0 .1-.1v12.3h-5.4zm21.9-29.4c-1.4 1.4-3 2.6-4.7 3.6 3.1-6.2 3.9-11.9 3.8-19h7.7c-.3 5.9-2.6 11.3-6.8 15.4zM17.3 2.5h32.5c-.2 5.5 2.7 25.9-16.3 37.2C15.4 29 17.6 11 17.3 2.5z" />
    <path d="M28.4 19.7l-2.2 6.8c-.1.4 0 .9.4 1.1s.8.3 1.2 0l5.8-4.2 5.8 4.2c.3.3.8.3 1.2 0 .4-.3.5-.7.4-1.1l-2.2-6.8 5.8-4.2c.4-.3.5-.7.4-1.1s-.5-.7-1-.7h-7.2l-2.2-6.8c-.1-.4-.5-.7-1-.7s-.8.3-1 .7l-2.2 6.8h-7.2c-.4 0-.8.3-1 .7s0 .9.4 1.1l5.8 4.2zm2.7-4.1c.4 0 .8-.3 1-.7l1.5-4.6 1.5 4.6c.1.4.5.7 1 .7h4.8L37 18.4c-.4.3-.5.7-.4 1.1l1.5 4.6-3.9-2.8c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2l-4 2.9 1.5-4.6c.1-.4 0-.9-.4-1.1l-3.9-2.8h4.9z" />
  </SVG>
)

export const Loader: React.FC<React.SVGProps<SVGSVGElement>> = ({
  viewBox = '0 0 100 100',
  height = '3.2rem',
  width = '3.2rem',
  ...props
}) => (
  <SVG {...{ viewBox, height, width, ...props }}>
    <circle cx="50" cy="50" r="29.8077" fill="none" stroke="#dfe2f3" strokeWidth="2">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.2195121951219512s"
        values="0;40"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
        begin="-0.6097560975609756s"
      ></animate>
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1.2195121951219512s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
        begin="-0.6097560975609756s"
      ></animate>
    </circle>
    <circle cx="50" cy="50" r="8.41558" fill="none" stroke="#a8abbb" strokeWidth="2">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1.2195121951219512s"
        values="0;40"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
      ></animate>
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1.2195121951219512s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
      ></animate>
    </circle>
  </SVG>
)
