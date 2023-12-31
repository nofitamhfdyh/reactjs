import React from "react";
import Person from "./Person";

function NameList(){
        // const names = ['Nofita', 'Mahfudiyah','Farhan','Rizky','Alkarim']
        // const nameList = names.map(names => <h2>{names}</h2>)

        // return (
        //         <div>{nameList}</div>
        // )

        const names = ['Nofita', 'Mahfudiyah','Farhan','Rizky','Alkarim','Nofita','Nofita']
        const persons = [
                {
                        id: 1,
                        name: 'Nofita',
                        age: 23,
                        skill: 'Golang'
                },{
                        id:2,
                        name: 'Mahfudiyah',
                        age:30,
                        skill: 'Laravel'
                },{
                        id:3,
                        name: 'Farhan',
                        age:24,
                        skill: 'Code Igniter'
                },{
                        id:4,
                        name: 'Rizky',
                        age:60,
                        skill:'React'
                },{
                        id:5,
                        name: 'Alkarim',
                        age:45,
                        skill:'Java'
                }
        ]

        //const personList = persons.map(persons => <Person key={persons.id} persons={persons}> </Person>) //key -> yang penting unik, bisa pake id dan nama. jika nama, harus dipastikan kalau benar" tidak ada yang sama
        
        const nameList = names.map((names, indexxx) => <h2 key={indexxx}> {indexxx} {names}</h2>)
        return <div>{nameList}</div>
}

export default NameList