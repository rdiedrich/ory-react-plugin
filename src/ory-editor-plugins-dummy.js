import React from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import StarIcon from '@material-ui/icons/Star'

// This is the ReactJS component which you can find below this snippet
import InputTextField from './Components/InputTextField'

export default {
  Component: InputTextField,
  IconComponent: <StarIcon />,
  name: 'ory-editor-plugins-dummy',
  version: '0.0.1',
  text: 'Dummy'
}
