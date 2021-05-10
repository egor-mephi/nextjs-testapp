import {Grid} from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import MaterialTable from "material-table";
import tableIcons from "../components/indexIcons";

function Index(/*{dataSSR}*/) {
    //const tableRef = React.createRef();

    return (
        <div style={{maxWidth: '100%', maxHeight: '100%'}}>
            <Grid container spacing={0}>
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