import {Grid} from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import MaterialTable from "material-table";
import tableIcons from "../components/indexIcons";

const fetcher = url => fetch(url).then(res => res.json());

function Index(/*{dataSSR}*/) {
    //const tableRef = React.createRef();
    const [page, setPage] = React.useState(0);
    const [perPage, setPerPage] = React.useState(5);
    const {data, error} = useSWR(`https://localhost:443/api/rooms?page=${page}&per_page=${perPage}`, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);
    const tableRef = React.createRef();

    return (
        <div style={{maxWidth: '100%', maxHeight: '100%'}}>
            <Grid container spacing={0}>
                <Grid item xs={7}>
                    <MaterialTable
                        columns={[
                            {title: "id", field: "id"},
                            {title: "name", field: "name"},
                        ]}
                        onChangePage={(page, pageSize) => {setPage(page);setPerPage(pageSize)}}
                        onChangeRowsPerPage={pageSize => {setPerPage(pageSize)}}
                        page={page}
                        data={data.data}
                        totalCount={data.totalCount}
                        icons={tableIcons}
                        tableRef={tableRef}
                        options={{ pageSize: perPage }}
                    />
                </Grid>
                <Grid item xs={1}>
                    <div>{process.env.API_PATH}</div>
                    <div>{process.env.NODE_ENV}</div>
                </Grid>
            </Grid>
        </div>
    );
}

/*export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const dataSSR = Math.floor(Math.random() * 20);;


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            dataSSR,
        },
    }
}*/

export default Index