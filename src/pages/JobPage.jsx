import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                setJob(data);
            } catch (error) {
                console.log(`Error fetching data`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, []);
    return loading ? <Spinner /> : <p>{job.title}</p>;
};

export default JobPage;
