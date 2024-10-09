"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({
  containerStyles,
  buttonStyles,
  iconsStyles,
}: {
  containerStyles: string
  buttonStyles: string
  iconsStyles: string
}) => {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button
        className={buttonStyles}
        onClick={() => swiper.slidePrev(1000)}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={buttonStyles}
        onClick={() => swiper.slideNext(1000)}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns
