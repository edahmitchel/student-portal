import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const TableRow = ({ student }) => {
    // const [file, setFile] = useState()

    // useEffect(() => {


    //     return () => {
    //         const handledDownload = async function () {
    //             try {
    //                 const response = await axios.get(`http://localhost:3500/student/${student._id}`, {
    //                     responseType: 'blob',
    //                 });
    //                 const data = response.data;
    //                 setFile(data);
    //             } catch (error) {
    //                 // Handle error
    //             }





    //         }
    //         handledDownload()

    //     }
    // }, [student])


    return (

        <>
            <tr>
                <td>{student?.lastname} {student?.firstname}</td>
                <td>{student?.registrationNumber}</td>
                <td>

                    <a href={"https://gleaming-tuna-fashion.cyclic.app/student/" + student._id} className="btn download__btn" type="" >
                        Download <i className="uil uil-import"></i>
                    </a>
                </td>
                <td className="primary">{student?.topic}</td>
            </tr>
        </>


    )
}


export default TableRow