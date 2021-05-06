import { Link } from '../../Components/UI/Link'
import { Button } from '../../Components/UI/Button'

export const columns = [
  {
    title: 'Number',
    dataIndex: 'key',
    key: 'number',
    width: '25%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
  },
  {
    title: 'API',
    dataIndex: 'api',
    key: 'api',
    width: '25%',
  },
  {
    title: '',
    dataIndex: '',
    key: 'button',
    width: '25%',
    render: record => (
      <Button>
        <Link to={`${record.name}`}>Open Page</Link>
      </Button>
    ),
  },
]

export const adapter = object => {
  const array = Object.entries(object)
  const result = array.map((innerArray, index) => ({
    name: innerArray[0],
    api: innerArray[1],
    key: index + 1,
  }))
  return result
}

export const loader = state => {
  return state === 'pending'
}
