import moment from 'moment'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'

export const starships = [
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
    width: '20%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: date => moment(date).format('LLLL'),
    width: '20%',
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
    render: gender =>
      gender === 'male' ? (
        <ManOutlined />
      ) : gender === 'female' ? (
        <WomanOutlined />
      ) : (
        gender
      ),
    width: '20%',
  },
  {
    title: 'Birth year',
    dataIndex: 'birth_year',
    key: 'birth_year',
    width: '20%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: date => moment(date).format('LLLL'),
    width: '20%',
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
  },
  {
    title: 'Release date',
    dataIndex: 'release_date',
    key: 'release_date',
    width: '20%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
]

export const species = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
    width: '20%',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
    width: '20%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
]

export const planets = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    width: '20%',
    filters: [
      {
        text: '< 1',
        value: 0,
      },
      {
        text: '<= 10000',
        value: 10000,
      },
      {
        text: '<= 10000000',
        value: 10000000,
      },
      {
        text: '<= 1000000000000',
        value: 1000000000000,
      },
    ],
    onFilter: (value, record) => {
      if (value === 0)
        return +record.population === 0 || record.population === 'unknown'
      return +record.population <= value
    },
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
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: date => moment(date).format('LLLL'),
    width: '20%',
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
    width: '20%',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: date => moment(date).format('LLLL'),
    width: '20%',
  },
]
