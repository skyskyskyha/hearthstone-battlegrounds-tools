import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

interface TextProps {
  children: string | number
  className?: string
  stroke?: boolean
  color?: string
  isNumber?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any
}

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
  },
  text: {
    fontFamily: 'JianLiBian,Georgia,Times,Times New Roman,serif',
  },
  number: {
    fontFamily: 'Belwe Bold',
  },
  stroke: {
    textShadow: `#000 2px 0 0, #000 1.75517px 0.95885px 0, #000 1.0806px 1.68294px 0, #000 0.14147px 1.99499px 0, #000 -0.83229px 1.81859px 0, #000 -1.60229px 1.19694px 0, #000 -1.97998px 0.28224px 0, #000 -1.87291px -0.70157px 0, #000 -1.30729px -1.5136px 0, #000 -0.42159px -1.95506px 0, #000 0.56732px -1.91785px 0, #000 1.41734px -1.41108px 0, #000 1.92034px -0.55883px 0`,
  },
}))

const Text: React.FC<TextProps> = ({
  children,
  className,
  stroke = true,
  color = 'white',
  isNumber,
  style,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <p
      className={clsx(classes.root, className, {
        [classes.text]: typeof children === 'string',
        [classes.number]: typeof children === 'number' || isNumber,
        [classes.stroke]: stroke,
      })}
      style={{ color, ...style }}
      {...rest}
    >
      {children}
    </p>
  )
}

export default Text
