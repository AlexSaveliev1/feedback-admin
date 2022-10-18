import { Row, Statistic } from 'antd';

function FeedbackStatistic(props) {
  return (
    <Row style={{ marginBottom: '20px' }}>
      <Statistic title="Total responses:" value={props.total} style={{ marginRight: '40px' }} />
      <Statistic title="New:" value={props.newCount} valueStyle={{ color: '#3f8600' }} />
    </Row>
  )
}

export default FeedbackStatistic;