import Table from "./Table"
import defoult from "./default";
import { useEffect, useRef, useState } from "react";
import axios from "axios"

export default () => {
    let [users, setUsers] = useState([])
    let inp1 = useRef()
    let inp2 = useRef()
    async function getData() {
        const data = await axios.get(defoult().url+"/group")
        setUsers(data.data.DATA)
    }
    useEffect(() => {
        getData()
    }, []);
    const getInpVal = async () => {
        let inp1Val = inp1.current.value
        let inp2Val = inp2.current.value
        if (inp1Val.length === 0 || inp2Val.length === 0) {
            alert('error')
        } else {
            let data = await axios.post(
                defoult().url+"/group", 
                    {
                        title: inp1Val,

                    }
            )
                    console.log(data);
            setUsers(data.data.DATA);
        }
    }
    const delUser = async (e, id) => {
        const data = await axios.delete(defoult().url + "/group/" + id)
        console.log(data);
        getData()
    }
    async function upd(e, id) {
        let inp1Val = inp1.current.value
        let inp2Val = inp2.current.value
        const data = await axios.put(
            defoult().url + '/group/' + id, {
            title: inp1Val,
        })
        getData()
    }
    return (
        
        <body className="bg-gray-900 w-screen h-screen p-10 ">

    <div className="w-full mb-10  flex flex-col items-center py-16 px-24 ">
      <div className="flex flex-col gap-4 p-7 bg-gray-800 rounded">
        <input ref={inp1} type="text" placeholder="name" className="focus:bg-indigo-200 text-2xl py-3 px-2 border-none outline-nones rounded" />
        <input ref={inp2} type="number" placeholder="age" className="focus:bg-indigo-200 text-2xl py-3 px-2 border-none outline-nones rounded" />
        <button onClick={getInpVal} className="bg-indigo-600 active:bg-indigo-800 text-white text-2xl py-3 px-2 border-none outline-nones rounded">add</button>
      </div>
      </div>
            

            <table className="w-full text-left text-sm text-gray-400 p-10">

            <thead className="w-screen  text-xs  uppercase bg-gray-200 p-10 bg-gray-700 text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Groups
                    </th>
                    <th scope="col" className="px-6 py-3 text-right w-32">
                        <a data-modal-target="post-modal" data-modal-toggle="post-modal" href="#" className="post-medium text-lg text-blue-500 hover:underline"><i
                                className="fa-solid fa-square-plus">+</i></a>
                        <span className="sr-only">Close modal</span>
                    </th>
                </tr>
            </thead>
            </table>
            {
                    users.map((item, i) => {
                        return (
                            <Table fn={delUser} key={item.id} data={item} sort={i} fn1={upd} />
            
                        )
                    })
                }
        </body>

    )
}