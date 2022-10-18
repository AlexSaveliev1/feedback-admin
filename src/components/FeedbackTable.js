import { Table, Tag } from 'antd';
import { useState } from 'react';

const columns = [
  {
    width: 200,
    title: 'Response',
    dataIndex: 'response',
    key: 'response',
  },
  {
    title: 'User',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Page',
    dataIndex: 'page',
    key: 'page',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: tags => tags.map(tag => (<Tag color="blue" key={tag}>{tag}</Tag>))
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Api Operation',
    dataIndex: 'apiOperationId',
    key: 'apiOperationId',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

function FeedbackTable (props) {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      pagination={tableParams.pagination}
      dataSource={props.data}
      onChange={(pagination) => setTableParams({ pagination })}
      size="middle"
    />
  )
}

export default FeedbackTable;