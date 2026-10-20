import { getCompany } from "./db/companies.js";
import { getJob, getJobs } from "./db/jobs.js";

const resolvers = {
    Query: {
        jobs: () => getJobs()
    },

    Job: {
        date: (x) => {
            const d = x.createdAt
            return d.slice(0, 10);
        },
        company: (job) => getCompany(job.companyId)
    }
}

export default resolvers;