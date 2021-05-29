import {Grid} from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import MaterialTable from "material-table";
import tableIcons from "../components/indexIcons";

const fetcher = url => fetch(url).then(res => res.json());

function Index(/*{dataSSR}*/) {
    //const tableRef = React.createRef();
    const {data, error} = useSWR(process.env.NEXT_PUBLIC_API_PATH, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);
    return (
        <div style={{maxWidth: '100%', maxHeight: '100%'}}>
            <Grid container spacing={0}>
                <Grid item xs={1}>
                    <div>{data.name}</div>
                    <div>{process.env.NEXT_PUBLIC_API_PATH}</div>
                    <div>{process.env.API_PATH}</div>
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