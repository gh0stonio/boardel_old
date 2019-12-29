import { LoaderWrapper } from './styles'

export const Loader = (props: { width?: string; height?: string }) => (
  <LoaderWrapper viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
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
  </LoaderWrapper>
)
