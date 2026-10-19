import { title } from "process";

const resolvers = {
    Query: {
        job: () => {
            return {
                id: "test-id",
                title: "SDE",
                description: "Do work"
            }
        }
    }
}

export default resolvers;