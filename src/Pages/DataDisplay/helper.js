import moment from 'moment'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'

export const finalDataAdapter = object => {
  const results = object.results.map((innerObject, index) => ({
    ...innerObject,
    key: index + 1,
  }))
  return {
    ...object,
    results,
  }
}

const genderSelection = gender => {
  if (gender === 'male') {
    return <ManOutlined />
  }
  if (gender === 'female') {
    return <WomanOutlined />
  }
  return gender
}

const momentFormat = date => moment(date).format('LLLL')

const populationFilter = (value, record) => {
  if (value === 0)
    return +record.population === 0 || record.population === 'unknown'
  return +record.population <= value
}

export const loader = state => {
  return state === 'pending'
}

export const starships = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    width: '25%',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    width: '10%',
    responsive: ['md'],
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
]

export const people = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: '10%',
    render: gender => genderSelection(gender),
  },
  {
    title: 'Birth year',
    dataIndex: 'birth_year',
    key: 'birth_year',
    width: '20%',
    responsive: ['md'],
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
]

export const films = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '20%',
  },
  {
    title: 'Producer',
    dataIndex: 'producer',
    key: 'producer',
    width: '20%',
    responsive: ['md'],
  },
  {
    title: 'Release date',
    dataIndex: 'release_date',
    key: 'release_date',
    width: '10%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
]

export const species = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
    width: '15%',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
    width: '20%',
    responsive: ['md'],
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
]

export const planets = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    width: '15%',
    responsive: ['md'],
    filters: [
      {
        text: '< 1',
        value: 0,
      },
      {
        text: '<= 10 000',
        value: 10000,
      },
      {
        text: '<= 10 000 000',
        value: 10000000,
      },
      {
        text: '<= 1 000 000 000 000',
        value: 1000000000000,
      },
    ],
    onFilter: (value, record) => populationFilter(value, record),
  },
  {
    title: 'Terrain',
    dataIndex: 'terrain',
    key: 'terrain',
    width: '20%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    responsive: ['lg'],
    width: '25%',
    render: date => momentFormat(date),
  },
]

export const vehicles = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    width: '20%',
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
    width: '10%',
    responsive: ['md'],
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    width: '25%',
    responsive: ['lg'],
    render: date => momentFormat(date),
  },
]
