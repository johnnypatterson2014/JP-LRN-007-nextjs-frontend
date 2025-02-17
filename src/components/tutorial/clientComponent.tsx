import { testAction } from '@/lib/serverActions';

export default function clientComponent() {

    return (

        <div id="main" className="container max-w-screen-md mx-auto m-10 p-5 border border-gray-200 rounded">

            <form action={testAction}>

                <div className="mb-3">

                    <input autoComplete="off" name="username" type="text" placeholder="user name" className="input input-bordered w-full max-w-xs" />
                    <button className="btn mx-2">Submit</button>

                </div>

            </form>
        </div>

    )
}