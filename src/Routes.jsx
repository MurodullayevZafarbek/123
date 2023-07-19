import { Route, Routes } from "react-router"
import Group from "./Group"
import Groups from "./Groups"
import A from "./A"

export default () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <Routes>
                    <Route path="/" element={<A />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/group/:id" element={<Group />} />
                </Routes>
            </div>
        </>

    )
}