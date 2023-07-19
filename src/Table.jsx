export default ({data, sort, fn,fn1}) => { 
    console.log(data);
    return(
        <>
        <div className="w-10/12 mx-auto py-12 ">
    
    <div className="relative overflow-x-auto  shadow-xl sm:rounded-lg p-10">
        <table className="w-full text-sm  text-gray-400 p-10">

            <tbody>
                <tr className="bg-gray-800 hover:bg-gray-600">
                    <th scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap w-10 text-white">
                        1
                    </th>
                    <td className="px-6 py-4">
                    <a href={`/group/${data.id}`} className="px-6 py-4">{data.title}</a>
                    </td>
                    <td className="px-6 py-4 w-32">
                        <button onClick={(e)=>{fn1(e,data.id)}} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                            href="#" className="font-medium text-blue-500 hover:underline "><i
                                className="fa-solid fa-pen">EDIT</i></button>
                        <button onClick={(e)=>{fn(e,data.id)}} className="ml-3 font-medium text-blue-500 hover:underline"><i
                                className="fa-solid fa-trash">DELETE</i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
        
        </>
                  
    )
}