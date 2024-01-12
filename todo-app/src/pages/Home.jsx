import { Link } from '../Link';

export default function Home() {
    return (
        <>
        <div>
            <h1>Welcome to ToDo!</h1>
            <p>ToDo is a simple app that allows you to manage your tasks.</p>
        </div>
            <Link className='buttonLink' to={'/login'}>Get Started</Link>
        </>
    );
}

