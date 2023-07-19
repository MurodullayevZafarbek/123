import Usetab from "./Usetab"
import defoult from "./default";
import { useEffect, useRef, useState } from "react";
import axios from "axios"
import { useParams } from "react-router";


export default () => {
    let { id } = useParams()

    let [users, setUsers] = useState({})
    let inp1 = useRef()
    let inp2 = useRef()
    async function getData() {
        console.log(id);
        const data = await axios.get(defoult().url + "/user/" + id)
        setUsers(data.data.DATA)
        console.log(data.data.DATA);
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
                defoult().url + "/user/"+ id,
                {
                    name: inp1Val,
                    age: inp2Val,

                }
            )
            console.log(data);
            getData()
        }
    }
    const delUser = async (e, iduser) => {
        const data = await axios.delete(defoult().url + "/user/" + id + "/" + iduser)
        console.log(data);
        getData()
    }
    async function upd(e, iduser) {
        let inp1Val = inp1.current.value
        let inp2Val = inp2.current.value
        const data = await axios.put(
            defoult().url + '/user/' + id + "/" + iduser, {
            name: inp1Val,
            age: inp2Val,
        })
        getData()
    }
    return (



        <body className="bg-gray-900 h-screen pt-10">
            <div className="w-full mb-10  flex flex-col items-center py-16 px-24 ">
                <div className="flex flex-col gap-4 p-7 bg-gray-800 rounded">
                    <input ref={inp1} type="text" placeholder="name" className="focus:bg-indigo-200 text-2xl py-3 px-2 border-none outline-nones rounded" />
                    <input ref={inp2} type="number" placeholder="age" className="focus:bg-indigo-200 text-2xl py-3 px-2 border-none outline-nones rounded" />
                    <button onClick={getInpVal} className="bg-indigo-600 active:bg-indigo-800 text-white text-2xl py-3 px-2 border-none outline-nones rounded">add</button>
                </div>
            </div>
            <div className="container w-10/12 mx-auto py-12">
                <h1 className="text-gray-400 text-2xl">{users.title}</h1>

                <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs  uppercase bg-gray-700 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Students
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3 text-right w-32">
                                    <a href="./yoqlama.html" className="mr-2 post-medium text-lg text-blue-600 text-blue-500 hover:underline"><i className="fa-solid fa-list-check"></i></a>
                                    <a data-modal-target="post-modal" data-modal-toggle="post-modal" href="#" className="post-medium text-lg    text-blue-500 hover:underline">+<i
                                        className="fa-solid fa-square-plus"></i></a>
                                    <span className="sr-only">Close modal</span>
                                </th>
                            </tr>
                        </thead>
                    </table>

                    {
                        users?.users?.map((item, i) => {
                            return (
                                <Usetab dn={delUser} key={item.id} data={item} sort={i} dn1={upd} />

                            )
                        })
                    }
                </div>

            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
            <script src="/main.js"></script>
        </body>

    )
}