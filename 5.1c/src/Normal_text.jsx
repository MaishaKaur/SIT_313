import { Header } from 'semantic-ui-react'

const HeaderExamplePage = (props)  => (
  <div style={{ margin: 0, padding: 0 }}>
    <Header as='h1' style={{ margin: 0 }}>{props.title1}</Header>
    <Header as='h2' style={{ margin: 0 }}>{props.title2}</Header>
    <Header as='h3' style={{ margin: 0 }}>{props.title3}</Header>
    <Header as='h4' style={{ margin: 0 }}>{props.title4}</Header>
    <Header as='h5' style={{ margin: 0 }}>{props.title5}</Header>
    <Header as='h6' style={{ margin: 0 }}>{props.title6}</Header>
  </div>
)

export default HeaderExamplePage