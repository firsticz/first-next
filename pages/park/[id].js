import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Table } from 'antd'


const TESTQUERY = gql`
query Countries {
  countries {
    code
    name
    emoji
  }
}
`

export default function Park() {
    const router = new useRouter()
    const {id} = router.query


    const columns = [
        {
            title: 'code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'emoji',
            dataIndex: 'emoji',
            key: 'emoji',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        }
    ];


    const {data, loading} = useQuery(TESTQUERY)
    console.log(loading);

    if(loading) {
        return <p>loading</p>
    }

    return(
        <>
            <Table dataSource={data.countries} columns={columns} loading={loading} />
        </>
    )
}