import { Link } from 'react-router-dom'

export const columns = [
  {
    title: 'Номер',
    dataIndex: 'key',
    key: 'number',
    width: '25%',
  },
  {
    title: 'Название',
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
    render: record => <Link to={`${record.name}`}>Открыть страницу</Link>,
  },
]

export const adapter = (object) => {
  const array = Object.entries(object)
  const result = array.map((innerArray, index) => ({
    name: innerArray[0],
    api: innerArray[1],
    key: index + 1,
  }))
  return result
}
