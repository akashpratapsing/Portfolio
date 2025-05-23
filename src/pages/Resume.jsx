import React, { Suspense } from 'react'
import Layout from '../Layouts/Layout'
import BackBtn from '../components/BackBtn'
import { AiFillCaretDown } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import CompLoader from '../components/Loader/CompLoader'

export default function Resume() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const options = ['Download as PDF', 'Download as png']

  const handleDownload = () => {
    if (selectedIndex === 0) {
      const a = document.createElement('a')
      a.href = '/resume/Resume.pdf'
      a.download = 'Resume.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      const a = document.createElement('a')
      a.href = '/resume/Akash.png'
      a.download = 'Akash_resume.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const handleView = () => {
    if (selectedIndex === 0) {
      window.open('/resume/Resume.pdf', '_blank')
    } else {
      window.open('/resume/Akash.png', '_blank')
    }
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center my-[4.5rem]">
        <BackBtn />
        <div
          style={{
            color: colorTheme.primaryText,
          }}
          className="max-w-[800px] flex flex-col items-center justify-center w-full p-4 "
        >
          <h1 className="text-4xl font-bold text-center mb-4">My Resume</h1>
          <Suspense fallback={<CompLoader />}>
            <img
              style={{
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.35)',
              }}
              className=""
              src="/resume/Akash.png"
              alt=""
            />
          </Suspense>
          <div className="my-4">
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
              aria-label="split button"
            >
              <Button onClick={handleView}>Preview</Button>
              <Button onClick={handleDownload}>{options[selectedIndex]}</Button>
              <Button
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <AiFillCaretDown />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </div>
    </Layout>
  )
}
