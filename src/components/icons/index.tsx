import { DoneSvg, PostponeSvg } from './styles'

export const DoneIcon = ({ width = '2.2rem', height = '2.2rem' }: { width?: string; height?: string }) => (
  <DoneSvg viewBox="0 0 100 125" x="0px" y="0px" width={width} height={height}>
    <path d="M33.29,82,7.46,47.54h0A10.63,10.63,0,0,1,22,47.09L40,63,81.49,20.59A9.19,9.19,0,0,1,95,21h0L46.91,82.2A8.58,8.58,0,0,1,33.29,82Z" />
  </DoneSvg>
)

export const PostponeIcon = ({ width = '2.6rem', height = '2.6rem' }: { width?: string; height?: string }) => (
  <PostponeSvg viewBox="0 0 100 125" x="0px" y="0px" width={width} height={height}>
    <path d="M45.2,64.4c-0.4-1.1-1.5-1.9-2.7-2l-18-0.8c-1.6-0.1-3.1,1.2-3.1,2.9l-0.8,18c-0.1,1.2,0.6,2.3,1.7,2.9   c0.4,0.2,0.8,0.3,1.3,0.3c0.7,0,1.5-0.3,2-0.8l5.7-5.2c0.1,0.1,0.2,0.2,0.4,0.3C37.2,83.2,43.5,85,50,85c19.3,0,35-15.7,35-35   S69.3,15,50,15S15,30.7,15,50c0,2.2,1.8,4,4,4s4-1.8,4-4c0-14.9,12.1-27,27-27s27,12.1,27,27S64.9,77,50,77   c-4.4,0-8.7-1.1-12.5-3.1l6.9-6.3C45.3,66.8,45.6,65.5,45.2,64.4z" />
  </PostponeSvg>
)
