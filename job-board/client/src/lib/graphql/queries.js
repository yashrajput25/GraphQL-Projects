
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient("http://localhost:9000/graphql");


export const getJobs = async () => {
    //creating query
    const query = gql`
        query {
            jobs{
                id,
                date
                title
                company{
                    id
                    name
                }
            }
        }
    `;

    //sending query and recieiving response
    const { jobs } = await client.request(query);
    return jobs;
}